export default async function useListArtworks () {
    const { data, error, pending } = await useFetch('http://localhost:8000/api/v1/artworks/', {
        lazy: false
    })

    return { data, error, pending}
}