<script setup lang="ts">
import { computed, onMounted, ref, watch, type PropType, nextTick } from 'vue';
import { useMediaControls,  useToggle  } from '@vueuse/core';
import Controls from './VideoPlayerControls';
import {
    IconPlay,
    IconPause,
    IconVolume,
    IconSubtitles,
    IconVoice
} from '@/components/icons';
import type { AudioTrackType, SoundVolumeType } from '@/types';
import useCustomFullscreen from '@/composables/useCustomFullscreen';
import type { UseMediaTextTrackSource } from '@vueuse/core';
import poster from "@/assets/ai-launguages.webp";

const props = defineProps({
    lite: Boolean,
    videoSrc: {
        type: String,
        default: 'https://d2n3zca7e0phmo.cloudfront.net/nimble_videos/index.mp4'
    },
    subtitles: {
        type: Array as PropType<UseMediaTextTrackSource[]>,
        default: undefined
    },
    voiceTracks: {
        type: Array as PropType<AudioTrackType[]>,
        default: undefined
    }
})

const videoEl = ref<HTMLVideoElement>();
const videoWrap = ref<HTMLDivElement | null>(null);
const imgBase64 = {
    selected: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHdpZHRoPScxLjJlbScgaGVpZ2h0PScxLjJlbScgZmlsbD0nIzhDOThGRicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyA+PHBhdGggZmlsbD0nIzhDOThGRicgZD0nbTEzIDI0bC05LTlsMS40MTQtMS40MTRMMTMgMjEuMTcxTDI2LjU4NiA3LjU4NkwyOCA5TDEzIDI0eicvPjwvc3ZnPg=='
}

/* Video ******************************************************************************************* */
const audioEl = ref<HTMLAudioElement>();

const enableVoice = ref<number | null >(null)
const currentVoiceSrc = computed(() => {
    if(props.voiceTracks && typeof enableVoice.value === 'number') {
      return  props.voiceTracks[enableVoice.value].src
    } else {
        return ''
    }
})

/**
 * Выбираем субтитры под озвучку
 */
const currentSubtitlesId = computed(() => {
    if(props.voiceTracks  && typeof enableVoice.value === 'number' && props.subtitles ) {
        const lang = props.voiceTracks[enableVoice.value].language
        return props.subtitles.findIndex(s => s.srcLang === lang)
    } else {
        return false
    }
})

const {playing: playVoice, currentTime: currentTimeVoice, volume: volumeVoice} = useMediaControls(audioEl, {
    src: {
        src: currentVoiceSrc.value,
        type: 'audio/mpeg',
    },
});

/* Наблюдатель переключения аудио */
watch(currentVoiceSrc, async () => {
    if(audioEl.value) {
        audioEl.value.setAttribute('src', currentVoiceSrc.value)
        await nextTick()
        await audioEl.value.play()
        playVoice.value = playing.value
        handleChangeTime()

        currentSubtitlesId.value && enableTrack(currentSubtitlesId.value); // если есть субтитры под аудио - вкл
    } 
})

/**
 * Функция сопоставляет время видео и аудио
 */
function handleChangeTime() {
    currentTimeVoice.value = currentTime.value
}
onMounted(() => {
     // Аудио наблюдает за Видео
     watch([playing, waiting], () => {
        playVoice.value = !waiting.value && playing.value // включаем одновременно
        handleChangeTime()
    })
    handleChangeTime()
})

/* **************************************************************************************** */

/* Full Screen */
const { isFullscreen } = useCustomFullscreen(videoWrap);

const {
    playing,
    buffered,
    currentTime,
    duration,
    waiting,
    volume,
    muted,
    disableTrack,
    selectedTrack,
    tracks,
    enableTrack
} = useMediaControls(videoEl, {
    src: {
        src: props.videoSrc ,
        type: 'video/mp4',
    },
    tracks: props.subtitles,
});

