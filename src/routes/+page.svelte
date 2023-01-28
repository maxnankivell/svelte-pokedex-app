<script lang="ts">
	import PokemanCard from '../components/pokemanCard.svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { PokemonData } from '../types';
	import { pokemon } from '../stores/pokemonstore';

	let searchTerm = '';
	let filteredPokemon: PokemonData[] = [];

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
