import { useAuthStore } from '~/store/auth'



export const useCreateArtwork = async (fetchData) => {
    const { sessionToken} = useAuthStore();

    const { data, error, pending } = await useFetch('http://localhost:8000/api/v1/create/artwork/', {
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