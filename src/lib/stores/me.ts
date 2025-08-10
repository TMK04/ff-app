// "me" is the current user

import { writable } from 'svelte/store';

export const me = writable({
	auth: false,
	username: 'Jane Doe',
	pfp: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png'
});
