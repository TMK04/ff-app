<script lang="ts">
	import IconChevronRightCircle from '~icons/mdi/chevron-right-circle';
	import IconHistory from '~icons/mdi/history';
	import IconListBoxOutline from '~icons/mdi/list-box-outline';

	import { base } from '$app/paths';
	import Carousel from '$lib/components/Carousel.svelte';
	import ProfilePic from '$lib/components/ProfilePic.svelte';
	import TopSearch from '$lib/components/TopSearch.svelte';
</script>

<TopSearch />
<main class="mx-3 flex flex-col gap-y-4">
	<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
	<nav class="flex gap-x-1.5" role="tablist">
		<button class="btn-badge" type="button">
			<IconHistory /> History
		</button>
		<button class="btn-badge" type="button">
			<IconListBoxOutline /> Pending Exchanges
		</button>
	</nav>
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
				<ProfilePic class="h-16" />
			{/each}
		</article>
	</section>
	<a href={`${base}/about`}>
		<footer class="flex flex-col gap-y-2">
			<h2 class="[:hover>&]:bg-base-200 flex w-max items-center gap-x-1 font-bold">
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
</main>
