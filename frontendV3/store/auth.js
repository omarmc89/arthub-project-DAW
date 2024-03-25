import { defineStore } from 'pinia'

// interface UserPayloadInterface {
//     email: string
//     password: string
// }

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        userLogged: null,
    }),

    actions: {
        async authenticateUser({ email, password }) {
            const { data, pending } = await useFetch('http://localhost:8000/api/v1/auth/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            this.loading = pending

            if (data.value) {
                const token = useCookie('token')
                token.value = data.value.key
                this.authenticated = true
                this.userLogged = email
                console.log(data)
            }
        },

        logout() {
            const token = useCookie('token')
            this.authenticated = false
            token.value = null
        }
    }
})