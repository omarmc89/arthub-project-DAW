import { useAuthStore } from '~/stores/auth'

export const useUpdateArtwork = async (fetchData) => {
    const { sessionToken} = useAuthStore();
    const runtimeConfig = useRuntimeConfig()

    const { data, error, pending } = await useFetch(runtimeConfig.public.baseUrl+'update/artwork/', {
        method: 'PUT',
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