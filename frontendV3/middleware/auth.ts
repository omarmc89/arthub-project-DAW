import { useAuthStore } from '~/store/auth';


export default defineNuxtRouteMiddleware((to, _from) => {
  const { userLogged } = storeToRefs(useAuthStore())
  
  let token = null
  if (process.client) {
    token = localStorage.getItem('token')
  }
  if (!userLogged.value && !token) {
    return navigateTo('/login')
  }
})