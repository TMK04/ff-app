import { writable } from 'svelte/store';

/**
 * "me" is the current user
 */
export const me = writable({
	auth: false,
	username: 'Jane Doe'
});
