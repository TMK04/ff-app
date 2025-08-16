import { persisted } from 'svelte-persisted-store';

export type TUsername = string;

export const pfp_default = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg';

export const users_store = persisted<{
	[K in TUsername]: {
		email: string;
		pass: string;
		pfp: string;
	};
}>('custom__users', {
	Daniel: {
		email: 'daniel@mail.com',
		pass: 'danielRock5',
		pfp: pfp_default
	},
	Helen: {
		email: 'helen@mail.com',
		pass: 'HelenY@y',
		pfp: pfp_default
	},
	'Jane Doe': {
		email: 'janedoe@mail.com',
		pass: 'P@ssw0rd',
		pfp: pfp_default
	}
});
