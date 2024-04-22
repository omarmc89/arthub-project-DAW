<template>
    <section class="main-banner flex flex-col items-center justify-center">
        <h1 class="title flex flex-col items-center m-0 p-0">
            <span>
                Welcome to your
                <span class="letter-a text-purple-600 drop-shadow-lg uppercase">a</span>
                <span class="letter-r text-pink-400 drop-shadow-lg uppercase">r</span>
                <span class="letter-t text-teal-400 drop-shadow-lg uppercase">t</span>
                community
            </span>
            <span>Discover <span class="bg-yellow-400 rounded-xl p-2 drop-shadow-lg">brilliant</span> artists and their works</span>
        </h1>
    </section>
    <section class="sample-artworks flex flex-col items-center justify-center mt-12">
        <p class="description animate-bounce mb-8 text-center">Check out some of our collection!</p>
        <ArtworkCarousel/>
    </section>
</template>

<style scoped>

@font-face {
    font-family: 'SourGummy';
    src: url('~/assets/fonts/SourGummy.ttf') format('truetype-variations');
}
@font-face {
    font-family: 'Unique';
    src: url('~/assets/fonts/Unique.ttf') format('truetype-variations');
}
@font-face {
    font-family: 'Humane';
    src: url('~/assets/fonts/Humane.ttf') format('truetype-variations');
}
@font-face {
    font-family: 'Garute';
    src: url('~/assets/fonts/Garute.ttf') format('truetype-variations');
}

.main-banner {
    font-family: 'Garute';
    font-size: 4rem;
    padding:0;
    margin:0;
    font-weight: 800;
    text-align: center;
}

.description {
    font-family: 'SourGummy';
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 0.4rem;
    font-weight: 600;
}

.sample-artworks {
    font-size: 2rem;
}


</style>