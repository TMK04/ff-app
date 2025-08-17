<script lang="ts">
	import { building } from '$app/environment';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { pieces_store } from '$lib/stores/atom/pieces';

	const searchParams = $derived(building ? new URLSearchParams() : page.url.searchParams);
	const id = $derived(building ? undefined : searchParams.get('id'));
	const piece = $derived(id ? $pieces_store[id] : undefined);
</script>

<div class="mx-3 mt-6 flex flex-col gap-y-4">
	<header class="text-xl font-bold">
		<h2>Pick Up</h2>
	</header>
	<article class="card bg-base-300 p-4 shadow-sm">
		<div class="card-body gap-0 p-0">
			<p>Clothing: <span class={{ 'skeleton w-[10ch]': !piece?.name }}>{piece?.name}</span></p>
			<p class="text-sm">Length: 30 cm, Width: 20 cm, Height 15 cm</p>
		</div>
	</article>
	<article class="card border-base-content/30 border-2 p-4 shadow-sm">
		<h3 class="card-title">Swapper Information</h3>
		<div class="card-body gap-0 p-0">
			<p>Name: {piece?.username}</p>
			<p>Preferred Meeting location: Amk Hub</p>
			<div class="card-actions mt-4">
				<button class="btn btn-primary w-full">Chat with them here</button>
			</div>
		</div>
	</article>
	<article class="card bg-primary-content p-4 shadow-sm">
		<h3 class="card-title">Offered Pickup Date & Time</h3>
		<div class="card-body gap-0 p-0">
			<p>Time: 3:00 PM</p>
			<p>Date: November 15, 2023</p>
			<p>Location: Yio Chu Kang MRT</p>
		</div>
	</article>
	<a class="btn btn-primary mt-6 w-full" href={`${base}/delivery/summary?${searchParams}`}>
		Confirm
	</a>
</div>
