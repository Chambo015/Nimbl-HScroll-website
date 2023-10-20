/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moralis Auth Django Demo</title>
</head>
<body>
    <div>

    {% if user.is_authenticated %}
        <h1>Welcome Moralis Web3 User, {{ user.username }} !</h1>
        Logout
        <br/>
        My profile
    {% else %}
        <h1>Moralis Web3 Login Django demo</h1>
        <button class="btn" id="auth-metamask">Login with Moralis Web3 API</button>
    {% endif %}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>

    {% if user.is_authenticated %}
    {% else %}
    <script>
    const elBtnMetamask = document.getElementById('auth-metamask');

     */

/*     

 


    function init() {
      elBtnMetamask.addEventListener('click', async () => {
        handleAuth().catch((error) => console.log(error));
      });
    }

    window.addEventListener('load', () => {
      init();
    }); */

    import {ethers} from "ethers";
    import axios from "axios";
    
    const useMetamask = () => {
        const handleApiPost = async (endpoint, params) => {
            const result = await axios.post(endpoint, params, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            return result.data;
        };
    
        const requestMessage = (account, chain) => handleApiPost("https://api.nimbl.tv/en/api/request_message/", {
                address: account,
                chain: chain,
                network: "evm",
            });
    
        const verifyMessage = (message, signature) => handleApiPost("https://api.nimbl.tv/en/api/verify_message/", {
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
            // Connect to Metamask
            const {signer, chain, account} = await connectToMetamask();
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
            console.log(user);
            if (user) {
               /*  location.reload(); */
               console.dir(typeof user);
            } else {
                alert("authentication error");
            }
        };
    
        function init() {
            handleAuth().catch((error) => console.log(error));
        }
    
        return {
            init,
        };
    };
    
    export default useMetamask;