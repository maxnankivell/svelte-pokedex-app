<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
</script>

<h1
	class="text-4xl text-center my-8 uppercase"
	in:fade={{ delay: 0, duration: 300, easing: cubicOut }}
>
	About Pokedex
</h1>

<p class="text-center" in:fade={{ delay: 0, duration: 300, easing: cubicOut }}>
	This pokedex only contains the original 150 pokemon.
</p>
