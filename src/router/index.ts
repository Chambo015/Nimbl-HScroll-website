import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";

import NimblTvView from "@/views/NimblTvView.vue";
// import StakesView from "@/views/StakesView.vue";
// import AiView from "@/views/AiView.vue";
// import DataView from "@/views/DataView.vue";
// import GamificationView from "@/views/GamificationView.vue";
/* import HandleView from "@/views/HandleView.vue"; */
// import ModerationView from "@/views/ModerationView.vue";
// import RoadmapView from "@/views/RoadmapView.vue";
/* import SummarizeView from "@/views/SummarizeView.vue"; */
// import SwipeView from "@/views/SwipeView.vue";
// import TeaserView from "@/views/TeaserView.vue";
// import TokenizedView from "@/views/TokenizedView.vue";
// import TokenView from "@/views/TokenView.vue";
/* import TransfersView from "@/views/TransfersView.vue"; */

const routerArr = ['nimbltv', 'stakes', 'tokenized', 'data', 'moderation', 'swipe', 'teaser', 
/* 'transfers', */ 'gamification', /* 'summarize', */ 'ai', /* 'handle', */ 'token', 'roadmap']

const router = createRouter({
    history: createWebHistory() /* createWebHistory(), */, // Способ сохранения истории переходов по маршрутам
    routes: [
        // Определяем маршруты
        /*   {
            path: "/", // путь маршрута
            name: "preview", // имя маршрута
            component: PreviewView, // Каждый маршрут должен сопоставляться с компонентом.
        }, */
        {
            path: "/", // путь маршрута
            name: "nimbltv", // имя маршрута
            component: NimblTvView, // Каждый маршрут должен сопоставляться с компонентом.
        },
        {
            path: "/stakes",
            name: "stakes",
            component: () => import('@/views/StakesView.vue'),
        },
        {
            path: "/ai",
            name: "ai",
            component: () => import('@/views/AiView.vue'),
        },
        {
            path: "/data",
            name: "data",
            component: () => import('@/views/DataView.vue'),
        },
        {
            path: "/gamification",
            name: "gamification",
            component: () => import('@/views/GamificationView.vue'),
        },
        /* {
            path: "/handle",
            name: "handle",
            component: HandleView,
        }, */
        {
            path: "/moderation",
            name: "moderation",
            component: () => import('@/views/ModerationView.vue'),
        },
        {
            path: "/roadmap",
            name: "roadmap",
            component: () => import('@/views/RoadmapView.vue'),
        },
        /* {
            path: "/summarize",
            name: "summarize",
            component: SummarizeView,
        }, */
        {
            path: "/swipe",
            name: "swipe",
            component: () => import('@/views/SwipeView.vue'),
        },
        {
            path: "/teaser",
            name: "teaser",
            component: () => import('@/views/TeaserView.vue'),
        },
        {
            path: "/tokenized",
            name: "tokenized",
            component: () => import('@/views/TokenizedView.vue'),
        },
        {
            path: "/token",
            name: "token",
            component: () => import('@/views/TokenView.vue'),
        },
        /* {
            path: "/transfers",
            name: "transfers",
            component: TransfersView,
        }, */
    ],
});

router.afterEach((to, from) => {
    if (from.name) {
        to.meta.previousPage = from.name;
    }
    const fromIdx = routerArr.indexOf(from.name as string)
    const toIdx =  routerArr.indexOf(to.name as string)
    if(fromIdx < toIdx) {
        to.meta.transition = 'slide-up'
    } else {
        to.meta.transition = 'slide-down'

    }
});

export default router;
