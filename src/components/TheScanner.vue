<script setup lang="ts">
import radarImg from "@/assets/bg-radar.png";
import radarImgWebp from "@/assets/bg-radar.webp";
import radarIcon from "@/assets/radar-icon.png";
import radarIconWebp from "@/assets/radar-icon.webp";
</script>

<template>
    <div class="h-full flex relative">
        <div class="relative overflow-hidden rounded-tl-[1000px] rounded-tr-[1000px] h-full inline-block mx-auto">
            <picture>
                <source :srcset="radarImgWebp" type="image/webp" />
                <img
                    :src="radarImg"
                    alt="radarImg"
                    class="object-contain mx-auto h-full mix-blend-lighten rounded-tl-[1000px] rounded-tr-[1000px]" />
            </picture>
            <div class="h-full aspect-square">
                <div class="scanner h-full aspect-square"></div>
                <ul class="scanner_points">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <picture>
            <source :srcset="radarIconWebp" type="image/webp" />
            <img
                :src="radarIcon"
                alt="radarIcon"
                class="w-[112px] h-[112px] max-2xl:w-[54px] max-2xl:h-[54px] z-10 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2" />
        </picture>
    </div>
</template>

<style scoped>
div.scanner {
    background-image: linear-gradient(to top right, rgb(99, 42, 227) 0%, transparent 50%);
    transform-origin: top left;
    position: absolute;
    top: 100%;
    left: 50%;
    border-left: 1px solid rgba(rgb(99, 42, 227), 0.1);
    will-change: transform;
    animation: scan 4s linear infinite;
}

@keyframes scan {
    from {
        transform: rotate(80deg);
    }
    to {
        transform: rotate(310deg);
    }
}

.scanner_points {
    list-style: none;
}

.scanner_points li {
    animation: target 4s infinite linear;
    border-radius: 50%;
    box-shadow: 0 0 10px #7351c8;
    opacity: 0;
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    background: #50429e;
}

li:nth-child(1) {
    animation-delay: 1500ms;
    top: 30%;
    left: 30%;
}

li:nth-child(2) {
    animation-delay: 2300ms;
    top: 15%;
    left: 60%;
}

li:nth-child(3) {
    animation-delay: 3250ms;
    top: 75%;
    left: 80%;
}

li:nth-child(4) {
    animation-delay: 1100ms;
    top: 60%;
    left: 20%;
}

li:nth-child(5) {
    animation-delay: 2000ms;
    top: 30%;
    left: 50%;
}

li:nth-child(6) {
    animation-delay: 500ms;
    top: 80%;
    left: 20%;
}

@keyframes target {
    1% {
        opacity: 0.5;
        transform: scale(2.5);
    }
    3% {
        opacity: 1;
        transform: scale(1.5);
    }
    60% {
        opacity: 0;
        transform: scale(0.6);
    }
}
</style>
