<script lang="ts">
	import IconCommentMultipleOutline from '~icons/mdi/comment-multiple-outline';
	import IconDotsHorizontal from '~icons/mdi/dots-horizontal';

	import HeartCheckbox, { type TProps as TLikeProps } from './HeartCheckbox.svelte';
	import ImgMaybeSkeleton from './ImgMaybeSkeleton.svelte';
	import ImgPfp from './ImgPfp.svelte';

	import { type TChallengeEntry } from '$lib/stores/challenge';
	import { me } from '$lib/stores/me';
	import { users } from '$lib/stores/users';

	type TProps = {
		like_props: TLikeProps;
	} & Pick<TChallengeEntry, 'img' | 'title'>;

	const { img, like_props, title }: TProps = $props();
	const like = $derived(like_props.checked ? 1 : 0);
</script>

<li class="flex w-xs grow flex-col">
	<header class="mb-2 flex w-full gap-x-2">
		<ImgPfp class="h-12" alt={$me.username} src={$users[$me.username].pfp} />
		<section class="flex grow flex-col justify-items-center gap-0.25">
			<h1 class="h-lh font-bold">
				{$me.username}
			</h1>
			<div class="text-base-content/60 h-lh text-sm">just now</div>
		</section>
		<button class="btn btn-ghost" type="button"><IconDotsHorizontal /></button>
	</header>
	<ImgMaybeSkeleton class="ms-12 mb-3 h-80 w-48 object-cover" alt={title} src={img} />
	<footer class="ms-12 flex gap-4">
		<label class="gap-x-space flex items-center font-bold">
			<HeartCheckbox {...like_props} />
			<span class="inline-block h-lh">{like}</span>
			likes
		</label>
		<button class="gap-x-space flex items-center font-bold">
			<IconCommentMultipleOutline />
			<span class="skeleton inline-block h-lh w-[2ch]"></span>
			<span>comments</span>
		</button>
	</footer>
</li>
