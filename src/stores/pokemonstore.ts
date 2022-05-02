import { writable } from 'svelte/store';

export const pokemon = writable<{ name: string; id: number; image: string }[]>([]);
export const isLoaded = writable<boolean>(false);

// export const fetchPokemon = async () => {
// 	if (isLoaded) return;
// 	console.log('he');
// 	await new Promise((resolve) => setTimeout(resolve, 3000));
// 	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
// 	const res = await fetch(url);
// 	const data = await res.json();
// 	const loadedPokemon = data.results.map((data: { name: string; url: string }, index: number) => ({
// 		name: data.name,
// 		id: index + 1,
// 		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
// 			index + 1
// 		}.png`
// 	}));
// 	pokemon.set(loadedPokemon);
// 	isLoaded = true;
// };

// export const fetchPokemon = async () => {
// 	if (loaded) return;
// 	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
// 	const res = await fetch(url);
// 	const data = await res.json();
// 	const loadedPokemon = data.results.map((data: { name: string; url: string }, index: number) => ({
// 		name: data.name,
// 		id: index + 1,
// 		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
// 			index + 1
// 		}.png`
// 	}));
// 	pokemon.set(loadedPokemon);
// 	loaded = true;
// };

// export const getPokemonById = async (id: number) => {
// 	if (pokemonDetails[id]) return pokemonDetails[id];

// 	try {
// 		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
// 		const res = await fetch(url);
// 		const data = await res.json();
// 		pokemonDetails[id] = data;
// 		return data;
// 	} catch (err) {
// 		console.error(err);
// 		return null;
// 	}
// };
