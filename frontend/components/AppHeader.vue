<template>
    <nav class="flex flex-col items-center justify-between w-full px-4 z-10 mt-2">
        <section class="flex flex-col w-full h-auto">
            <article class="flex justify-end w-full" >
                <ul class="flex flex-row gap-x-4 items-center justify-end">
                    <li v-if="!authenticated" class="app-link-top  p-1 hover:bg-green-300 hover:rounded-lg">
                        <NuxtLink to="/register">Register</NuxtLink>
                    </li>
                    <li v-if="!authenticated" class="app-link-top p-1 hover:bg-green-300 hover:rounded-lg">
                        <NuxtLink to="/login">Login</NuxtLink>
                    </li>
                    <li v-if="authenticated" class="app-link-top p-1 hover:bg-sky-300 hover:rounded-lg">
                        <NuxtLink to="/profile">Profile</NuxtLink>
                    </li>
                    <li v-if="authenticated" class="app-link-top p-1 hover:bg-sky-300 hover:rounded-lg hover:cursor-pointer">
                        <NuxtLink type="button" @click="userLogout">Logout</NuxtLink>
                    </li>
                </ul>
            </article>
            <article class="flex text-slate-900 items-center justify-center w-full h-auto py-8">
                <a class="no-underline" href="#">
                    <p class="title flex flex-row gap-0 items-center text-center text-2xl py-2">
                        <span class="letter hover:-translate-y-2 hover:scale-125 hover:text-purple-400 hover:lowercase">A</span>
                        <span class="letter hover:-translate-y-2 hover:scale-125 hover:text-pink-400 hover:lowercase">r</span>
                        <span class="letter hover:-translate-y-2 hover:scale-125 hover:text-green-400 hover:lowercase">t</span>
                        <span class="letter hover:-translate-y-2 hover:scale-125 hover:text-shark-400 hover:lowercase">H</span>
                        <span class="letter hover:-translate-y-2 hover:scale-125 hover:text-cyan-400 hover:lowercase">U</span>
                        <span class="letter hover:-translate-y-2 hover:scale-125 hover:text-orange-400 hover:lowercase">B</span>
                    </p>
                </a>
            </article>

            <article class="w-full flex-grow items-center justify-center" id="nav-content">
                <section class="nav-links flex w-full flex-row gap-x-6 items-center justify-around">
                    <NuxtLink id="app-link" class="app-link text-center w-full p-1" to="/">
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

.app-link,
.app-link-top {
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease-in-out 0.5s;
}

.app-link-top{
    transition: all ease-in-out 0.2s;
}

.app-link:hover{
    font-family: 'Afacad';
    letter-spacing: 1rem;
    font-weight: 500;
    font-stretch: expanded;
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