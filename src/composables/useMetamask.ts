

    import {ethers} from "ethers";
    import axios from "axios";

    declare global {
        var ethereum: any;
    }
    
    
    const useMetamask = () => {
        const handleApiPost = async (endpoint: string, params: any) => {
            const result = await axios.post(endpoint, params, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            return result.data;
        };
    
        const requestMessage = (account: any, chain: any) => handleApiPost("https://api.nimbl.tv/en/api/request_message/", {
                address: account,
                chain: chain,
                network: "evm",
            });
    
        const verifyMessage = (message: any, signature: any) => handleApiPost("https://api.nimbl.tv/en/api/verify_message/", {
                message,
                signature,
                network: "evm",
            });
    
        const connectToMetamask = async () => {
            if (window.ethereum) {
                try {
                    await window.ethereum.enable();
                    const provider = new ethers.BrowserProvider(window.ethereum, "any");
    
                    const [accounts, chainId] = await Promise.all([
                        provider.send("eth_requestAccounts", []),
                        provider.send("eth_chainId", []),
                    ]);
    
                    const signer = await provider.getSigner();
    
                    return {signer, chain: chainId, account: accounts[0]};
                } catch (error) {
                    console.error("User denied account access", error);
                }
            } else {
                console.error("Ethereum wallet not detected");
            }
        };
    
        const handleAuth = async () => {
            try {
                const resolveFromMetamask = await connectToMetamask();
                if(!resolveFromMetamask) return
                const {signer, chain, account} = resolveFromMetamask
                console.log("account", account, "chain", chain);
        
                if (!account) {
                    throw new Error("No account found");
                }
                if (!chain) {
                    throw new Error("No chain found");
                }
        
                const {message} = await requestMessage(account, chain);
                const signature = await signer.signMessage(message);
                const {user} = await verifyMessage(message, signature);
                
                if (user) {
                    return user
                } else {
                    alert("authentication error");
                }
            } catch (error) {
                alert("authentication error");
                console.log("authentication error", error)
            }
           
        };
    
    
        return {
            handleAuth,
        };
    };
    
    export default useMetamask;


    