import { nanoid } from 'nanoid';
import { get } from 'svelte/store';
import { persisted } from 'svelte-persisted-store';

import type { TUsername } from './users';

export type TChallengeEntryId = string;

export type TChallengeEntry = {
	comment_count: number;
	img: string;
	like_username_arr: TUsername[];
	posted_ago: string;
	title: string;
	username: TUsername;
};

/**
 * current challenge
 */
export const challenge_store = persisted<{
	[K in TChallengeEntryId]: TChallengeEntry;
}>('custom__challenge', {
	a: {
		comment_count: 0,
		img: 'https://media.istockphoto.com/id/1205018922/photo/fashionable-young-woman-is-crossing-the-street.jpg?s=612x612&w=0&k=20&c=e8-xIEtnjsocwIhMMjMXGxdyXYJ7avVBzeed2M5TSKM=',
		like_username_arr: ['Daniel', 'Helen'],
		posted_ago: '2 hrs ago',
		title: 'Street Fashion',
		username: 'Helen'
	},
	b: {
		comment_count: 2,
		img: 'https://i.pinimg.com/736x/2b/d3/cf/2bd3cfdb4e32baf3087a68ea4b531012.jpg',
		like_username_arr: ['Daniel'],
		posted_ago: '3 mins ago',
		title: 'Daniel',
		username: 'Daniel'
	}
});

export function ChallengeId() {
	let id: string;
	do {
		id = nanoid();
	} while (id in get(challenge_store));
	return id;
}
