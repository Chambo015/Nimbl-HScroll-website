import { reactive, onMounted, Ref, toValue, watch} from "vue";
import gsap from "gsap";

export const useAnimationDigits = (number:  Ref<number | undefined | null>) => {
    const tweened = reactive({
        number: 0,
    });

    const animationExecute = () => {
      if(!number) return
      gsap.to(tweened, {duration: 1, delay: 1, number: Number(toValue(number)) || 0});
    }
    onMounted(() => {
      animationExecute()
    });

    watch(number, (n) => {
      gsap.to(tweened, {duration: 1, delay: 1, number: Number(toValue(n)) || 0});
    })

    return  {
      tweened
    }
};
