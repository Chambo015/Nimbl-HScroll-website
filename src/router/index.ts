import {createRouter, createWebHistory} from "vue-router";

import NimblTvView from "@/views/NimblTvView.vue";
import StakesView from "@/views/StakesView.vue";
import PreviewView from "@/views/PreviewView.vue";

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
    ],
});

export default router;
