<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { PageData } from './$types';

	export let data: PageData;

	$: pokeman = data;
	$: type = data?.types[0].type.name;
</script>

<svelte:head>
	<title>Pokedex - {pokeman.name}</title>
</svelte:head>

<div class="flex flex-col items-center" in:fade={{ delay: 0, duration: 300, easing: cubicOut }}>
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong>
		| Weight: <strong>{pokeman.weight}</strong>
	</p>
	<div class="grid grid-cols-2 gap-2">
		<img
			class="h-40 w-40"
			in:fade={{ delay: 300, duration: 300, easing: cubicOut }}
			src={pokeman.sprites['front_default']}
			alt={pokeman.name}
		/>
		<img
			class="h-40 w-40"
			in:fade={{ delay: 450, duration: 300, easing: cubicOut }}
			src={pokeman.sprites['back_default']}
			alt={pokeman.name}
		/>
		<img
			class="h-40 w-40"
			in:fade={{ delay: 600, duration: 300, easing: cubicOut }}
			src={pokeman.sprites['front_shiny']}
			alt={pokeman.name}
		/>
		<img
			class="h-40 w-40"
			in:fade={{ delay: 750, duration: 300, easing: cubicOut }}
			src={pokeman.sprites['back_shiny']}
			alt={pokeman.name}
		/>
	</div>
</div>
