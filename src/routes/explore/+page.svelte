<script lang="ts">
	import IconArrowLeftBold from '~icons/mdi/arrow-left-bold';
	import IconArrowRightBold from '~icons/mdi/arrow-right-bold';
	import IconClose from '~icons/mdi/close';
	import IconFilter from '~icons/mdi/filter';
	import IconMapMarkerDistance from '~icons/mdi/map-marker-distance';
	import IconSortVariant from '~icons/mdi/sort-variant';

	import { base } from '$app/paths';
	import HeartCheckbox from '$lib/components/HeartCheckbox.svelte';
	import MaybeAuthA from '$lib/components/MaybeAuthA.svelte';
	import TopSearch from '$lib/components/TopSearch.svelte';
	import { blank_gif } from '$lib/skeleton';
</script>

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
	<img class="skeleton aspect-[4/3] w-full" alt="Map" src={blank_gif} />
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
