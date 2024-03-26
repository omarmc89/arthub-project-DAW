<template>
    <nav class="flex flex-col items-center justify-between w-full px-4 z-10">
        <section class="flex flex-col w-full h-auto">
            <article class="flex justify-end w-full" >
                <ul class="flex flex-row gap-x-4 items-center justify-end">
                    <li v-if="!authenticated" class="app-link registerBtn hover:underline" style="float: right">
                        <NuxtLink to="/register">Register</NuxtLink>
                    </li>
                    <li v-if="!authenticated" class="app-link loginBtn hover:underline" style="float: right">
                        <NuxtLink to="/login">Login</NuxtLink>
                    </li>
                    <li v-if="authenticated" class="app-link loginBtn hover:underline" style="float: right">
                        <nuxt-link @click="logout">Logout</nuxt-link>
                    </li>
                </ul>
            </article>
            <article class="flex items-center justify-center w-full h-auto py-8">
                <a class="no-underline" href="#">
                    <span class="title text-center text-2xl pl-2 ">ArtHUB</span>
                </a>
            </article>

            <article class="w-full flex-grow items-center justify-center" id="nav-content">
                <ul class="flex flex-row gap-x-6 items-center justify-center">
                    <li class="app-link homeBtn p-2" style="float: right">
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                </ul>
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
    font-size: 4.5rem;
    letter-spacing: 1rem;
    text-transform: uppercase;
}

.router-link-active {
  @apply border-b-4 bg-slate-400 p-2 rounded-lg pointer-events-none;
}

</style>