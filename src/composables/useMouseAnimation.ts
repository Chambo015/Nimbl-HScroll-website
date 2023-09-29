import {onMounted, onUnmounted, ref} from "vue";

const useMouseAnimation = () => {
    const X = ref();
    const Y = ref();
    const mouseEventHandle = (e: any) => {
        X.value = (e.clientX - window.innerWidth / 2) / window.innerWidth;
        Y.value = (e.clientY - window.innerHeight / 2) / window.innerHeight;
    };
    onMounted(() => {
        window.addEventListener("mousemove", mouseEventHandle);
    });
    onUnmounted(() => {
        window.removeEventListener("mousemove", mouseEventHandle);
    });
    return {X, Y}
};

export default useMouseAnimation