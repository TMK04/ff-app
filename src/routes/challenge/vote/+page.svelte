<script lang="ts">
	import ChallengeEntry from '$lib/components/ChallengeEntry.svelte';
	import Hearts from '$lib/components/Hearts.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
</script>

<TopNav>Vote</TopNav>
<main class="mx-6 flex flex-col items-center">
	<Hearts />
	<ol class="flex w-full flex-wrap gap-8">
		{#each { length: 10 }}
			<ChallengeEntry comment_count={4} like_count={21} posted_ago="3mins ago" username="Daniel" />
		{/each}
	</ol>
</main>
