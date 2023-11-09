import {createRouter, /* createWebHashHistory */ createWebHistory} from "vue-router";

import NimblTvView from "@/views/NimblTvView.vue";

const routerPaths = [
    "nimbltv",
    "stakes",
    "tokenized",
    "data",
    "moderation",
    "swipe",
    "teaser",
    /* 'transfers', */ 
    "gamification",
    /* 'summarize', */ 
    "ai",
    "tokenomics",
    /* 'handle', */ 
    "token",
    "roadmap",
];

const router = createRouter({
    history: createWebHistory() /* createWebHistory(), */, // Способ сохранения истории переходов по маршрутам
    routes: [
        // Определяем маршруты
        {
            path: "/", // путь маршрута
            name: "nimbltv", // имя маршрута
            component: NimblTvView, // Каждый маршрут должен сопоставляться с компонентом.
        },
        {
            path: "/stakes",
            name: "stakes",
            component: () => import("@/views/StakesView.vue"),
        },
        {
            path: "/ai",
            name: "ai",
            component: () => import("@/views/AiView.vue"),
        },
        {
            path: "/data",
            name: "data",
            component: () => import("@/views/DataView.vue"),
        },
        {
            path: "/gamification",
            name: "gamification",
            component: () => import("@/views/GamificationView.vue"),
        },
        /* {
            path: "/handle",
            name: "handle",
            component: HandleView,
        }, */
        {
            path: "/moderation",
            name: "moderation",
            component: () => import("@/views/ModerationView.vue"),
        },
        {
            path: "/roadmap",
            name: "roadmap",
            component: () => import("@/views/RoadmapView.vue"),
        },
        /* {
            path: "/summarize",
            name: "summarize",
            component: SummarizeView,
        }, */
        {
            path: "/swipe",
            name: "swipe",
            component: () => import("@/views/SwipeView.vue"),
        },
        {
            path: "/teaser",
            name: "teaser",
            component: () => import("@/views/TeaserView.vue"),
        },
        {
            path: "/tokenized",
            name: "tokenized",
            component: () => import("@/views/TokenizedView.vue"),
        },
        {
            path: "/token",
            name: "token",
            component: () => import("@/views/TokenView.vue"),
        },
        /* {
            path: "/transfers",
            name: "transfers",
            component: TransfersView,
        }, */
        {
            path: "/tokenomics",
            name: "tokenomics",
            component: () => import("@/views/TokenomicsView.vue")
        },
    /*     {
            path: "/invite/:twitterId?",
            name: "invite",
            component: () => import("@/views/InviteView.vue"),
        } */
        {
            path: "/invite",
            name: "invite",
            component: () => import("@/views/InviteSoonView.vue"),
        }
    ],
});

router.afterEach((to, from) => {
    if (from.name) {
        to.meta.previousPage = from.name;
    }
    const fromIdx = routerPaths.indexOf(from.name as string);
    const toIdx = routerPaths.indexOf(to.name as string);
    if (fromIdx < toIdx) {
        to.meta.transition = "slide-up";
    } else {
        to.meta.transition = "slide-down";
    }
});

export default router;
