<script lang="ts">
	import IconCommentMultipleOutline from '~icons/mdi/comment-multiple-outline';
	import IconDotsHorizontal from '~icons/mdi/dots-horizontal';
	import IconHeart from '~icons/mdi/heart';

	type TProps = {
		username?: string;
		posted_ago?: string;
		like_count?: number;
		comment_count?: number;
	};

	const { username, posted_ago, like_count, comment_count }: TProps = $props();
</script>

<li class="flex w-xs grow flex-col">
	<header class="mb-2 flex w-full gap-x-2">
		<div class="skeleton h-12 w-12 rounded-full"></div>
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
	<div class="skeleton ms-12 mb-3 h-64 w-48"></div>
	<footer class="ms-12 flex gap-4">
		<label class="flex items-center font-bold">
			<input name="like" class="hidden" type="checkbox" />
			<IconHeart
				class="stroke-neutral text-base-100 me-1 stroke-2 transition-colors [:checked+&]:text-red-500"
			/>
			<span
				class={[
					'me-0.75 inline-block h-lh',
					{ 'skeleton w-[2ch]': typeof like_count === 'undefined' }
				]}
			>
				{like_count}
			</span>
			likes
		</label>
		<button class="flex items-center font-bold">
			<IconCommentMultipleOutline class="me-1" />
			<span
				class={[
					'me-0.75 inline-block h-lh',
					{ 'skeleton w-[2ch]': typeof comment_count === 'undefined' }
				]}
			>
				{comment_count}
			</span>
			comments
		</button>
	</footer>
</li>
