<template>
  <section class="flex flex-row gap-8 mb-12">
    <UButton :class="{ 'btn-clicked': !inputBlocked, 'btn': inputBlocked}" @click="inputBlockedToggle">Edit profile</UButton>
    <UButton class="btn" @click="inputBlockedToggle">Change password</UButton>
  </section>
  <section class="main-container flex flex-row">
      <article class="image-container">
          <img v-if="skeletonOff" :src="avatar_image" :alt="user.avatar" />
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
                      <div class="form-label text-center">
                          <label for="nickname">Nickname</label>
                          <input v-model="artist.nickname" :class="{ 'input-blocked': inputBlocked }"  :readonly="inputBlocked" id="nickname" name="nickname" type="text" class="form-control rounded-full bg-white">
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
import { useAuthStore } from '~/store/auth';

const route = useRoute()
const toast = useToast();
const { userLogged } = storeToRefs(useAuthStore());
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

const dataFetch = ref({})
const skeletonOff = ref(false)
const artistData = ref({})

onBeforeMount(async() => {
  // Llama a tu función aquí
  artistData.value = await useUserLoggedData();
});

onMounted(async () => {
  try {
    artistData.value = await useUserLoggedData();
    if (artistData.value) {
        user.value.username = artistData.value.user.username
        user.value.first_name = artistData.value.user.first_name
        user.value.last_name = artistData.value.user.last_name
        user.value.email = artistData.value.user.email
        user.value.avatar = artistData.value.user.avatar
        user.value.password = artistData.value.user.password
        artist.value.nickname = artistData.value.nickname
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
  const { data, pending, error } = await useFetch(`https://arthub-api-polished-breeze-902.fly.dev/api/v1/artists/${artistData.value.id}/`, {
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
    console.log(dataFetch.value);
    toast.add({ title: 'Artist created! Redirecting to Home...', timeout: 2000, callback:() => navigateTo('/home') })
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
</style>