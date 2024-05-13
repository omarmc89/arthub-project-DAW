<template>
  <section class="flex flex-row gap-8 mb-12">
    <UButton :class="{ 'btn-clicked': !inputBlocked, 'btn': inputBlocked}" @click="inputBlockedToggle">Edit profile</UButton>
    <UButton class="btn" @click="inputBlockedToggle">Change password</UButton>
  </section>
  <section class="main-container flex flex-row">
      <article class="image-container flex items-center justify-center">
          <img v-if="skeletonOff" :src="avatar_image" :alt="user.avatar" class="rounded-xl"/>
          <USkeleton v-if="!skeletonOff" class="h-[350px] w-[350px]" />
      </article>
      <article class="form-container flex flex-col justify-center items-center">
          <form class="artwork-form space-y-4 text-slate-900" @submit.prevent="update">
                  <div>
                      <div class="form-label text-center text-center">
                          <label for="first_name">First Name</label>
                          <input v-model="user.first_name" :class="{ 'input-blocked': inputBlocked }"  :readonly="inputBlocked" id="first_name" name="first_name" type="text" class="form-control rounded-full bg-white">
                      </div>
                      <div class="form-label text-center">
                          <label for="last_name">Last Name</label>
                          <input v-model="user.last_name" :class="{ 'input-blocked': inputBlocked }"  :readonly="inputBlocked" id="last_name" name="last_name" type="text" class="form-control rounded-full bg-white">
                      </div>
                      <div class="form-label text-center">
                          <label for="username">Username</label>
                          <input v-model="user.username" :class="{ 'input-blocked': inputBlocked }"  :readonly="inputBlocked" id="username" name="username" type="text" class="form-control rounded-full bg-white">
                      </div>
                      <div class="form-label text-center">
                          <label for="avatar">Image URL</label>
                          <input v-model="user.avatar" :class="{ 'input-blocked': inputBlocked }"  :readonly="inputBlocked" id="avatar" name="avatar" type="text" class="form-control rounded-full bg-white">
                      </div>
                      <div v-if="userType == 'artist'" class="form-label text-center">
                          <label for="nickname">Nickname</label>
                          <input v-model="artist.nickname" :class="{ 'input-blocked': inputBlocked }"  :readonly="inputBlocked" id="nickname" name="nickname" type="text" class="form-control rounded-full bg-white">
                      </div>
                      <div v-if="userType == 'client'" class="form-label text-center">
                          <label for="birth_date">birth_date</label>
                          <input v-model="client.birth_date" :class="{ 'input-blocked': inputBlocked }"  :readonly="inputBlocked" id="birth_date" name="birth_date" type="date" class="form-control rounded-full bg-white">
                      </div>
                      <div class="form-label text-center">
                          <label for="email">email</label>
                          <input v-model="user.email" :class="{ 'input-blocked': inputBlocked }"  :readonly="inputBlocked" id="email" name="email" type="email" class="form-control rounded-full bg-white">
                      </div>
                  </div>
              <button type="submit" :disabled="pendingFetch" class="btn btn-primary">
                  <span v-if="pendingFetch">Updating...</span>
                  <span v-else>Update</span>
              </button>
          </form>
      </article>
  </section>
    
</template>

<script setup>
import { useUserLoggedData } from '@/composables/useUserLoggedData'
const route = useRoute()
const toast = useToast();
const { userLogged, userType, artistId, clientId } = storeToRefs(useAuthStore());
const pendingFetch = ref(false)
const avatar_image = ref('')
const inputBlocked = ref(true)
const artist = ref({
    nickname: ''
})
const user = ref({
    first_name: '',
    last_name: '',
    username:'',
    email:'',
    password:'',
    avatar:''
})

const client = ref({
    birth_date: ''
})

const dataFetch = ref({})
const skeletonOff = ref(false)
const userData = ref({})
const runtimeConfig = useRuntimeConfig()


onBeforeMount(async() => {
  // Llama a tu función aquí
  userData.value = await useUserLoggedData();
});

onMounted(async () => {
  try {
    userData.value = await useUserLoggedData();
    if (userData.value) {
        user.value.username = userData.value.user.username
        user.value.first_name = userData.value.user.first_name
        user.value.last_name = userData.value.user.last_name
        user.value.email = userData.value.user.email
        user.value.avatar = userData.value.user.avatar
        user.value.password = userData.value.user.password
        client.value.birth_date = userData.value.birth_date
    }
    checkAvatar()
    skeletonOff.value = true
  } catch (error) {
    console.error('Error fetching user artworks:', error);
  }
});

watch(user.value, () => {
  // Si el avatar cambia, actualiza la imagen
  checkAvatar();
  console.log('Avatar changed');
});

function checkAvatar () {
    if (user.value.avatar.includes('http')) {
        avatar_image.value = user.value.avatar
    } else {
        avatar_image.value = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'
    }
}

const update = async() => {
  if (userType == 'artist') {
      const { data, pending, error } = await useFetch(`${runtimeConfig.public.baseUrl}artists/${artistData.value.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
          //'Authorization': 'Token f3b557760eda960a094698122c6eb9489c2487f3'
        },
        body: JSON.stringify({
            id: userLogged.value.pk,
            username: user.value.username,
            email: user.value.email,
            first_name: user.value.first_name,
            last_name: user.value.last_name,
            password: user.value.password,
            avatar: user.value.avatar,
            nickname: artist.value.nickname,
        })
      });
      if (error) {
        console.log(error.value)
      }
      if (data) {
        dataFetch.value = data.value;
        toast.add({ title: 'User Updated! Redirecting to Dashboard...', timeout: 2000, callback:() => navigateTo('/dashboard') })
      }
    } else {
      const { data, pending, error } = await useFetch(`${runtimeConfig.public.baseUrl}clients/${clientId.value}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
          //'Authorization': 'Token f3b557760eda960a094698122c6eb9489c2487f3'
        },
        body: JSON.stringify({
            id: userLogged.value.pk,
            username: user.value.username,
            email: user.value.email,
            first_name: user.value.first_name,
            last_name: user.value.last_name,
            password: user.value.password,
            avatar: user.value.avatar,
            birth_date: client.value.birth_date,
        })
      });
      if (error) {
        console.log(error.value)
      }
      if (data) {
        dataFetch.value = data.value;
        toast.add({ title: 'User Updated! Redirecting to Dashboard...', timeout: 2000, callback:() => navigateTo('/dashboard') })
      }
    }
  }

  function inputBlockedToggle() {
    inputBlocked.value = !inputBlocked.value
  }

</script>

<style scoped>

.btn-clicked{
  background-color: #bbf7d0;
  color:#232c33;
  padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

.input-blocked{
  background-color: #232c33;
  color: white;
  cursor:not-allowed;
}

.title {
    font-family: 'Garute';
    font-size: 4rem;
    font-weight: 800;
    text-align: center;
    padding: 3rem;
}

.main-container {
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.form-container {
    flex: 1;
}

.image-container {
    max-width: 400px;
    max-height: 400px;
    overflow: hidden;
    flex: 1;
}

  .artwork-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-label {
    width: 100%;
    max-width: 1000px;
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
    background-color: #232c33;
    color: #e1e9ec;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #e1e9ec;
    color: #232c33;
  }

  @media (width <= 650px) {
  
  .main-container {
    flex-direction: column;
    gap: 2rem;
  }

}
</style>