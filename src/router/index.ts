import {createRouter, createWebHistory} from "vue-router";

import NimblTvView from "@/views/NimblTvView.vue";
import StakesView from "@/views/StakesView.vue";
import AiView from '@/views/AiView.vue';
import DataView from '@/views/DataView.vue';
import GamificationView from '@/views/GamificationView.vue';
import HandleView from '@/views/HandleView.vue';
import ModerationView from '@/views/ModerationView.vue';
import RoadmapView from '@/views/RoadmapView.vue';
import SummarizeView from '@/views/SummarizeView.vue';
import SwipeView from '@/views/SwipeView.vue';
import TeaserView from '@/views/TeaserView.vue';
import TokenizedView from '@/views/TokenizedView.vue';
import TokenView from '@/views/TokenView.vue';
import TransfersView from '@/views/TransfersView.vue';


const router = createRouter({
    history: createWebHistory(), // Способ сохранения истории переходов по маршрутам
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
            component: StakesView,
        },
        {
            path: "/ai",
            name: "ai",
            component: AiView,
        },
        {
            path: "/data",
            name: "data",
            component: DataView,
        },
        {
            path: "/gamification",
            name: "gamification",
            component: GamificationView,
        },
        {
            path: "/handle",
            name: "handle",
            component: HandleView,
        },
        {
            path: "/moderation",
            name: "moderation",
            component: ModerationView,
        },
        {
            path: "/roadmap",
            name: "roadmap",
            component: RoadmapView,
        },
        {
            path: "/summarize",
            name: "summarize",
            component: SummarizeView,
        },
        {
            path: "/swipe",
            name: "swipe",
            component: SwipeView,
        },
        {
            path: "/teaser",
            name: "teaser",
            component: TeaserView,
        },
        {
            path: "/tokenized",
            name: "tokenized",
            component: TokenizedView,
        },
        {
            path: "/token",
            name: "token",
            component: TokenView,
        },
        {
            path: "/transfers",
            name: "transfers",
            component: TransfersView,
        },
    ],
});

router.afterEach((to, from) => {
    if(!from.name) {
        to.meta.firstPage = true
    } else {
        to.meta.firstPage = false
    }
  })

export default router;
