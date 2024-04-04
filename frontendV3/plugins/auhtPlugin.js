// import { useAuthStore } from '~/store/auth';

// export default defineNuxtPlugin(() => {
//     const router = useRouter()
//     const { userLogged } = storeToRefs(useAuthStore())
//     addRouteMiddleware('auth', () => {
//     let token = null
//     if (process.client) {
//         token = localStorage.getItem('token');
//     }
//     // Verifica si el usuario está registrado
//     if (!userLogged.value && !token) {
//       // Si el usuario no está registrado y la ruta requiere autenticación, redirige a la página de inicio de sesión
//       return navigateTo('/login')
//     }
//       console.log('this global middleware was added in a plugin and will be run on every route change')
//     }, { global: true })
// })