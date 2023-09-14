import { useSwipe } from '@vueuse/core';
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';


export default function useMouseWheel({toDownRoute, toUpRoute}: {toDownRoute?: string, toUpRoute?: string}) {
  const { isSwiping, direction,  lengthY } = useSwipe(window)
  const router = useRouter()

  watchEffect(() => {
    if(isSwiping.value) {
  
      
    
    }
  })
  const onWheel = (el: any) => {
    if(el.deltaY > 0 && toDownRoute) {
        router.push({name: toDownRoute})
    } else if(el.deltaY < 0 && toUpRoute) {
        router.push({name: toUpRoute})
    }
  }
  return { onWheel }
}