<script lang="ts">
	import IconHeart from '~icons/mdi/heart';

	import ChallengeEntry from '$lib/components/ChallengeEntry.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
</script>

<TopNav>Sustainability Fashion Challenge</TopNav>
<header class="mx-6 flex flex-col justify-center">
	<h2 class="mx-6 mb-3 text-center">
		This Month's Challenge Theme is<br /><span class="text-xl font-bold">Summer is in the air</span>
	</h2>
	<div class="skeleton mx-6 mb-4 aspect-[3/4]"></div>
	<p class="mb-6 text-center">
		This Month's Prize: $100 Levi's Gift Card<br />There will be 1 winner for every 250 participants
	</p>
	<button class="btn btn-primary mx-auto w-max">Sign Up</button>
</header>
<main class="mx-6 flex flex-col items-center">
	<h3 class="divider mt-12 mb-1 text-lg font-bold underline">Vote</h3>
	<aside class="custom--hearts">
		<figure
			class="bg-base-100/90 flex max-h-full flex-wrap-reverse justify-center gap-1.5 py-4 text-sm"
		>
			<figcaption class="grow text-end transition-[flex-grow]">1 of 3 hearts used</figcaption>
			<span class="stroke-neutral flex w-max justify-center transition-[width]">
				<IconHeart class="text-red-500" />
				<IconHeart class="text-red-200" />
				<IconHeart class="text-red-200" />
			</span>
		</figure>
	</aside>
	<ol class="flex w-full flex-wrap gap-8">
		{#each { length: 10 }}
			<ChallengeEntry />
		{/each}
	</ol>
</main>

<style lang="postcss">
	@reference "tailwindcss";

	.custom--hearts {
		@apply sticky top-0 mb-6 h-[4.75rem] w-full;
		container-type: scroll-state;

		@supports (container-type: scroll-state) {
			@container scroll-state(stuck: none) {
				> figure {
					> figcaption {
						@apply grow-0;
					}

					> span {
						@apply w-full;
					}
				}
			}
		}
	}
</style>
