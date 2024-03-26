<template>
    <section class="flex flex-col items-center justify-center">
      <label for="userType">User Type:</label>
      <select v-model="selectedUserType" @change="toggleFields">
        <option value="artist">Artist</option>
        <option value="client">Client</option>
      </select>
      <div class="flex flex-col items-center justify-center">
        <input v-model="username" type="text" placeholder="Username" required>
        <input v-model="first" type="text" placeholder="First Name" required>
        <input v-model="last_name" type="text" placeholder="Last Name" required>
        <input v-model="email" type="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <input v-model="avatar" type="text" placeholder="Avatar url">
      </div>
      <!-- Campos adicionales para el artista -->
      <div v-if="selectedUserType === 'artist'">
        <label for="nickname">Nickname:</label>
        <input v-model="nickname" type="text" id="nickname" name="nickname">
      </div>
      
      <button @click.prevent="register">Register</button>
  
  
      <!-- Campos adicionales para el cliente -->
      <div v-if="selectedUserType === 'client'">
        <label for="clientField1">Client Field 1:</label>
        <input type="text" id="clientField1" name="clientField1">
      </div>
    </section>
  </template>
  
  <script setup>
import { ref } from 'vue';

const username = ref('');
const first_name = ref('');
const last_name = ref('');
const email = ref('');
const password = ref('');
const avatar = ref('');
const nickname = ref('');
const selectedUserType = ref('artist');

const toggleFields = () => {
  // Implementa la lógica para mostrar u ocultar campos según el valor seleccionado
};

const register = async() => {
  const { data, pending } = await useFetch('http://localhost:8000/api/v1/artists/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token f3b557760eda960a094698122c6eb9489c2487f3'
    },
    body: JSON.stringify({
      username,
      email,
      first_name,
      last_name,
      password,
      avatar,
      nickname,
    })
  })
}
</script>
  
  <style scoped>
  /* Estilos de Tailwind CSS */
  </style>