import { useRouter } from 'vue-router'
import { onBeforeMount } from 'vue'

export function useMiddleware(isSignedIn: boolean | undefined){
  const router = useRouter()

  onBeforeMount(() => {
    if (!isSignedIn){
      router.forward()
    }
  })
}
