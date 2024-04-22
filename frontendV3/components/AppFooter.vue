
<template>
  <section class="flex flex-row items-center justify-around mt-12 h-32 bg-zinc-900 bg-opacity-40 text-zinc-900">
    <article class="first-element flex flex-col items-center justify-center">
      2024
    </article>
    <article class="second-element flex flex-col items-center justify-center">
        <p>
          <span class="rounded-l-xl drop-shadow-lg text-slate-900">Omar </span>
          <span class="rounded-r-xl drop-shadow-lg text-slate-900">Martin</span>
        </p>
        <span>DAW final project</span>
    </article>
    <article class="third-element flex flex-col items-center justify-center">
      <a href="https://github.com/omarmc89/arthub-project-DAW" target="_blank" class="i-carbon-logo-github w-12 h-12"></a>
    </article>
  </section>  
</template>

<script setup>
</script>

<style scoped>

@font-face {
    font-family: 'Garute';
    src: url('~/assets/fonts/Garute.ttf') format('truetype-variations');
}

section {
  font-size: 1.2rem;
  font-family: 'Garute';
  text-align: center;
  width: 100%;
  box-shadow: 0 -4px 10px -2px rgba(0, 0, 0, 0.2);
}


.first-element{
}

.second-element{
  p {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  p span{
    font-weight: 500;
  }
}

.third-element{
  font-size: 3rem;
  width: 4rem !important;
  height: 4rem !important;
}

span .i-carbon-logo-github {
  width: 4rem !important;
  height: 4rem !important;
}

</style>
