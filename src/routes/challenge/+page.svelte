<script lang="ts">
	import { base } from '$app/paths';
	import TopNav from '$lib/components/TopNav.svelte';
</script>

<TopNav>Sustainability Fashion Challenge</TopNav>
<header class="mx-6 mt-4 mb-3 text-center">
	<h2>
		This Month's Challenge Theme is<br /><span class="text-xl font-bold">Summer is in the air</span>
	</h2>
</header>
<main class="mx-6 flex flex-col justify-center gap-y-4">
	<div class="skeleton mx-6 aspect-[3/4]"></div>
	<p class="mb-2 text-center">
		This Month's Prize: $100 Levi's Gift Card<br />There will be 1 winner for every 250 participants
	</p>
	<a class="btn btn-primary mx-auto w-max" href={`${base}/challenge/signup`}>Sign Up</a>
	<a class="btn btn-primary mx-auto w-max" href={`${base}/challenge/vote`}>Vote</a>
</main>
