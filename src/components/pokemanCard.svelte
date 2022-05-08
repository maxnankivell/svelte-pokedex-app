<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { PokemonData } from '../types';
	import TypeTag from './TypeTag.svelte';

	export let pokeman: PokemonData;
	$: xOffset = pokeman.id % 2 === 0 ? 800 : -800;
</script>

<a
	class="p-6 bg-sky-300 text-gray-800 text-center rounded-md flex flex-col items-center transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1"
	href={`/pokemon/${pokeman.id}`}
	in:fly={{ delay: 0, duration: 300, x: xOffset, y: 0, opacity: 0, easing: cubicOut }}
>
	<img class="h-40 w-40" src={pokeman.image} alt={pokeman.name} />
	<h2 class="uppercase text-2xl">{pokeman.id}. {pokeman.name}</h2>
	<div class="flex gap-2">
		{#each pokeman.types ?? [] as type}
			<TypeTag pokemonType={type} />
		{/each}
	</div>
</a>
