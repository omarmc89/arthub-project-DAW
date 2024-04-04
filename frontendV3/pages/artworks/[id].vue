<template>
    <h1> Artwork dynamic route</h1>
    <p> Artwork id: {{ params }}</p>
</template>

<script setup>
const route = useRoute()

const params = route.params

</script>