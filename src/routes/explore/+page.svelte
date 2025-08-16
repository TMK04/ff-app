<script lang="ts">
	import { onMount } from 'svelte';
	import IconArrowLeftBold from '~icons/mdi/arrow-left-bold';
	import IconArrowRightBold from '~icons/mdi/arrow-right-bold';
	import IconClose from '~icons/mdi/close';
	import IconFilter from '~icons/mdi/filter';
	import IconMapMarkerDistance from '~icons/mdi/map-marker-distance';
	import IconSortVariant from '~icons/mdi/sort-variant';

	import type { Circle, LatLngLiteral } from 'leaflet';

	import { base } from '$app/paths';
	import { EarthDistance } from '$lib/EarthDistance';
	import { SinglyCircularLinkedList } from '$lib/LinkedList';
	import HeartCheckbox from '$lib/components/HeartCheckbox.svelte';
	import MaybeAuthA from '$lib/components/MaybeAuthA.svelte';
	import TopSearch from '$lib/components/TopSearch.svelte';
	import { blank_gif, latlng_serangoon } from '$lib/skeleton';
	import { pieces_store, type TPiece, type TPieceId } from '$lib/stores/atom/pieces';

	const center_latlng: LatLngLiteral = latlng_serangoon;

	const distance_3km = 3000;
	let filter_within3km_checked = $state(true);
	const filtered_pieces = $derived.by(function () {
		type TLinkedListPiece = TPiece & { id: TPieceId; distance: number };
		const arr: TLinkedListPiece[] = [];

		for (const id in $pieces_store) {
			const piece = $pieces_store[id];
			const distance = EarthDistance(center_latlng, piece);
			if (filter_within3km_checked && distance > distance_3km) continue;
			arr.push({ id, distance, ...piece });
		}

		const linked_list = new SinglyCircularLinkedList<TLinkedListPiece>();
		if (arr.length === 0) return linked_list;

		arr.sort(function (a, b) {
			return a.distance - b.distance;
		});
		for (const piece of arr) {
			linked_list.insert(piece.id, piece);
		}
		return linked_list;
	});

	const map_id = 'map';
	let filter_within3km_circle = $state<Circle | undefined>(undefined);

	let focused_id = $state<TPieceId | undefined>(undefined);
	const focused_piece = $derived<undefined | TPiece>(
		focused_id ? $pieces_store[focused_id] : undefined
	);
	const searchParams = $derived.by(function () {
		// eslint-disable-next-line svelte/prefer-svelte-reactivity
		const searchParams = new URLSearchParams();
		if (focused_id) {
			searchParams.set('id', focused_id);
		}
		return searchParams;
	});

	onMount(async function () {
		const L = await import('leaflet');
		const { ElIcon, LeafletMap } = await import('$lib/leaflet');

		const map = LeafletMap(map_id);

		filter_within3km_circle = L.circle(center_latlng, {
			className: 'custom--leaflet-circle',
			color: 'var(--color-primary)',
			radius: distance_3km,
			fillColor: 'var(--color-base-content)'
		}).addTo(map);

		for (const id in $pieces_store) {
			const piece = $pieces_store[id];

			const radio = document.createElement('input');
			radio.className = 'hidden peer';
			radio.name = 'focused';
			radio.type = 'radio';
			const img = document.createElement('img');
			img.className =
				'bg-base-100/60 border-base-content/60 group-hover:border-base-content/100 peer-checked:border-base-content/100 m-0.5 aspect-square w-8! rounded-full border object-cover opacity-75 transition-all group-hover:border-2 group-hover:opacity-95 peer-checked:w-10! peer-checked:border-2 peer-checked:opacity-95';
			img.src = piece.img;
			const icon = new ElIcon({
				className: 'flex! items-center justify-center group',
				html: `${radio.outerHTML}${img.outerHTML}`,
				tagName: 'label',
				iconSize: [40, 40]
			});
			const marker = L.marker([piece.lat, piece.lng], { icon }).addTo(map);

			marker.addEventListener('click', function () {
				focused_id = id;
			});

			marker.addTo(map);
		}
	});

	$effect(function () {
		if (filter_within3km_checked) {
			if (filter_within3km_circle) {
				filter_within3km_circle.getElement()?.classList.remove('hidden');
			}
			return;
		}
		if (filter_within3km_circle) {
			filter_within3km_circle.getElement()?.classList.add('hidden');
		}
	});
</script>

<svelte:head>
	<link
		crossorigin=""
		href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
		integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
		rel="stylesheet"
	/>
</svelte:head>

<TopSearch />
<main class="relative flex grow flex-col gap-y-4">
	<section class="mx-3 flex items-center gap-x-2">
		<section class="flex w-0 grow gap-x-2 overflow-x-scroll">
			<button class="btn-badge" type="button">
				Filter <IconFilter />
			</button>
			<button class="btn-badge" type="button">
				Sort <IconSortVariant />
			</button>
			<label
				class="not-hover:has-checked:bg-base-200 btn-badge group has-checked:border-base-content/60"
			>
				Within 3km
				<div class="swap swap-rotate">
					<input type="checkbox" bind:checked={filter_within3km_checked} />
					<IconClose
						class="swap-on stroke-current stroke-1 transition-[stroke-width] group-hover:stroke-2"
					/>
					<IconMapMarkerDistance class="swap-off" />
				</div>
			</label>
		</section>
		<p class="block w-max text-sm">99 results</p>
	</section>
	<fieldset id={map_id} class="aspect-[4/3] w-full"></fieldset>
	<div
		class="divider before:bg-base-content/50 after:bg-base-content/50 mx-auto my-0 w-12 before:h-1.5 before:rounded-l-full after:h-1.5 after:rounded-r-full"
	></div>
	<article class="flex flex-wrap items-center">
		{#if focused_piece}
			<button
				class="text-error w-1/8 grow"
				ondragover={function (ev) {
					ev.preventDefault();
					ev.dataTransfer!.dropEffect = 'link';
				}}
				ondrop={function (ev) {
					ev.preventDefault();
					if (!focused_id) return;
					const focused_node = filtered_pieces.obj_id_node[focused_id] || filtered_pieces.head;
					focused_id = focused_node.next.data.id;
				}}
				type="button"
			>
				<IconArrowLeftBold height="100%" width="100%" />
			</button>
			<img
				class="aspect-square w-1/4 grow object-contain"
				alt={focused_piece.name}
				draggable
				ondragstart={function (ev) {
					ev.dataTransfer!.setData('application/custom', ev.currentTarget.id);
					ev.dataTransfer!.effectAllowed = 'link';
				}}
				src={focused_piece.img}
			/>
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
</main>
<footer class="mt-6 flex flex-col items-center">
	<a class="btn btn-primary" href={`${base}/profile/piece/list`}>List a new piece</a>
</footer>
