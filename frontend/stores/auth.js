import { defineStore, acceptHMRUpdate } from "pinia";
import { useLocalStorage } from "@vueuse/core";
const runtimeConfig = useRuntimeConfig()

export const useAuthStore = defineStore('auth', {

    id: 'Auth',

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
            const { data, error, pending } = await useFetch(runtimeConfig.public.baseUrl + 'auth/login/', {
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
            const { data } = await useFetch (runtimeConfig.public.baseUrl + 'auth/user/', {
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
            const { data, error } = await useFetch (`${runtimeConfig.public.baseUrl}search/artist/?user_id=${this.userLogged.pk}`, {
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
            const { data, error } = await useFetch (`${runtimeConfig.public.baseUrl}search/client/?user=${this.userLogged.pk}`, {
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
            this.userType = null
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
        }
    },
    persist: true,
})

export const useCartStore = defineStore("CartStore", {
    state: () => {
      return {
        items: [],
      };
    },
    getters: {
      /**
       * Returns the total number of items in the cart.
       * @param {Object} state - The current state of the store.
       * @returns {number} The total number of items in the cart.
       */
      totalCounts: (state) => state.items.length,
  
      /**
       * Returns whether the cart is empty or not.
       * @param {Object} state - The current state of the store.
       * @returns {boolean} Whether the cart is empty or not.
       */
      isCartEmpty: (state) => state.totalCounts === 0,
  
      /**
       * Returns an object with items grouped by their name.
       * @param {Object} state - The current state of the store.
       * @returns {Object} An object with items grouped by their name.
       */
      groupedItems: (state) => {
        const itemsList = state.items
        
        return itemsList
  
          // return obj data structure
          // {
          //   "Pineapple Gum": [
          //     {
          //       "name": "Pineapple Gum",
          //       "image": "pineapple-gum.jpg",
          //       "price": 3
          //     }
          //   ],
          //   "Dried Pineapple": [
          //     {
          //       "name": "Dried Pineapple",
          //       "image": "pineapple-dried.jpg",
          //       "price": 5
          //     }, {
          //       "name": "Dried Pineapple",
          //       "image": "pineapple-dried.jpg",
          //       "price": 5
          //     }
          //   ]
          // }
        },
  
      /**
       * @returns {Function} A function that takes an item name and returns the count of items with that name in the cart.
       */
      grouppedItemsWithCount: (state) => {
        // dynamic getter with return function
        // https://pinia.vuejs.org/core-concepts/getters.html#Passing-arguments-to-getters
        return (name) => state.groupedItems[name].length;
      },
  
      totalPrice: (state) => {
        return state.items.reduce((total, item) => total + item.price, 0);
      },
  
      /*
      // demo with regular function **
  
      totalCounts() {
        return this.items.length;
      },
      isCartEmpty() {
        return this.totalCounts === 0;
      },
      */
    },
    actions: {
      // actions 不能用 arrow function
  
      /**
       * Adds items to the cart.
       * @param {number} count - The number of items to add.
       * @param {Object} item - The item to add.
       */
      addItem(count, item) {
        count = parseInt(count);
        this.items.push(item)

        if (localStorage.getItem("CartStore:items")) {
            localStorage.setItem("CartStore:items", JSON.stringify(this.items));
        } else {
            localStorage.setItem("CartStore:items", JSON.stringify(this.items));
        }
  
        // uncomment the following line to see the error message
        // check 'App.vue' onError handler on line 38

      },
      addArtwork(id, title, price, image) {

        const item = {
            id,
            title,
            price,
            image
        }

        this.items.push(item)

        if (localStorage.getItem("CartStore:items")) {
            localStorage.setItem("CartStore:items", JSON.stringify(this.items));
        } else {
            localStorage.setItem("CartStore:items", JSON.stringify(this.items));
        }
      },
      /**
       * Removes an item from the cart by name.
       * @param {string} name - The name of the item to remove.
       */
      removeItem(title) {
        this.items = this.items.filter((item) => item.title !== title);
      },
      /**
       * Updates the item count for a given item in the cart.
       * @param {number} count - The new count for the item.
       * @param {object} item - The item to update.
       */
      updateItemCount(count, item) {
        count = parseInt(count);
  
        this.removeItem(item.name);
        this.addItem(count, item);
      },
      clearCart() {
        // fix the issue of not clearing the cart after using the useLocalStorage composable
        // https://vueschool.io/lessons/using-composables-in-the-pinia-state
  
        localStorage.removeItem("CartStore:items");
        this.items = [];
      },
    },
    persist: true,
  });
  
  // enable HMR (Hot Module Replacement) for this store
  // https://pinia.vuejs.org/cookbook/hot-module-replacement.html
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
  }