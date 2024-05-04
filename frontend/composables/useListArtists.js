export default async function useListArtists () {
    const runtimeConfig = useRuntimeConfig()
    const { data, error, pending } = await useFetch(runtimeConfig.public.baseUrl+'artists/', {
        lazy: false
    })

    return { data, error, pending}
}