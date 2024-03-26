<template>
    <section>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input v-model="user.email" type="email" placeholder="Email" required>
            <input type="password" v-model="user.password" placeholder="Password" required>
            <button @click.prevent="login">Login</button>
        </form>
    </section>
</template>

<script setup>

import { storeToRefs } from 'pinia'
import { useAuthStore} from  '~/store/auth'

const { authenticateUser } = useAuthStore()
const { authenticated, userLogged } = storeToRefs(useAuthStore())

const user = ref({
    email: '',
    password: '',
})

const router = useRouter();

const login = async () => {
    await authenticateUser(user.value)
    if (authenticated) {
        console.log('authenticated')
        router.push('/')
    }
}

</script>

<style>


form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 1rem;
}
</style>