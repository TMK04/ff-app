import { writable } from 'svelte/store';

/**
 * "me" is the current user
 */
export const me_store = writable({
	auth: false,
	username: 'Jane Doe'
});
