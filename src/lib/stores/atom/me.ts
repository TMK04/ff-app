import { persisted } from 'svelte-persisted-store';

/**
 * "me" is the current user
 */
export const me_store = persisted('custom__me', {
	auth: false,
	username: 'Jane Doe'
});
