<script lang="ts">
	import IconArrowLeftBold from '~icons/mdi/arrow-left-bold';
	import IconArrowRightBold from '~icons/mdi/arrow-right-bold';

	import ExploreSwipe, { type TProps as TExploreSwipeProps } from './ExploreSwipe.svelte';
	import HeartCheckbox from './HeartCheckbox.svelte';

	import { blank_gif } from '$lib/skeleton';
	import { pieces_store } from '$lib/stores/atom/pieces';

	type TProps = {
		id: TExploreSwipeProps['id'] | undefined;
		left_ondrop: TExploreSwipeProps['left_ondrop'];
	};

	const { id, left_ondrop }: TProps = $props();

	const piece = $derived($pieces_store[id!]);
</script>

<article class="flex flex-wrap items-center">
	{#if piece}
		<ExploreSwipe id={id!} {left_ondrop} {piece} />
		<p class="gap-space mt-3 flex basis-full flex-col items-center font-bold">
			<span>Swipe <span class="text-error">left</span> to see next,</span>
			<span><span class="text-success">right</span> to exchange</span>
		</p>
		<div class="basis-full">
			<label class="gap-x-space sticky mt-3 mr-6 ml-auto flex w-max items-center">
				<HeartCheckbox />
				<span>Liked Clothing</span>
			</label>
		</div>
	{:else}
		<button class="text-error/60 w-1/8 grow" disabled type="button">
			<IconArrowLeftBold height="100%" width="100%" />
		</button>
		<img class="skeleton aspect-square w-1/4 grow" alt="choose a piece" src={blank_gif} />
		<button class="text-success/60 w-1/8 grow" disabled type="button">
			<IconArrowRightBold height="100%" width="100%" />
		</button>
	{/if}
</article>
