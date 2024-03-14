export default defineEventHandler(async (e) => {
	let body = await readBody<{ retValue: boolean }>(e);

	if (!body.retValue) return;
	else return { data: "This is data" }
});
