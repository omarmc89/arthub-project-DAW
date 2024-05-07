import { useAuthStore } from '~/stores/auth'

export const useUserLoggedData = async () => {
    const runtimeConfig = useRuntimeConfig()
    const {userType, artistId, clientId } = storeToRefs(useAuthStore());
    let userData = null

    const { userLogged , sessionToken} = useAuthStore(); // Asegúrate de invocar la función useAuthStore para obtener el estado actual
    if (userLogged && userType.value === 'artist') {
        const { data, error } = await useFetch(`${runtimeConfig.public.baseUrl}search/artist/?user_id=${userLogged.pk}`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionToken}`
            }
        });
        if (data) {
            userData = data.value
        }
        else
            return error
    } else if (userLogged && userType.value === 'client') {
        // const { data, error } = await useFetch(`${runtimeConfig.public.baseUrl}search/artist/?user_id=${userLogged.pk}`, {
            const { data, error } = await useFetch(`http://localhost:8000/api/v1/search/client/?user=${userLogged.pk}`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionToken}`
            }
        });
        if (data) {
            userData = data.value
        }
        else
            return error

    } else {
        console.error('No se pudo obtener el usuario logueado');
        return null; // O un objeto vacío, dependiendo de lo que necesites
    }
    return userData
};
