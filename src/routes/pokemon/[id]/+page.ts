import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const id = params.id;
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		console.log(data);
		return data;
	} catch (err) {
		console.error(err);
		return {};
	}
}) satisfies PageLoad;
