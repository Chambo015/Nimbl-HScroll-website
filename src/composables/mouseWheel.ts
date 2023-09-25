import { useSwipe } from '@vueuse/core';
import { watchEffect, Ref } from 'vue';
import { useRouter } from 'vue-router';


export default function useMouseWheel({toDownRoute, toUpRoute, target}: {toDownRoute?: string, toUpRoute?: string, target?: Ref<HTMLElement>}) {
  const { isSwiping, direction } = useSwipe(target)
  const router = useRouter()

  watchEffect(() => {
    if(isSwiping.value) {
      if(direction.value === 'up') {
        router.push({name: toDownRoute})
      } else if (direction.value === 'down') {
        router.push({name: toUpRoute})
      }
    }
  })
  const onWheel = (el: any) => {
    if(el.deltaY > 10 && toDownRoute ) {
        router.push({name: toDownRoute})
    } else if(el.deltaY < -10 && toUpRoute ) {
        router.push({name: toUpRoute})
    }
  }
  return { onWheel }
}