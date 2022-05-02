<script context="module" lang="ts">
	import { fetchPokemon } from '../stores/pokemonstore';
	export async function load(ctx: Record<string, any>): Promise<Record<string, unknown>> {
		await fetchPokemon();
		return { status: 200 };
	}
</script>

<script lang="ts">
	import PokemanCard from '../components/pokemanCard.svelte';
	import { pokemon } from '../stores/pokemonstore';

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
<h1 class="text-4xl text-center my-8 uppercase">Original Pokemon Pokedex</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>

<style>
</style>
