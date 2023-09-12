import { useRouter } from 'vue-router';

export default function useMouseWheel({toDownRoute, toUpRoute}: {toDownRoute?: string, toUpRoute?: string}) {
  const router = useRouter()

  const onWheel = (el: any) => {
    if(el.deltaY > 0 && toDownRoute) {
        router.push({name: toDownRoute})
    } else if(el.deltaY < 0 && toUpRoute) {
        router.push({name: toUpRoute})
    }
  }
  return { onWheel }
}