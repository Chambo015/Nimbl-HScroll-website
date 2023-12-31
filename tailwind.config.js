/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "645px",
            md: "770px",
            lg: "1025px",
            xl: "1290px",
            "2xl": "1540px",
            "3xl": "1950px",
        },
        extend: {
            fontFamily: {
                rfdewi: ["RFDewi", "Inter", "-apple-system", "Helvetica Neue", "sans-serif"],
                "tt-octosquares": ["TTOctosquares", "Inter", "-apple-system", "Helvetica Neue", "sans-serif"],
                gilroy: ["Gilroy", "Inter", "-apple-system", "Helvetica Neue", "sans-serif"],
                univers: ["Univers", "Inter", "-apple-system", "Helvetica Neue", "sans-serif"],
                TTOctos: ["TTOctosquares", "Inter", "-apple-system", "Helvetica Neue", "sans-serif"],
                Rollbox: ["Rollbox", "Inter", "-apple-system", "Helvetica Neue", "sans-serif"],
            },
            dropShadow: {
                icon: "0px 0px 2px #ffffff",
            },
            backgroundImage: {
                "btn-bg-liner": "linear-gradient(271deg, #0D0C11 2.43%, #46387A 97.57%)",
                "bg-play-liner": "linear-gradient(230deg, rgba(232, 0, 255, 1) 9.01%, rgba(7, 104, 214, 1) 85.51%)",
                "bg-planet-liner": "radial-gradient(90.3% 106.3% at 91.68% 87.6%, rgba(109, 147, 173, 0.87) 0%, #101417 80.6%, #AB78FE 92.89%, #FFF 100%)",
                "gradient-header-secondary":
                    "radial-gradient(443.81% 434.72% at 322.31% -217.78%, #6F359C 0%, #01060C 100%)",
                    "active-connect": "linear-gradient(180deg, #7BE22A 0%, #2A6000 100%)"
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "20px",
                xl: 0,
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1160px",
            },
        },
    },
    plugins: [
        plugin(function ({addComponents}) {
            addComponents({
                ".bracket::before": {
                    content: "url('@/assets/bracket-start.svg')",
                    position: "absolute",
                    height: "100%",
                    top: "50%",
                    left: "0",
                    transform: "translateY(-32%)",
                    width: "18px",
                },
                ".bracket::after": {
                    content: "url('@/assets/bracket-end.svg')",
                    position: "absolute",
                    height: "100%",
                    top: "50%",
                    right: "0",
                    transform: "translateY(-32%)",
                    width: "18px",
                },
                ".bracket": {
                    padding: "0 25px",
                },
                ".gradient-nav-active": {
                    background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 1) 1.77%, rgba(255, 255, 255, 0.65) 50.77%, rgba(255, 255, 255, 0.1) 100%)",
                    "background-clip": "text",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                },
                ".liner-header-span": {
                    background: "linear-gradient(92deg, #FFF 10.3%, rgba(255, 255, 255, 0.40) 98.23%)",
                    "background-clip": "text",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                },
                ".token-gradient-text": {
                    "background": "linear-gradient(93deg, #C031FA -0.03%, #6529E0 99.97%)",
                    "background-clip": "text",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                },
            });
        }),
    ],
};
