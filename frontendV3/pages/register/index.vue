<template>
    <section class="flex flex-col items-center justify-center">
      <label for="userType">User Type:</label>
      <select v-model="selectedUserType" @change="toggleFields">
        <option value="artist">Artist</option>
        <option value="client">Client</option>
      </select>
      <div class="flex flex-col items-center justify-center">
        <input v-model="username" type="text" placeholder="Username" required>
        <input v-model="first_name" type="text" placeholder="First Name" required>
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
  
      <div v-if="errorOnFetch" class="text-xl text-red uppercase">{{ errorOnFetch.data.error }}</div>
      <!-- Campos adicionales para el cliente -->
      <div v-if="selectedUserType === 'client'">
        <label for="clientField1">Client Field 1:</label>
        <input type="text" id="clientField1" name="clientField1">
      </div>
    </section>
  </template>
  
  <script setup>
import { ref } from 'vue';

let username = ref('');
let first_name = ref('');
let last_name = ref('');
let email = ref('');
let password = ref('');
let avatar = ref('');
let nickname = ref('');
let errorOnFetch = ref('')
const selectedUserType = ref('artist');

const toggleFields = () => {
  // Implementa la lógica para mostrar u ocultar campos según el valor seleccionado
};
const register = async() => {
  try {
    errorOnFetch.value = ''
    const { data, pending, error } = await useFetch('http://localhost:8000/api/v1/artists/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token f3b557760eda960a094698122c6eb9489c2487f3'
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        first_name: first_name.value,
        last_name: last_name.value,
        password: password.value,
        avatar: avatar.value,
        nickname: nickname.value,
      })
    });
    if (error) {
      errorOnFetch.value = error.value;
      error = ''
    }
  } catch (anotherError) {
    // Capturar errores de la solicitud y manejarlos según sea necesario
    errorOnFetch.value = anotherError
  }
  }
</script>
  
  <style scoped>
  /* Estilos de Tailwind CSS */
  </style>