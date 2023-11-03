import { reactive, onMounted,  toValue, watchEffect} from "vue";
import gsap from "gsap";

export const useAnimationDigits = (number:  () => number | undefined | null) => {
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

    watchEffect(() => {
      animationExecute()
    })

    return  {
      tweened
    }
};
