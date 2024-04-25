export default async function useListArtists () {
    const { data, error, pending } = await useFetch('http://localhost:8000/api/v1/artists/', {
        lazy: false
    })

    return { data, error, pending}
}