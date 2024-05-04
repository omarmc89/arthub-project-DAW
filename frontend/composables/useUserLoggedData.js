import { useAuthStore } from '~/store/auth'

export const useUserLoggedData = async () => {
    const runtimeConfig = useRuntimeConfig()
    let artistData = null

    const { userLogged , sessionToken} = useAuthStore(); // Asegúrate de invocar la función useAuthStore para obtener el estado actual
    if (userLogged) {
        const { data, error } = await useFetch(`${runtimeConfig.public.baseUrl}search/artist/?user_id=${userLogged.pk}`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionToken}`
            }
        });
        if (data) {
            artistData = data.value
        }
        else
            return error
    } else {
        console.error('No se pudo obtener el usuario logueado');
        return null; // O un objeto vacío, dependiendo de lo que necesites
    }
    return artistData
};