/* Computed for duration Video */
const endBuffer = computed(() => (buffered.value.length > 0 ? buffered.value[buffered.value.length - 1][1] : 0));
const formatDuration = (seconds: number) => new Date(1000 * seconds).toISOString().slice(14, 19);

/* Visible Controls and Menu */
const [visibleChatGPT] = useToggle()
const visibleOfMousemove = ref(true);
const mousemoveHandler = () => {
  if (!visibleOfMousemove.value) {
    visibleOfMousemove.value = true;
    setTimeout(() => {
      visibleOfMousemove.value = true;
    }, 4000);
  }
  return;
};

const visibleControls = computed(() => {
  return visibleOfMousemove.value || visibleChatGPT.value
});

/* Звук видео */
const scrubberVolume = ref(0.5)
watch([scrubberVolume, currentVoiceSrc], () => {
    if(currentVoiceSrc.value) {
        volumeVoice.value = scrubberVolume.value
        if(scrubberVolume.value === 0) {
            volume.value = 0
        } else if(scrubberVolume.value <= 0.6) {
            volume.value = 0.1
        } else {
            volume.value = scrubberVolume.value - 0.6
        }
    } else {
        volume.value = scrubberVolume.value
    }
})

/* Переключение выкл и вкл звука */
watch(muted, () => {
    if (muted.value) {
        scrubberVolume.value = 0;
    } else if (scrubberVolume.value === 0) {
        scrubberVolume.value = 0.5;
    }
});

/* Computed Volume Icon */
const soundVolume = computed<SoundVolumeType>(() => {
    if (volume.value === 0 || muted.value) {
        return 'off';
    } else if (volume.value > 0.5) {
        return 'high';
    } else if (volume.value < 0.2) {
        return 'low';
    } else {
        return 'medium';
    }
});

/* Change initial volume audio */
onMounted(() => {
    muted.value = true;
});
</script>

