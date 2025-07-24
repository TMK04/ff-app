<script lang="ts">
	import IconCommentMultipleOutline from '~icons/mdi/comment-multiple-outline';
	import IconDotsHorizontal from '~icons/mdi/dots-horizontal';
	import IconHeart from '~icons/mdi/heart';
</script>

<li class="flex w-xs grow flex-col">
	<header class="mb-2 flex w-full gap-x-2">
		<div class="skeleton h-12 w-12 rounded-full"></div>
		<section class="grow">
			<h1 class="font-bold">Daniel</h1>
			<span class="text-sm">3mins ago</span>
		</section>
		<button class="btn btn-ghost" type="button"><IconDotsHorizontal /></button>
	</header>
	<div class="skeleton ms-12 mb-3 h-64 w-48"></div>
	<footer class="ms-12 flex gap-4">
		<label class="flex items-center gap-1">
			<input name="like" class="hidden" type="checkbox" />
			<IconHeart
				class="stroke-neutral text-neutral-content stroke-2 transition-colors [:checked+&]:text-red-500"
			/>
			<b>21 likes</b>
		</label>
		<button class="flex items-center gap-1">
			<IconCommentMultipleOutline /><b>4 comments</b>
		</button>
	</footer>
</li>
