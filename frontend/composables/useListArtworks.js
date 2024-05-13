export default async function useListArtworks () {
    const runtimeConfig = useRuntimeConfig()
    const { data, error, pending } = await useFetch(runtimeConfig.public.baseUrl + 'artworks/', {
        lazy: false
    })

    return { data, error, pending}
}