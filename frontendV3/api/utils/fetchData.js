export default async function fetchData(endpoint) {
  try {
      const response = await useFetch(endpoint);
      const data = response.data;
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Opcional: lanzar el error para que se maneje externamente
  }
}
