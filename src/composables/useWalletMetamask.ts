import axios, {AxiosError} from "axios";
import {ref, Ref, watch, toValue} from "vue";

interface IErrorRes {
    detail: string;
    message: string;
    status_code: number;
}

export const useWalletMetamask = ({wallet}: {wallet: Ref<string | null | undefined>}) => {
    const loading = ref(false);
    const error = ref<string | null | undefined>(null);

    const postWalletMetamask = async ({ token}: { token: string}) => {
        try {
            loading.value = true;
            const response = await axios.post(
                "https://api.nimbl.tv/en/api/metamask/connect/",
                {
                    wallet_address: toValue(wallet),
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                },
            );

            if (response.status === 200) {
                loading.value = false;
                error.value = null;
                return toValue(wallet)
            } else {
                loading.value = false;
                error.value = "Error";
            }
        } catch (e) {
            const err = e as AxiosError<IErrorRes>;
            console.log(e);
            loading.value = false;
            error.value = err.response?.data.message;
        }
    };

    watch(wallet , () => error.value = null)

    return {
        postWalletMetamask,
        loading,
        error,
    };
};
