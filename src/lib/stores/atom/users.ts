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
		pfp: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_R6rlotTbP4J-q3B5iXXHqL03muamfvSsJrZGpR7PaNLVfG7J'
	},
	Helen: {
		email: 'helen@mail.com',
		pass: 'HelenY@y',
		pfp: 'https://i.pinimg.com/736x/54/94/c1/5494c18d25eff861daeb72f9bb34605c.jpg'
	},
	'Jane Doe': {
		email: 'janedoe@mail.com',
		pass: 'P@ssw0rd',
		pfp: 'https://i.pinimg.com/736x/75/f5/58/75f558db25e0eb872f6356ea557652ce.jpg'
	},
	'Alex Johnson': {
		email: 'aj@mail.com',
		pass: 'ajTheM@n',
		pfp: pfp_default
	}
});
