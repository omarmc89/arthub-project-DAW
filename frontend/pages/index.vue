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

@media (width <= 650px) {
  .main-banner{
    font-size: 2rem;
  }

    .description{
        font-size: 1.5rem;
    }

}

.letter-a {
  animation: charA 2s infinite linear;
}

.letter-r {
  animation: charR 2s infinite linear;
}
.letter-t {
  animation: charT 2s infinite linear;
}


@keyframes charA {
  0%, 100% {
    transform: translateY(-2px) scale(1.25);
    color: #a855f7;
  }
  50% {
    transform: translateY(0) scale(1);
    color: #e9d5ff;
  }
}

@keyframes charR {
  0%, 100% {
    transform: translateY(-2px) scale(1.25);
    color: #f472b6;
  }
  50% {
    transform: translateY(0) scale(1);
    color: #fbcfe8;
  }
}

@keyframes charT {
  0%, 100% {
    transform: translateY(-2px) scale(1.25);
    color: #38bdf8;
  }
  50% {
    transform: translateY(0) scale(1);
    color: #bae6fd;
  }
}


</style>