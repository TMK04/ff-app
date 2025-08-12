<script lang="ts">
	import IconChevronRightCircle from '~icons/mdi/chevron-right-circle';

	import { base } from '$app/paths';
	import Carousel from '$lib/components/Carousel.svelte';
	import ImgPfp from '$lib/components/ImgPfp.svelte';
</script>

<Carousel />
<section class="flex flex-col gap-y-2">
	<h2 class="flex items-center gap-x-1 font-bold">
		Past Competitions
		<IconChevronRightCircle class="inline align-middle" />
	</h2>
	<article class="flex gap-x-4 overflow-x-scroll">
		{#each { length: 10 }}
			<figure>
				<div class="skeleton h-24 w-24 rounded"></div>
			</figure>
		{/each}
	</article>
</section>
<section class="flex flex-col gap-y-2">
	<h2 class="flex items-center gap-x-1 font-bold">
		Our Partners
		<IconChevronRightCircle class="inline align-middle" />
	</h2>
	<article class="flex gap-x-4 overflow-x-scroll">
		{#each { length: 10 }}
			<ImgPfp class="h-16" />
		{/each}
	</article>
</section>
<a class="w-max" href={`${base}/about`}>
	<footer class="flex flex-col gap-y-2">
		<h2
			class="[:hover>&]:bg-base-200 -mr-0.5 -ml-1 flex w-max items-center gap-x-1 pr-0.5 pl-1 font-bold"
		>
			About Us
			<IconChevronRightCircle class="inline align-middle" />
		</h2>
		<img
			class="w-32"
			alt="Sustainable Fashion"
			src="https://i.pinimg.com/236x/cc/5e/16/cc5e16c2078f1ccb0be7f6f9c330051d.jpg"
		/>
	</footer>
</a>
