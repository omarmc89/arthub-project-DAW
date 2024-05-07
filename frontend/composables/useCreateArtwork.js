import { useAuthStore } from '~/stores/auth'



export const useCreateArtwork = async (fetchData) => {
    const runtimeConfig = useRuntimeConfig()
    const { sessionToken} = useAuthStore();

    const { data, error, pending } = await useFetch(runtimeConfig.public.baseUrl + 'create/artwork/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionToken}`
        },
        body: JSON.stringify({
            fetchData
        })
    })

    return { data: data.value, error: error.value }
}