import { writable } from 'svelte/store';
import { getData } from './uti/idb.js';

export const count = writable(0);
