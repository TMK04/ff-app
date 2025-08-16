<script lang="ts">
	import { onMount } from 'svelte';
	import IconClose from '~icons/mdi/close';

	import type { LatLngLiteral } from 'leaflet';
	import type { EventHandler, FormEventHandler } from 'svelte/elements';

	import ImgMaybeSkeleton from '$lib/components/ImgMaybeSkeleton.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
	import { latlng_serangoon } from '$lib/skeleton';
	import { me_store } from '$lib/stores/atom/me';
	import { PieceId, pieces_store } from '$lib/stores/atom/pieces';

	const map_id = 'map';

	let img_input_el: HTMLInputElement;
	let file_name = $state('');
	let img = $state('');
	let name = $state('');
	let latlng = $state<LatLngLiteral>(latlng_serangoon);

	const resetImg = function () {
		try {
			img_input_el.value = '';
			file_name = '';
			img = '';
		} catch (e) {
			console.error('/profile/piece/list/+page.svelte resetImg', e);
		}
	};
	const img_onchange: FormEventHandler<HTMLInputElement> = function () {
		try {
			const files = img_input_el.files;
			if (files instanceof FileList && files.length === 1) {
				const file = files[0]!;
				file_name = file.name;
				const reader = new FileReader();
				reader.addEventListener('error', function (e) {
					console.error('/profile/piece/list/+page.svelte img_onchange reader', e);
				});
				reader.addEventListener('loadend', function () {
					img = reader.result!.toString();
				});
				// doesn't need to be synchronous/awaited
				reader.readAsDataURL(file);
			} else {
				resetImg();
			}
		} catch (e) {
			console.error('/profile/piece/list/+page.svelte img_onchange', e);
		}
	};
	const onsubmit: EventHandler<SubmitEvent, HTMLFormElement> = function (ev) {
		try {
			ev.preventDefault();
			const id = PieceId();
			pieces_store.update(function (pieces) {
				try {
					pieces[id] = {
						img,
						name,
						username: $me_store.username,
						lat: latlng.lat,
						lng: latlng.lng
					};
					ev.currentTarget.reset();
					resetImg();
				} catch (e) {
					console.error('/profile/piece/list/+page.svelte onsubmit update', e);
				}
				return pieces;
			});
		} catch (e) {
			console.error('/profile/piece/list/+page.svelte onsubmit', e);
		}
	};

	onMount(async function () {
		try {
			const L = await import('leaflet');
			const { LeafletMap } = await import('$lib/leaflet');

			const map = LeafletMap(map_id);

			const marker = L.marker(latlng_serangoon, { draggable: true, autoPan: true }).addTo(map);

			marker.addEventListener('dragend', function (ev) {
				try {
					latlng = ev.target._latlng;
				} catch (e) {
					console.error('/profile/piece/list/+page.svelte onMount marker.dragend', e);
				}
			});
		} catch (e) {
			console.error('/profile/piece/list/+page.svelte onMount', e);
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

<TopNav>List a clothing</TopNav>
<main class="mx-6 mt-4">
	<form {onsubmit}>
		<section class="flex flex-wrap justify-center gap-3">
			<label class="flex grow flex-wrap gap-y-2">
				<div
					class="join has-user-invalid:outline-error min-w-max grow outline-offset-2 has-user-invalid:outline-2"
				>
					<header class="join-item btn">Select image</header>
					<p class="join-item input w-0 grow overflow-scroll">{file_name || 'No image selected'}</p>
					<input
						bind:this={img_input_el}
						name="img"
						class="hidden"
						accept="image/*"
						onchange={img_onchange}
						required
						type="file"
					/>
					<button class="btn join-item" onclick={resetImg} type="button"><IconClose /></button>
				</div>
				<ImgMaybeSkeleton
					class="aspect-square w-full max-w-2xs object-contain"
					alt={name}
					src={img}
				/>
			</label>
			<input
				name="name"
				class="input min-w-2xs grow"
				maxlength={30}
				placeholder="Name"
				required
				type="text"
			/>
			<div id={map_id} class="aspect-[4/3] basis-full"></div>
			<button class="btn btn-primary" type="submit">List Clothing</button>
		</section>
	</form>
</main>
