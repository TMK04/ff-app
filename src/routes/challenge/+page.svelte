<script lang="ts">
	import { base } from '$app/paths';
	import ChallengeEntry from '$lib/components/ChallengeEntry.svelte';
	import Hearts from '$lib/components/Hearts.svelte';
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
	<a class="btn btn-primary mx-auto w-max" href={`${base}/challenge/signup`}>Sign Up</a>
</header>
<main class="mx-6 flex flex-col items-center">
	<h3 class="divider mt-12 mb-1 text-lg font-bold underline">Vote</h3>
	<Hearts />
	<ol class="flex w-full flex-wrap gap-8">
		{#each { length: 10 }}
			<ChallengeEntry comment_count={4} like_count={21} posted_ago="3mins ago" username="Daniel" />
		{/each}
	</ol>
</main>
