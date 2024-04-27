export default async function useListArtworks () {
    const runtimeConfig = useRuntimeConfig()
    const { data, error, pending } = await useFetch('https://arthub-api-polished-breeze-902.fly.dev/api/v1/artworks/', {
        lazy: false
    })

    return { data, error, pending}
}