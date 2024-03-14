export default defineNuxtPlugin((nuxt) => {
	let { data, refresh: refreshUser } = useFetch<{ data: string }>("/api/data");

	return {
		provide: {
			data
		}
	}
});
