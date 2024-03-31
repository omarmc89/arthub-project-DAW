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
const toast = useToast();
const router = useRouter();

const login = async () => {
    const { data, error } = await authenticateUser(user.value)
    if (authenticated) {
        toast.add({ title: 'Login correct! Redirecting to Home...',
        timeout: 2000, callback:() => router.push('/dashboard') })
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