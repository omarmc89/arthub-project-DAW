<template>
    <nav class="flex flex-col items-center justify-between w-full px-4 z-10 mt-2">
        <section class="flex flex-col w-full h-auto">
            <article class="flex text-slate-900 items-center justify-center w-full h-auto py-16">
                <a class="no-underline" href="#">
                    <span class="title text-center text-2xl py-16 ">ArtHUB</span>
                </a>
            </article>

            <article class="w-full flex-grow items-center justify-center" id="nav-content">
                <section class="flex w-full flex-row gap-x-6 items-center justify-around">
                    <NuxtLink class="app-link text-center text-slate-200 p-2 bg-slate-900 rounded-lg hover:bg-slate-200 hover:text-slate-900 " style="float: right" to="/">
                       Back to homepage
                    </NuxtLink>
                </section>
            </article>
        </section>
    </nav>
</template>


<script setup>

import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/stores/auth'; // import the auth store we just created
import { ref } from 'vue';

const router = useRouter();

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
    font-size: 1rem;
    text-transform: uppercase;
}
/* 
.router-link-active {
  @apply border-b-4 border-slate-900;
} */

</style>~/stores/auth