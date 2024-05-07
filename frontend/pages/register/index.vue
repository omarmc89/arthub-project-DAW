<template>
  <UContainer>
    <section class="form-wrapper flex flex-col items-center justify-center">
      <USelect class="mb-4" @change="toggleFields" color="violet" variant="outline" size="xl" icon="i-carbon-user" v-model="selectedUserType" placeholder="Select if you want to register an ARTIST or CLIENT" :padded="true" :options="options" />
      <form class="form space-y-4 text-slate-900 flex flex-col items-center" @submit.prevent="register">
        <section class="flex flex-row items-center gap-12">
          <article class="form-label h-full my-4 flex flex-col items-start justify-center gap-4">
          <div class="form-label">
            <label for="username">Username</label>
            <input v-model="username" type="text" placeholder="Username" required class="form-control rounded-full bg-white">
          </div>
          <div class="form-label">
            <label for="email">Email</label>
            <input v-model="email" type="email" placeholder="Email" required class="form-control rounded-full bg-white">
          </div>
          <div class="form-label">
            <label for="password">Password</label>
            <input type="password" v-model="password" placeholder="Password" required class="form-control rounded-full bg-white">
          </div>          
        </article>
        <article class="form-label my-4 flex flex-col items-start gap-4">
          <div class="form-label">
            <label for="first_name">First Name</label>
            <input v-model="first_name" type="text" placeholder="First Name" required class="form-control rounded-full bg-white">

          </div>
          <div class="form-label">
            <label for="last_name">Last Name</label>
            <input v-model="last_name" type="text" placeholder="Last Name" required class="form-control rounded-full bg-white">

          </div>        
          <div class="form-label">
            <label for="avatar">Avatar Url</label>
            <input v-model="avatar" type="text" placeholder="Avatar url" class="form-control rounded-full bg-white">
          </div>
        </article>
      </section>
      <div class="form-label" v-if="selectedUserType === 'Artist'">
        <label for="nickname">Nickname:</label>
        <input v-model="nickname" type="text" id="nickname" name="nickname" placeholder="Nickname" class="form-control rounded-full bg-white">
      </div>
      <div class="form-label" v-if="selectedUserType === 'Client'">
        <label for="birth_date">Birth Date</label> 
        <input type="date" id="birth_date" name="birth_date" class="form-control rounded-full bg-white">
      </div>
      <button  type="submit" :disabled="pendingFetch" class="btn">
        <span v-if="pendingFetch">Submitting...</span>
        <span v-else>Register</span>
      </button>
      </form>
  
      <div v-if="errorOnFetch" class="text-xl text-red uppercase">{{ errorOnFetch.data.error }}</div>
      <div v-if="pending">Loading...</div>
      <div v-if="dataFetch">Data: {{ dataFetch.value }}</div>
      <!-- Campos adicionales para el cliente -->
      
    </section>
  </UContainer>
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
const dataFetch = ref(null);
const selectedUserType = ref('Artist');

const toast = useToast();
const router = useRouter();
const options = [{
    name: 'Artist',
    value: 'Artist'
    },
    {
    name: 'Client',
    value: 'Client'
    }
]

const toggleFields = () => {
  // Implementa la lógica para mostrar u ocultar campos según el valor seleccionado
};
const register = async() => {

  if (selectedUserType.value == 'Artist') {

      const { data, pending, error } = await useFetch('https://arthub-api.fly.dev/api/v1/artists/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Authorization': 'Token f3b557760eda960a094698122c6eb9489c2487f3'
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
      }
      if (data) {
        dataFetch.value = data.value;
        console.log(dataFetch.value);
        toast.add({ title: 'Artist created! Redirecting to your Dashboard...', timeout: 2000, callback:() => router.push('/dashboard') })
      }
    } else {
      const { data, pending, error } = await useFetch('http://localhost:8000/api/v1/clients/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Authorization': 'Token f3b557760eda960a094698122c6eb9489c2487f3'
        },
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          first_name: first_name.value,
          last_name: last_name.value,
          password: password.value,
          avatar: avatar.value,
          birth_date: birth_date.value,
        })
      });
      if (error) {
        errorOnFetch.value = error.value;
      }
      if (data) {
        dataFetch.value = data.value;
        console.log(dataFetch.value);
        toast.add({ title: 'Client created! Redirecting to your Dashboard...', timeout: 2000, callback:() => router.push('/dashboard') })
      }
    }
  }
</script>
  
  <style scoped>

  .form-label {
    width: 100%;
    max-width: 1000px;
  }

  .form-label label{
    font-size: 2rem;
    font-family: 'Garute';
}

.form-label input{
    font-size: 1.5rem;
    font-family: 'Afacad';
    font-weight: 500;
    color: #818cf8;
    text-transform: uppercase;
}

  .form-control {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: #7735e1;
    color: #fff;
    cursor: pointer;
  }

  .btn:hover {
    background-color: transparent;
    color:#7735e1
  }
  </style>