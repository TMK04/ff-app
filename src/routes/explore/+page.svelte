<script lang="ts">
	import { onMount } from 'svelte';
	import IconArrowLeftBold from '~icons/mdi/arrow-left-bold';
	import IconArrowRightBold from '~icons/mdi/arrow-right-bold';
	import IconClose from '~icons/mdi/close';
	import IconFilter from '~icons/mdi/filter';
	import IconMapMarkerDistance from '~icons/mdi/map-marker-distance';
	import IconSortVariant from '~icons/mdi/sort-variant';
	import RawIconTshirtCrew from '~icons/mdi/tshirt-crew?raw&width=100%25&height=100%25';

	import type { LatLngExpression } from 'leaflet';

	import { base } from '$app/paths';
	import HeartCheckbox from '$lib/components/HeartCheckbox.svelte';
	import MaybeAuthA from '$lib/components/MaybeAuthA.svelte';
	import TopSearch from '$lib/components/TopSearch.svelte';

	const map_id = 'map';

	onMount(async function () {
		const L = await import('leaflet');

		const center_latlng: LatLngExpression = [1.3499039, 103.8728901];
		const map = L.map(map_id).setView(center_latlng, 12);
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		const distance_3km = 3000;
		L.circle(center_latlng, {
			color: 'var(--color-primary)',
			radius: distance_3km,
			fillColor: 'var(--color-base-content)'
		}).addTo(map);

		const icon = L.divIcon({
			className:
				'hover:bg-base-100/60 flex! items-center justify-center rounded-full border-0 p-0.25 transition hover:border-2',
			iconSize: [24, 24],
			html: RawIconTshirtCrew as unknown as string
		});
		const offset_arr = [0.015, 0.045];
		for (const offset of offset_arr) {
			L.marker([center_latlng[0] + offset, center_latlng[1]], { icon }).addTo(map);
			L.marker([center_latlng[0] - offset, center_latlng[1]], { icon }).addTo(map);
			L.marker([center_latlng[0], center_latlng[1] + offset], { icon }).addTo(map);
			L.marker([center_latlng[0], center_latlng[1] - offset], { icon }).addTo(map);
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
					<input checked type="checkbox" />
					<IconClose
						class="swap-on stroke-current stroke-1 transition-[stroke-width] group-hover:stroke-2"
					/>
					<IconMapMarkerDistance class="swap-off" />
				</div>
			</label>
		</section>
		<p class="block w-max text-sm">99 results</p>
	</section>
	<div id={map_id} class="aspect-[4/3] w-full"></div>
	<div
		class="divider before:bg-base-content/50 after:bg-base-content/50 mx-auto my-0 w-12 before:h-1.5 before:rounded-l-full after:h-1.5 after:rounded-r-full"
	></div>
	<section>
		<article class="mb-3 flex items-center">
			<button
				class="text-error w-1/8 grow"
				ondragover={function (ev) {
					ev.preventDefault();
					ev.dataTransfer!.dropEffect = 'link';
				}}
				type="button"
			>
				<IconArrowLeftBold height="100%" width="100%" />
			</button>
			<img
				class="aspect-square w-1/4 grow object-contain"
				alt="white cotton shirt"
				draggable
				ondragstart={function (ev) {
					ev.dataTransfer!.setData('application/custom', ev.currentTarget.id);
					ev.dataTransfer!.effectAllowed = 'link';
				}}
				src="https://i.ebayimg.com/thumbs/images/g/w30AAOSwyGxkD3V0/s-l1200.jpg"
			/>
			<MaybeAuthA
				class="text-success w-1/8 grow"
				href={`${base}/delivery/a/options`}
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
		</article>
		<p class="text-center font-bold">Swipe</p>
	</section>
	<label class="gap-x-space sticky mt-3 mr-6 ml-auto flex w-max items-center">
		<HeartCheckbox />
		<span>Liked Clothing</span>
	</label>
</main>
