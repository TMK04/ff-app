<script lang="ts">
	import { pieces_store } from '$lib/stores/atom/pieces';
</script>

<ul class="grid grid-cols-2">
	<article class="card border-base-content/30 col-span-2 max-w-64 border-2 p-4 shadow-sm">
		<figure class="mb-2 w-1/2">
			<img
				class="aspect-square object-contain"
				alt={$pieces_store['a'].name}
				src={$pieces_store['a'].img}
			/>
		</figure>
		<h2 class="card-title">{$pieces_store['a'].name}</h2>
		<div class="card-body gap-0 p-0">
			<p>Name: {$pieces_store['a'].username}</p>
			<p>Time: 3:00 PM</p>
			<p>Date: November 15, 2023</p>
			<p>Location: Yio Chu Kang MRT</p>
		</div>
	</article>
</ul>
