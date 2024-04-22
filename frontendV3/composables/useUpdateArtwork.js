import { useAuthStore } from '~/store/auth'

export const useUpdateArtwork = async (fetchData) => {
    const { sessionToken} = useAuthStore();

    const { data, error, pending } = await useFetch('http://localhost:8000/api/v1/update/artwork/', {
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