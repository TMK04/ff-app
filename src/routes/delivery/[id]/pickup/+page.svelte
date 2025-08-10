<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';

	const id = page.params['id'];
</script>

<div class="mx-3 mt-6 flex flex-col gap-y-4">
	<header class="text-xl font-bold">
		<h2>Pick Up</h2>
	</header>
	<article class="card bg-base-300 p-4 shadow-sm">
		<div class="card-body gap-0 p-0">
			<p>Clothing: white cotton shirt</p>
			<p class="text-sm">Length: 30 cm, Width: 20 cm, Height 15 cm</p>
		</div>
	</article>
	<article class="card border-base-content/30 border-2 p-4 shadow-sm">
		<h3 class="card-title">Swapper Information</h3>
		<div class="card-body gap-0 p-0">
			<p>Name: Alex Johnson</p>
			<p>Preferred Meeting location: Amk Hub</p>
			<div class="card-actions mt-4">
				<button class="btn btn-primary w-full">Chat with him here</button>
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
	<a
		class="btn btn-primary mt-6 w-full"
		href={`${base}/delivery/${id}/summary?${page.url.searchParams}`}
	>
		Confirm
	</a>
</div>
