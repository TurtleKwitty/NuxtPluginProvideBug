export default defineNuxtPlugin((nuxt) => {
	const data = ref();

	return {
		provide: {
			data
		}
	}
});
