import { persisted } from 'svelte-persisted-store';

import type { TUsername } from './users';
import { get } from 'svelte/store';
import { nanoid } from 'nanoid';

export type TPieceId = string;

export type TPiece = {
	name: string;
	img: string;
	lat: number;
	lng: number;
	username: TUsername;
};

export const pieces_store = persisted<{
	[K in TPieceId]: TPiece;
}>('custom__pieces', {
	a: {
		name: 'vintage embroidered seude coat',
		img: 'https://i.ebayimg.com/thumbs/images/g/w30AAOSwyGxkD3V0/s-l1200.jpg',
		lat: 1.3649039,
		lng: 103.8878901,
		username: 'Helen'
	},
	b: {
		name: 'white cotton shirt',
		img: 'https://res.cloudinary.com/agnesb-group/image/upload/w_1200,f_auto,q_auto/v1697749154/CMC/Products/L769UQ36_010_1.jpg',
		lat: 1.3349039,
		lng: 103.8578901,
		username: 'Daniel'
	},
	c: {
		name: 'brown pants',
		img: 'https://cdn-images.farfetch-contents.com/27/14/83/01/27148301_57196808_600.jpg',
		lat: 1.37,
		lng: 103.84,
		username: 'Daniel'
	}
});

export function PieceId() {
	let id: string;
	do {
		id = nanoid();
	} while (id in get(pieces_store));
	return id;
}
