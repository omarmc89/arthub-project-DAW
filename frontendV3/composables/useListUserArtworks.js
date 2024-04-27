export default async function useListUserArtworks (artistId) {
    const runtimeConfig = useRuntimeConfig()

    const { data, error, pending } = await useLazyFetch(`${runtimeConfig.public.baseUrl}search/artworkbyuser/?id=${artistId}`)

    return { data, error, pending}
}