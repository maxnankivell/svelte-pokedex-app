<script lang="ts">
	export let pokemonType: string;
	$: whiteText =
		pokemonType === 'normal' ||
		pokemonType === 'fighting' ||
		pokemonType === 'poison' ||
		pokemonType === 'rock' ||
		pokemonType === 'bug' ||
		pokemonType === 'ghost' ||
		pokemonType === 'fire' ||
		pokemonType === 'water' ||
		pokemonType === 'psychic' ||
		pokemonType === 'dragon' ||
		pokemonType === 'dark' ||
		pokemonType === 'shadow';
</script>

<div
	class="py-1 px-2 rounded-md"
	class:bg-gray-600={pokemonType === 'normal'}
	class:bg-orange-700={pokemonType === 'fighting'}
	class:bg-sky-400={pokemonType === 'flying'}
	class:bg-purple-400={pokemonType === 'poison'}
	class:bg-orange-900={pokemonType === 'ground'}
	class:bg-yellow-900={pokemonType === 'rock'}
	class:bg-lime-700={pokemonType === 'bug'}
	class:bg-violet-800={pokemonType === 'ghost'}
	class:bg-slate-500={pokemonType === 'steel'}
	class:bg-orange-600={pokemonType === 'fire'}
	class:bg-blue-700={pokemonType === 'water'}
	class:bg-green-500={pokemonType === 'grass'}
	class:bg-yellow-400={pokemonType === 'electric'}
	class:bg-fuchsia-500={pokemonType === 'psychic'}
	class:bg-blue-400={pokemonType === 'ice'}
	class:bg-red-700={pokemonType === 'dragon'}
	class:bg-neutral-800={pokemonType === 'dark'}
	class:bg-pink-400={pokemonType === 'fairy'}
	class:bg-neutral-500={pokemonType === 'unknown'}
	class:bg-slate-900={pokemonType === 'shadow'}
	class:text-neutral-100={whiteText}
>
	{pokemonType}
</div>
