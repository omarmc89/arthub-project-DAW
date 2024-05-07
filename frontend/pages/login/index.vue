<template>
    <section>
        <form class="form space-y-4 mt-2 text-slate-900 flex flex-col items-center justify-center" @submit.prevent="login">
            <h2 v-if="loginError" class="text-xl text-red-800 rounded-xl p-2 mt-2 bg-red-200"> Invalid Credentials</h2>
            <h2 v-if="!loginError" class="text-xl rounded-xl p-2 bg-transparent text-transparent">Login</h2>
            <section class="flex flex-col items-center gap-4">
                <div class="form-label flex flex-col items-center">
                    <label for="username">Username</label>
                    <input v-model="user.email" type="text" placeholder="Email" required class="form-control rounded-full bg-white">
                </div>
                <div class="form-label flex flex-col items-center mb-6">
                    <label for="email">Email</label>
                    <input v-model="user.password" type="password" placeholder="Password" required class="form-control rounded-full bg-white">
                </div>
            </section>
            <button type="submit" :disabled="pendingFetch" class="btn">
                <span v-if="pendingFetch">Submitting...</span>
                <span v-else>Login</span>
            </button>
            
        </form>
    </section>
</template>

<script setup>
    definePageMeta({
    layout: 'custom',
    })

    import { storeToRefs } from 'pinia'
    import { useAuthStore} from  '~/stores/auth'

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
            toast.add({ title: 'Login correct! Redirecting to your Dashboard...',
            timeout: 2000, callback:() => redirectToDashboard() })
        }

        if (error) {
            loginError.value = true
            toast.add({ title: 'Login incorrect! Please try again...', timeout: 1500, color:"red", callback:resetLogin()})
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
    background-color: #232c33;
    color: #e1e9ec;
    cursor: pointer;
}

.btn:hover {
    background-color: #e1e9ec;
    color: #232c33;
}
</style>~/stores/auth