import { useAuthStore } from '~/stores/auth'

export const useUserLoggedData = async () => {
    const runtimeConfig = useRuntimeConfig()
    const {userType, artistId, clientId } = storeToRefs(useAuthStore());
    let userData = null

    const { userLogged , sessionToken} = useAuthStore();
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
            const { data, error } = await useFetch(`${runtimeConfig.public.baseUrl}search/client/?user=${userLogged.pk}`, {
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
        return null;
    }
    return userData
};
