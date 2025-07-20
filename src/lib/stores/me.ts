// "me" is the current user

import { writable } from 'svelte/store';

export const me = writable({
	auth: false
});
