<script lang="ts">
	import '../styles/global.css';
	import Nav from '../components/nav.svelte';
</script>

<div class="p-8 max-w-6xl mx-auto">
	<Nav />
	<slot />
</div>

<style>
</style>
