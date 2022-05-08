import { writable } from 'svelte/store';
import type { PokemonData } from '../types';

export const pokemon = writable<PokemonData[]>([]);
export const isLoaded = writable<boolean>(false);
