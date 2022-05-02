<script context="module" lang="ts">
	export async function load({ params, fetch }: Record<string, any>): Promise<Record<string, any>> {
		let id = params.id;
		try {
			const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
			const res = await fetch(url);
			const data = await res.json();
			return { props: { pokeman: data } };
		} catch (err) {
			console.error(err);
			return {};
		}
	}
</script>

<script lang="ts">
	export let pokeman: Record<string, any>;
	const type = pokeman.types[0].type.name;
</script>

<svelte:head>
	<title>Pokedex - {pokeman.name}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong>
		| Weight: <strong>{pokeman.weight}</strong>
	</p>
	<img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name} />
</div>
