<template>
    <nav class="flex flex-col items-center justify-between w-full px-4 z-10 mt-2">
        <section class="flex flex-col w-full h-auto">
            <article class="flex justify-end w-full" >
                <ul class="flex flex-row gap-x-4 items-center justify-end">
                    <li v-if="!authenticated" class="app-link p-1 py-2 hover:bg-green-300 hover:rounded-lg">
                        <NuxtLink to="/register">Register</NuxtLink>
                    </li>
                    <li v-if="!authenticated" class="app-link p-1 py-2 hover:bg-green-300 hover:rounded-lg">
                        <NuxtLink to="/login">Login</NuxtLink>
                    </li>
                    <li v-if="authenticated" class="app-link p-1 py-2 hover:bg-sky-300 hover:rounded-lg">
                        <NuxtLink to="/profile">Profile</NuxtLink>
                    </li>
                    <li v-if="authenticated" class="app-link p-1 py-2 hover:bg-sky-300 hover:rounded-lg hover:pointer">
                        <NuxtLink @click="userLogout">Logout</NuxtLink>
                    </li>
                </ul>
            </article>
            <article class="flex text-slate-900 items-center justify-center w-full h-auto py-16">
                <a class="no-underline" href="#">
                    <span class="title items-center text-center text-2xl">ArtHUB</span>
                </a>
            </article>

            <article class="w-full flex-grow items-center justify-center" id="nav-content">
                <section class="nav-links flex w-full flex-row gap-x-6 items-center justify-around">
                    <NuxtLink id="app-link-1" class="app-link text-center w-full p-1" to="/">
                        Home
                    </NuxtLink>
                    <NuxtLink class="app-link text-center w-full p-1" to="/artworks">
                        Artworks
                    </NuxtLink>
                    <NuxtLink class="app-link text-center w-full p-1" to="/artists">
                        Artists
                    </NuxtLink>
                    <NuxtLink v-if="userLogged" class="app-link text-center w-full p-1" to="/dashboard">
                        Dashboard
                    </NuxtLink>
                </section>
            </article>
        </section>
    </nav>
</template>


<script setup>

import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
import { ref } from 'vue';

const router = useRouter();


const { logout } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
const { userLogged } = storeToRefs(useAuthStore()); // make userLogged state reactive with storeToRefs
const route = useRoute();
const path = ref(route.path);

const isNavOpen = ref(false);

const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value;
};
const userLogout = () => {
  logout();
  router.push('/login');
};

</script>

<style scoped>
@font-face {
    font-family: 'Afacad';
    src: url('~/assets/fonts/Afacad.ttf') format('truetype-variations');
}

.title{
    font-family: 'Afacad';
    font-weight: 900;
    font-size: 5.5rem;
    letter-spacing: 1rem;
    text-transform: uppercase;
}

.app-link {
    font-family: 'system-ui';
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #000;
}

.nav-links .app-link:first-child:hover{
  /* Estilos para el primer app-link */
  background-color: #a78bfa !important;
  border-radius: 10px;
}
.nav-links .app-link:nth-child(2):hover{
  /* Estilos para el primer app-link */
  background-color: #f472b6 !important;
  border-radius: 10px;

}
.nav-links .app-link:nth-child(3):hover{
  /* Estilos para el primer app-link */
  background-color: #2dd4bf !important;
  border-radius: 10px;

}
.nav-links .app-link:nth-child(4):hover{
  /* Estilos para el primer app-link */
  background-color: #facc15 !important;
  border-radius: 10px;

}

.router-link-active {
  @apply border-b-4 border-slate-900;
  @apply pointer-events-none;
}

</style>