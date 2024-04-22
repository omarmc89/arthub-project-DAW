import { defineStore } from 'pinia'

// interface UserPayloadInterface {
//     email: string
//     password: string
// }

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        userEmailLogged: '',
        userLogged : '',
        sessionToken : '',
        artistId: ''
    }),

    actions: {
        async authenticateUser({ email, password }) {
            const { data, error, pending } = await useFetch('http://localhost:8000/api/v1/auth/login/', {
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
                this.userEmailLogged = email
                this.sessionToken = data.value.key
                localStorage.setItem('token', data.value.key)
            }
            this.getUserID()

            return { data: data.value, error: error.value }
        },
    
        async getUserID() {
            const { data } = await useFetch ('http://localhost:8000/api/v1/auth/user/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
            }
        })

            if (data.value) {
                const userLogin = {...data.value}
                this.userLogged = userLogin
                localStorage.setItem('userId', data.value.pk)
                this.getArtistId()
            }
        },
        
        async getArtistId() {
            const { data } = await useFetch (`http://localhost:8000/api/v1/search/artist/?user_id=${this.userLogged.pk}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
            }
        })

            if (data.value) {
                const artistData = data.value
                this.artistId = artistData.id
                localStorage.setItem('artistID', data.value.id)
            }
        },

        logout() {
            const token = useCookie('token')
            this.authenticated = false
            token.value = null
            this.userEmailLogged = null
            this.userLogged = null
            this.sessionToken = null
            this.artistId = null
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
        }
    },
    persist: true,
})