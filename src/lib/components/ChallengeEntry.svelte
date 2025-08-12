<script lang="ts">
	import IconCommentMultipleOutline from '~icons/mdi/comment-multiple-outline';
	import IconDotsHorizontal from '~icons/mdi/dots-horizontal';

	import HeartCheckbox from './HeartCheckbox.svelte';
	import ImgMaybeSkeleton from './ImgMaybeSkeleton.svelte';
	import ImgPfp from './ImgPfp.svelte';

	type TProps = {
		username?: string;
		pfp?: string;
		posted_ago?: string;
		like_count?: number;
		comment_count?: number;
		title?: string;
		src?: string;
	};

	const { username, pfp, posted_ago, like_count, comment_count, title, src }: TProps = $props();
</script>

<li class="flex w-xs grow flex-col">
	<header class="mb-2 flex w-full gap-x-2">
		<ImgPfp class="h-12" alt={username} src={pfp} />
		<section class="flex grow flex-col justify-items-center gap-0.25">
			<h1 class={['h-lh font-bold', { 'skeleton w-[10ch]': !username }]}>
				{username}
			</h1>
			<div class={['text-base-content/60 h-lh text-sm', { 'skeleton w-[8ch]': !posted_ago }]}>
				{posted_ago}
			</div>
		</section>
		<button class="btn btn-ghost" type="button"><IconDotsHorizontal /></button>
	</header>
	<ImgMaybeSkeleton class="ms-12 mb-3 h-80 w-48 object-cover" alt={title} {src} />
	<footer class="ms-12 flex gap-4">
		<label class="gap-x-space flex items-center font-bold">
			<HeartCheckbox />
			<span
				class={['inline-block h-lh', { 'skeleton w-[2ch]': typeof like_count === 'undefined' }]}
			>
				{like_count}
			</span>
			likes
		</label>
		<button class="gap-x-space flex items-center font-bold">
			<IconCommentMultipleOutline />
			<span
				class={['inline-block h-lh', { 'skeleton w-[2ch]': typeof comment_count === 'undefined' }]}
			>
				{comment_count}
			</span>
			<span>comments</span>
		</button>
	</footer>
</li>
