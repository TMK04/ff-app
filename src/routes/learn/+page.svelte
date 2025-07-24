<script lang="ts">
	import TopSearch from '$lib/components/TopSearch.svelte';
</script>

<TopSearch />

<main class="mx-3 mt-3">
	<h1 class="mb-4 text-lg font-bold">Courses & Videos</h1>
	<ul class="mb-6 flex gap-4 overflow-x-scroll">
		<li>
			<figure class="w-32">
				<div class="skeleton h-32"></div>
				<figcaption class="h-lh overflow-hidden overflow-ellipsis whitespace-nowrap">
					Upcycling
				</figcaption>
			</figure>
		</li>
		<li>
			<figure class="w-32">
				<div class="skeleton h-32"></div>
				<figcaption class="h-lh overflow-hidden overflow-ellipsis whitespace-nowrap">
					How to donate
				</figcaption>
			</figure>
		</li>
		<li>
			<figure class="w-32">
				<div class="skeleton h-32"></div>
				<figcaption class="h-lh overflow-hidden overflow-ellipsis whitespace-nowrap">
					Sustainable Fashion
				</figcaption>
			</figure>
		</li>
	</ul>
	<ul class="flex flex-wrap gap-4">
		{#each { length: 10 }}
			<li class="skeleton h-32 w-full"></li>
		{/each}
	</ul>
</main>
