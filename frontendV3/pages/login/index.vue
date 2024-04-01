<template>
    <section>
        <UForm class="p-6" @submit.prevent="login">
            <UInput v-model="user.email" type="email" placeholder="Email" required />
            <UInput type="password" v-model="user.password" placeholder="Password" required />
            <UButton @click.prevent="login">Login</UButton>
        </UForm>
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
    const toast = useToast();
    const router = useRouter();

    const login = async () => {
        let test = ''
        const { data, error } = await authenticateUser(user.value)
        test = data
        // if (authenticated) {
        //     toast.add({ title: 'Login correct! Redirecting to Home...',
        //     timeout: 2000, callback:() => router.push('/dashboard') })
        // }
        if (data) {
            toast.add({ title: 'Login correct! Redirecting to Home...',
            timeout: 2000, callback:() => router.push('/dashboard') })
        }

        if (error) {
            toast.add({ title: 'Login incorrect! Try again...',
            timeout: 2000 })
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