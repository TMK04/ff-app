<script lang="ts">
	import IconCommentMultipleOutline from '~icons/mdi/comment-multiple-outline';
	import IconDotsHorizontal from '~icons/mdi/dots-horizontal';

	import type { FormEventHandler } from 'svelte/elements';

	import HeartCheckbox from './HeartCheckbox.svelte';
	import ImgMaybeSkeleton from './ImgMaybeSkeleton.svelte';
	import ImgPfp from './ImgPfp.svelte';

	import {
		challenge_store,
		type TChallengeEntry,
		type TChallengeEntryId
	} from '$lib/stores/atom/challenge';
	import { me_store } from '$lib/stores/atom/me';
	import { users_store } from '$lib/stores/atom/users';

	type TProps = {
		id: TChallengeEntryId;
	} & TChallengeEntry;

	const { id, comment_count, img, like_username_arr, posted_ago, title, username }: TProps =
		$props();

	const like_checked = $derived(like_username_arr.includes($me_store.username));
	const like_oninput: FormEventHandler<HTMLInputElement> = function () {
		try {
			challenge_store.update(function (challenge) {
				try {
					const like_index = challenge[id].like_username_arr.findIndex(function (like_username) {
						return like_username === $me_store.username;
					});
					if (like_index === -1) {
						let like_count = 0;
						for (const id in challenge) {
							if (challenge[id].like_username_arr.includes($me_store.username)) like_count += 1;
						}
						// Max 3 likes
						if (like_count < 3) challenge[id].like_username_arr.push($me_store.username);
					} else {
						challenge[id].like_username_arr.splice(like_index, 1);
					}
				} catch (e) {
					console.error('ChallengeEntry like_oninput update', e);
				}
				return challenge;
			});
		} catch (e) {
			console.error('ChallengeEntry like_oninput', e);
		}
	};
	const like_count = $derived(like_username_arr.length);
</script>

<li class="flex w-xs grow flex-col">
	<header class="mb-2 flex w-full gap-x-2">
		<ImgPfp class="h-12" alt={username} src={$users_store[username].pfp} />
		<section class="flex grow flex-col justify-items-center gap-0.25">
			<h1 class="h-lh font-bold">
				{username}
			</h1>
			<div class="text-base-content/60 h-lh text-sm">
				{posted_ago}
			</div>
		</section>
		<button class="btn btn-ghost" type="button"><IconDotsHorizontal /></button>
	</header>
	<ImgMaybeSkeleton class="ms-12 mb-3 h-80 w-48 object-cover" alt={title} src={img} />
	<footer class="ms-12 flex gap-4">
		<label class="gap-x-space flex items-center font-bold">
			<HeartCheckbox checked={like_checked} onchange={like_oninput} />
			<span class="inline-block h-lh">
				{like_count}
			</span>
			likes
		</label>
		<button class="gap-x-space flex items-center font-bold">
			<IconCommentMultipleOutline />
			<span class="inline-block h-lh">
				{comment_count}
			</span>
			<span>comments</span>
		</button>
	</footer>
</li>
