<script context="module" lang="ts">
	import { pokemon, isLoaded } from '../stores/pokemonstore';
	import { get } from 'svelte/store';

	export async function load({ fetch }: Record<string, any>): Promise<Record<string, unknown>> {
		if (get(isLoaded)) return {};
		try {
			const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
			const res = await fetch(url);
			const data = await res.json();
			const loadedPokemon = data.results.map(
				(data: { name: string; url: string }, index: number) => ({
					name: data.name,
					id: index + 1,
					image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
						index + 1
					}.png`
				})
			);
			pokemon.set(loadedPokemon);
			isLoaded.set(true);
			return {};
		} catch (err) {
			console.error(err);
			return {};
		}
	}
</script>

<script lang="ts">
	import PokemanCard from '../components/pokemanCard.svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let searchTerm = '';
	let filteredPokemon: { name: string; id: number; image: string }[] = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<svelte:head><title>Pokedex Home</title></svelte:head>

<h1
	class="text-4xl text-center my-8 uppercase"
	in:fade={{ delay: 0, duration: 300, easing: cubicOut }}
>
	Original Pokemon Pokedex
</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
	in:fade={{ delay: 0, duration: 300, easing: cubicOut }}
/>

<div class="py-4 grid gap-4 grid-cols-1 sm:grid-cols-2">
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>

<style>
</style>
