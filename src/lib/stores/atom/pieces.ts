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
	},
	d: {
		name: 'blue rocker shirt',
		img: 'https://m.media-amazon.com/images/I/91Cf5RNeyYL._AC_SY879_.jpg',
		lat: 1.34,
		lng: 103.88,
		username: 'Alex Johnson'
	},
	e: {
		name: 'scarlet dress',
		img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS9-3O6Cb7hbPGdOC4SI592dUrb7iCqmyJBrQzmArrz8WCH25uuaBsXjwmwPoJ-RAZbPPNu42TCcYKU5MUXuz4Mhy8m01vewx0z4EwRR2qELzKw9FKgljhuctGYly7ZeU0CSiU4jpg&usqp=CAc',
		lat: 1.378,
		lng: 103.94,
		username: 'Helen'
	},
	f: {
		name: 'hoodie',
		img: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/755179s6.jpg',
		lat: 1.299,
		lng: 103.8421,
		username: 'Alex Johnson'
	},
	g: {
		name: "women's green shorts",
		img: 'https://roxy.com.sg/cdn/shop/files/erjbs03282_roxy_v_ghw0_frt1_d827cb0c-fb5a-4760-b246-e097b781159c.jpg?v=1749696078&width=1080',
		lat: 1.321,
		lng: 103.9,
		username: 'Helen'
	},
	h: {
		name: 'checkered grey long sleeve',
		img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/472534/sub/goods_472534_sub14_3x4.jpg?width=494',
		lat: 1.333,
		lng: 103.95,
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
