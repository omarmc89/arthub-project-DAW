import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        userEmailLogged: '',
        userLogged : '',
        userType:'',
        sessionToken : '',
        artistId: '',
        clientId: ''
    }),

    actions: {
        async authenticateUser({ email, password }) {
            const { data, error, pending } = await useFetch('https://arthub-api-polished-breeze-902.fly.dev/api/v1/auth/login/', {
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
            const { data } = await useFetch ('https://arthub-api-polished-breeze-902.fly.dev/api/v1/auth/user/', {
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
                this.getClientId()
            }
        },
        
        async getArtistId() {
            const { data, error } = await useFetch (`https://arthub-api-polished-breeze-902.fly.dev/api/v1/search/artist/?user_id=${this.userLogged.pk}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
            }
    
        })
            if (error){
                this.artistId = ''
            }

            if (data.value) {
                const artistData = data.value
                this.artistId = artistData.id
                this.userType = 'artist'
                localStorage.setItem('artistID', data.value.id)
            }
        },

        async getClientId() {
            const { data, error } = await useFetch (`http://localhost:8000/api/v1/search/client/?user=${this.userLogged.pk}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
            }
        })
            if(error){
                this.clientId = ''
            }

            if (data.value) {
                const clientData = data.value
                this.clientId = clientData.id
                this.userType = 'client'
                localStorage.setItem('clientId', clientData.id)
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
            this.clientId = null
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
        }
    },
    persist: true,
})