<template>
    <section>

        <UForm class="p-6" @submit.prevent="login">
            <h2 v-show="error" class="text-xl text-red"> Invalid Credentials</h2>
            <UInput v-model="user.email" type="email" placeholder="Email" required />
            <UInput type="password" v-model="user.password" placeholder="Password" required />
            <UButton @click.prevent="login">Login</UButton>
        </UForm>
        <h3 v-show="loginError">Login incorrect</h3>
    </section>
</template>

<script setup>
    definePageMeta({
    layout: 'custom',
    })

    import { storeToRefs } from 'pinia'
    import { useAuthStore} from  '~/store/auth'

    const { authenticateUser } = useAuthStore()
    const { authenticated, userLogged } = storeToRefs(useAuthStore())

    const user = ref({
        email: '',
        password: '',
    })

    const loginError = ref(false)
    const toast = useToast();
    const router = useRouter();

    function resetLogin() {
        user.value.email = ''
        user.value.password = ''
    }

    function redirectToDashboard() {
        navigateTo('/dashboard')
    }

    const login = async () => {
        loginError.value = false
        const { data, error } = await authenticateUser(user.value)
        // if (authenticated) {
        //     toast.add({ title: 'Login correct! Redirecting to Home...',
        //     timeout: 2000, callback:() => router.push('/dashboard') })
        // }
        if (data) {
            toast.add({ title: 'Login correct! Redirecting to Home...',
            timeout: 2000, callback:() => redirectToDashboard() })
        }

        if (error) {
            loginError.value = true
            toast.add({ title: 'Login incorrect! Please try again...', color:"red", callback:resetLogin()})
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