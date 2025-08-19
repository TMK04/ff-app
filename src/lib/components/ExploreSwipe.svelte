<script lang="ts">
	import { onMount } from 'svelte';
	import IconArrowLeftBold from '~icons/mdi/arrow-left-bold';
	import IconArrowRightBold from '~icons/mdi/arrow-right-bold';

	import type { DragEventHandler, EventHandler, TouchEventHandler } from 'svelte/elements';

	import HeartCheckbox from './HeartCheckbox.svelte';
	import MaybeAuthA from './MaybeAuthA.svelte';

	import { base } from '$app/paths';
	import { type TPiece, type TPieceId } from '$lib/stores/atom/pieces';

	export type TProps = {
		id: TPieceId;
		piece: TPiece;
		left_ondrop: EventHandler<UIEvent>;
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

	const left_id = 'custom--explore-swipe-left';
	let left_x0 = $state<number>();
	let left_x1 = $state<number>();
	let left_y0 = $state<number>();
	let left_y1 = $state<number>();

	const right_id = 'custom--explore-swipe-right';
	let right_x0 = $state<number>();
	let right_x1 = $state<number>();
	let right_y0 = $state<number>();
	let right_y1 = $state<number>();

	onMount(function () {
		try {
			const left_el = document.getElementById(left_id);
			if (left_el) {
				const left_rect = left_el.getBoundingClientRect();
				left_x0 = left_rect.x;
				left_x1 = left_rect.x + left_rect.width;
				left_y0 = left_rect.y;
				left_y1 = left_rect.y + left_rect.height;
			} else {
				console.error('ExploreSwipe.svelte onMount left_el undefined');
			}

			const right_el = document.getElementById(right_id);
			if (right_el) {
				const right_rect = (right_el as HTMLAnchorElement).getBoundingClientRect();
				right_x0 = right_rect.x;
				right_x1 = right_rect.x + right_rect.width;
				right_y0 = right_rect.y;
				right_y1 = right_rect.y + right_rect.height;
			} else {
				console.error('ExploreSwipe.svelte onMount right_el undefined');
			}
		} catch (e) {
			console.error('ExploreSwipe.svelte onMount', e);
		}
	});

	let img_el: HTMLImageElement;
	let initial_img_center_x = $state<number>();
	let initial_img_center_y = $state<number>();
	$effect(function () {
		try {
			const initial_img_rect = img_el.getBoundingClientRect();
			initial_img_center_x = initial_img_rect.x + initial_img_rect.width / 2;
			initial_img_center_y = initial_img_rect.y + initial_img_rect.height / 2;
		} catch (e) {
			console.error('ExploreSwipe.svelte img_el $effect', e);
		}
	});

	const ontouchend: TouchEventHandler<HTMLImageElement> = function (ev) {
		try {
			const touchLocation = ev.changedTouches[0];
			const pageX = touchLocation.pageX;
			const pageY = touchLocation.pageY;
			if (
				typeof left_x0 === 'number' &&
				typeof left_x1 === 'number' &&
				typeof left_y0 === 'number' &&
				typeof left_y1 === 'number'
			) {
				if (pageX > left_x0 && pageX < left_x1 && pageY > left_y0 && pageY < left_y1) {
					left_ondrop(ev);
				}
			}
			if (
				typeof right_x0 === 'number' &&
				typeof right_x1 === 'number' &&
				typeof right_y0 === 'number' &&
				typeof right_y1 === 'number'
			) {
				if (pageX > right_x0 && pageX < right_x1 && pageY > right_y0 && pageY < right_y1) {
					const right_el = document.getElementById(right_id);
					if (right_el) {
						right_el.click();
					} else {
						console.error('ExploreSwipe.svelte ontouchend right_el undefined');
					}
				}
			}
			img_el.style.left = '0px';
			img_el.style.top = '0px';
		} catch (e) {
			console.error('ExploreSwipe.svelte ontouchend', e);
		}
	};
	const ontouchmove: TouchEventHandler<HTMLImageElement> = function (ev) {
		try {
			if (typeof initial_img_center_x === 'number' && typeof initial_img_center_y === 'number') {
				const touchLocation = ev.targetTouches[0];
				img_el.style.left = `${touchLocation.pageX - initial_img_center_x}px`;
				img_el.style.top = `${touchLocation.pageY - initial_img_center_y}px`;
			}
		} catch (e) {
			console.error('ExploreSwipe.svelte ontouchmove', e);
		}
	};

	const ondragstart: DragEventHandler<HTMLImageElement> = function (ev) {
		try {
			ev.dataTransfer!.setData('application/custom', ev.currentTarget.id);
			ev.dataTransfer!.effectAllowed = 'link';
		} catch (e) {
			console.error('ExploreSwipe.svelte ondragstart', e);
		}
	};

	const ondragover: DragEventHandler<HTMLElement> = function (ev) {
		try {
			ev.preventDefault();
			ev.dataTransfer!.dropEffect = 'link';
		} catch (e) {
			console.error('ExploreSwipe.svelte ondragover', e);
		}
	};

	const right_ondrop: DragEventHandler<HTMLAnchorElement> = async function (ev) {
		try {
			ev.preventDefault();
			ev.currentTarget.click();
		} catch (e) {
			console.error('ExploreSwipe.svelte right_ondrop', e);
		}
	};
</script>

<button id={left_id} class="text-error w-1/8 grow" {ondragover} ondrop={left_ondrop} type="button">
	<IconArrowLeftBold height="100%" width="100%" />
</button>
<div class="relative aspect-square w-1/4 grow">
	<img
		bind:this={img_el}
		class="absolute h-full w-full object-contain"
		alt={piece.name}
		draggable
		{ondragstart}
		{ontouchend}
		{ontouchmove}
		src={piece.img}
	/>
</div>
<MaybeAuthA
	id={right_id}
	class="text-success w-1/8 grow"
	href={`${base}/delivery/options?${searchParams}`}
	{ondragover}
	ondrop={right_ondrop}
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
