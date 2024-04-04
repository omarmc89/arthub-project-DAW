export default async function useListUserArtworks (artistId) {
    const { data, error, pending } = await useLazyFetch(`http://localhost:8000/api/v1/search/artworkbyuser/?id=${artistId}`)

    return { data, error, pending}
}