<script lang="ts">
	import IconArrowLeftBold from '~icons/mdi/arrow-left-bold';
	import IconArrowRightBold from '~icons/mdi/arrow-right-bold';

	import type { DragEventHandler } from 'svelte/elements';

	import HeartCheckbox from './HeartCheckbox.svelte';
	import MaybeAuthA from './MaybeAuthA.svelte';

	import { base } from '$app/paths';
	import { type TPiece, type TPieceId } from '$lib/stores/atom/pieces';

	export type TProps = {
		id: TPieceId;
		piece: TPiece;
		left_ondrop: DragEventHandler<HTMLButtonElement>;
	};

	const { id, piece, left_ondrop }: TProps = $props();

	const searchParams = $derived.by(function () {
		// eslint-disable-next-line svelte/prefer-svelte-reactivity
		const searchParams = new URLSearchParams();
		if (id) {
			searchParams.set('id', id);
		}
		return searchParams;
	});
</script>

<button
	class="text-error w-1/8 grow"
	ondragover={function (ev) {
		ev.preventDefault();
		ev.dataTransfer!.dropEffect = 'link';
	}}
	ondrop={left_ondrop}
	type="button"
>
	<IconArrowLeftBold height="100%" width="100%" />
</button>
<div class="relative aspect-square w-1/4 grow">
	<img
		class="absolute h-full w-full object-contain"
		alt={piece.name}
		draggable
		ondragstart={function (ev) {
			ev.dataTransfer!.setData('application/custom', ev.currentTarget.id);
			ev.dataTransfer!.effectAllowed = 'link';
		}}
		src={piece.img}
	/>
</div>
<MaybeAuthA
	class="text-success w-1/8 grow"
	href={`${base}/delivery/options?${searchParams}`}
	ondragover={function (ev) {
		ev.preventDefault();
		ev.dataTransfer!.dropEffect = 'link';
	}}
	ondrop={async function (ev) {
		ev.preventDefault();
		ev.currentTarget.click();
	}}
>
	<IconArrowRightBold height="100%" width="100%" />
</MaybeAuthA>
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
