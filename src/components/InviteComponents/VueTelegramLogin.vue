<template>
    <div ref="telegram"></div>
</template>

<script setup lang="ts">
import {PropType, onMounted, ref} from "vue";

declare global {
    var onTelegramAuth: (user: IUserTg) => void;
}

interface IUserTg {
    first_name: string;
    hash: string;
    id: number;
    auth_date: number;
    username: string;
    photo_url: string
}

const telegram = ref();

const props = defineProps({
    mode: {
        type: String as PropType<"callback" | "redirect">,
        required: true,
        validator(value: "callback" | "redirect") {
            return ["callback", "redirect"].includes(value);
        },
    },
    telegramLogin: {
        type: String,
        required: true,
        validator(value: string) {
            return value.endsWith("bot") || value.endsWith("Bot");
        },
    },
    redirectUrl: {
        type: String,
        default: "",
    },
    requestAccess: {
        type: String,
        default: "read",
        validator(value: string) {
            return ["read", "write"].includes(value);
        },
    },
    size: {
        type: String as PropType<"small" | "medium" | "large">,
        default: "large",
        validator(value: string) {
            return ["small", "medium", "large"].includes(value);
        },
    },
    userpic: {
        type: Boolean,
        default: true,
    },
    radius: {
        type: String,
    },
});

const emit = defineEmits(["callback"]);

const onTelegramAuth = (user: IUserTg) => {
    emit("callback", user);
};

onMounted(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://telegram.org/js/telegram-widget.js?3";

    script.setAttribute("data-size", props.size);
    if (!props.userpic) {
        script.setAttribute("data-userpic", "false");
    }
    script.setAttribute("data-telegram-login", props.telegramLogin);
    script.setAttribute("data-request-access", props.requestAccess);
    if (props.radius) {
        script.setAttribute("data-radius", props.radius);
    }

    if (props.mode === "callback") {
        window.onTelegramAuth = onTelegramAuth;
        script.setAttribute("data-onauth", "window.onTelegramAuth(user)");
    } else {
        script.setAttribute("data-auth-url", props.redirectUrl);
    }

    telegram.value.appendChild(script);
});
</script>

<style scoped></style>
