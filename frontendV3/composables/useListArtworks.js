export default async function useListArtworks () {
    const { data, error, pending } = useFetch('http://localhost:8000/api/v1/artists/')


    return { data, error, pending}

}