<template>
      <div class="flex justify-center duration-200" ref="videoWrap">
          <div
              class="group/video outline-none flex-grow  duration-200"
              :tabindex="0"
              autofocus
              @keydown.prevent.stop.space="playing = !playing"
              @keydown.right="currentTime += 10"
              @keydown.left="currentTime -= 10"
              @mousemove="mousemoveHandler">
              <div class="relative h-full w-full overflow-hidden shadow">
                  <!-- crossorigin="anonymous" -->
                  <video :autoplay="!lite" ref="videoEl" class="block w-full h-full bg-transparent object-cover" @click="playing = !playing" :poster="poster" />
                  <audio ref="audioEl"></audio>
                  <div
                      v-if="waiting"
                      class="pointer-events-none absolute inset-0 grid place-items-center bg-black bg-opacity-20">
                      <Controls.Spinner />
                  </div>

                  <!-- Controls -->
                  <div
                      :class="[
                          'absolute inset-x-0 bottom-0 z-50 flex h-1/2 flex-col justify-end !bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.2)_63%,rgba(0,0,0,0)_100%)]',
                          !playing || visibleControls ? 'visible' : 'invisible',
                      ]">
                      <!-- заполнитель пространства  -->
                      <div class="flex-grow" @click="playing = !playing"></div>
                      <!--  -->
      
                      <!-- Линия перемотки -->
                      <Controls.Scrubber v-model="currentTime" :max="duration" :secondary="endBuffer" class="flex-shrink-0" @click="handleChangeTime">
                          <template #default="{ position, pendingValue }">
                              <div
                                  class="absolute bottom-0 mb-4 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-xs text-white"
                                  :style="{ left: position }">
                                  {{ formatDuration(pendingValue) }}
                              </div>
                          </template>
                      </Controls.Scrubber>
                      <!-- --- -->
      
                      <!-- Строка Контролеров -->
                      <div :class="['flex flex-row  items-center mt-1', isFullscreen ? 'py-3 px-4' : 'h-10 py-1 px-2 max-sm:h-8']">
                          <!-- toggle Play -->
                          <button @click=" playing = !playing ">
                              <IconPlay v-if="!playing" class="inline-block h-8 w-8 align-middle max-sm:w-5 max-sm:h-5" />
                              <IconPause v-else class="inline-block h-8 w-8 align-middle max-sm:w-5 max-sm:h-5" />
                          </button>
                          <!--  -->
      
                          <!-- toggle Muted -->
                          <button @click="muted = !muted" title="Volume" class="ml-4">
                              <IconVolume class="inline-block h-8 w-8 align-middle max-sm:w-5 max-sm:h-5" :volume="soundVolume" />
                          </button>
                          <!--  -->
      
                          <!-- Линия звука -->
                          <Controls.Scrubber v-model="scrubberVolume" :max="1" class="ml-2 w-24 max-sm:w-10" />
                          <!-- --- -->

                          <!--Время видео  -->
                          <div class="ml-2 flex flex-1 flex-col text-sm max-sm:text-xs">
                              {{ formatDuration(currentTime) }} / {{ formatDuration(duration) }}
                          </div>
                          <!-- ---  -->

                        <Controls.Menu v-if="subtitles" class="ml-4">
                            <template #default="{ open }">
                                <button @click="open">
                                    <IconSubtitles  class="inline-block h-8 w-8 align-middle max-sm:w-5 max-sm:h-5" />
                                </button>
                            </template>
                        <template #menu="{ close }">
                        <div class="absolute bottom-0 right-0 bg-black rounded py-2 shadow">
                        <Controls.MenuItem
                            @keydown.stop.prevent.enter.space="disableTrack()"
                            @click="() => { disableTrack(); close() }"
                        >
                            <span class="flex-1">Off</span>
                        <img :src="imgBase64.selected" alt="" :class="{ 'opacity-0': selectedTrack !== -1 , 'w-5 h-5 mx-4': true}">
                        </Controls.MenuItem>
                        <Controls.MenuItem
                        v-for="track in tracks"
                        :key="track.id"
                        @keydown.stop.prevent.enter.space="enableTrack(track)"
                        @click="() => { enableTrack(track); close() }"
                        >
                        <span class="flex-1 max-sm:text-xs">{{ track.label }}</span>
                        <img :src="imgBase64.selected" alt="" :class="{'opacity-0': track.mode !== 'showing' , 'w-5 h-5 mx-4': true}">
                        </Controls.MenuItem>
                        </div>
                        </template>
                        </Controls.Menu>

                        <!-- Voice -->
                        <Controls.Menu v-if="voiceTracks" class="ml-4">
                            <template #default="{ open }">
                                <button @click="open">
                                    <IconVoice  class="inline-block h-8 w-8 align-middle max-sm:w-5 max-sm:h-5" />
                                </button>
                            </template>
                        <template #menu="{ close }">
                        <div class="absolute bottom-0 right-0 bg-black rounded py-2 shadow max-sm:py-1">
                            <Controls.MenuItem
                            @click="() => {enableVoice = null ; close() }"
                        >
                            <span class="flex-1">Off</span>
                        <img :src="imgBase64.selected" alt="" :class="{ 'opacity-0': currentVoiceSrc  , 'w-5 h-5 mx-4': true}">
                        </Controls.MenuItem>
                        <Controls.MenuItem
                        v-for="(v, idx) of voiceTracks"
                        :key="v.language"
                        @click="() => { enableVoice = idx; close() }"
                        >
                        <img :src="v.flag" alt="" width="28" height="21" class="flex-shrink-0  max-sm:w-5 max-sm:h-5">
                        <span class="flex-shrink-0 max-sm:text-xs">{{ v.label }}</span>
                        <img :src="imgBase64.selected" alt="" :class="{'opacity-0': idx !== enableVoice , ' flex-shrink-0 w-5 h-5 mx-10': true}">
                        </Controls.MenuItem>
                        </div>
                        </template>
                        </Controls.Menu>
                      </div>
                  </div>
              </div>
          </div>
      </div>
</template>


<style scoped>
video::-webkit-media-text-track-container {
 overflow: visible !important;
 transform: translateY(-50px) !important;
}
</style>
