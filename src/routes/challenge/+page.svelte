<script lang="ts">
	import { base } from '$app/paths';
	import MaybeAuthA from '$lib/components/MaybeAuthA.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
	import { me_has_entry } from '$lib/stores/derived/challenge__me';
</script>

<TopNav>Sustainability Fashion Challenge</TopNav>
<header class="mx-6 mt-4 mb-3 text-center">
	<h2>
		This Month's Challenge Theme is<br /><span class="text-xl font-bold">Summer is in the air</span>
	</h2>
</header>
<main class="mx-6 flex flex-col justify-center gap-y-4">
	<img
		class="mx-6 aspect-[3/4]"
		alt="Summer is in the air"
		src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRUJSwgwZYhtPkgBDKH8NnyCfbFuTeb4_yQ9GVEwoezAK5sqeQ"
	/>
	<p class="mb-2 text-center">
		This Month's Prize: $100 Levi's Gift Card<br />There will be 1 winner for every 250 participants
	</p>
	{#if !$me_has_entry}
		<MaybeAuthA class="btn btn-primary mx-auto w-max" href={`${base}/challenge/signup`}>
			Sign Up
		</MaybeAuthA>
	{/if}
	<MaybeAuthA class="btn btn-primary mx-auto w-max" href={`${base}/challenge/vote`}>
		Vote
	</MaybeAuthA>
</main>
