import { get } from 'svelte/store';
import { isLoaded, pokemon } from '../stores/pokemonstore';
import type { PokemonData } from '../types';
import type { PageLoad } from './pokemon/[id]/$types';

export const load: PageLoad = async ({ fetch }) => {
	if (get(isLoaded)) return {};
	try {
		//get array of all the types
		const allTypesUrl = `https://pokeapi.co/api/v2/type`;
		const allTypesResult = await fetch(allTypesUrl);
		const allTypesData = await allTypesResult.json();
		const allTypesArray = allTypesData.results.map(
			(result: { name: string; url: string }) => result.name
		);

		//get array of types per pokemen
		const typeArray: string[][] = [];
		for (const type of allTypesArray) {
			const typeUrl = `https://pokeapi.co/api/v2/type/${type}`;
			const typeResult = await fetch(typeUrl);
			const typeData = await typeResult.json();
			for (const pokeman of typeData.pokemon) {
				const url2Breakdown = pokeman.pokemon.url
					.substring(0, pokeman.pokemon.url.length - 1)
					.split(`/`);
				if (url2Breakdown[url2Breakdown.length - 1] - 1 < 150) {
					if (!typeArray[url2Breakdown[url2Breakdown.length - 1] - 1]) {
						typeArray[url2Breakdown[url2Breakdown.length - 1] - 1] = [];
					}
					typeArray[url2Breakdown[url2Breakdown.length - 1] - 1].push(typeData.name);
				}
			}
		}

		//get basic information for all pokemon
		const allPokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=150`;
		const allPokemonRes = await fetch(allPokemonUrl);
		const allPokemonData = await allPokemonRes.json();
		const loadedPokemon: PokemonData[] = allPokemonData.results.map(
			(data: { name: string; url: string }, index: number) => ({
				name: data.name,
				id: index + 1,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`,
				types: typeArray[index]
			})
		);
		pokemon.set(loadedPokemon);
		isLoaded.set(true);
		return {};
	} catch (err) {
		console.error(err);
		return {};
	}
};
