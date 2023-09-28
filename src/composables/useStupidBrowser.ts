import {ref} from 'vue'

 const useStupidBrowser = () => {
  const isSafari = ref(false)
  if (navigator.userAgent.includes('Safari')) {
    isSafari.value = true
  }

  return {
    isSafari
  }
}

export default useStupidBrowser