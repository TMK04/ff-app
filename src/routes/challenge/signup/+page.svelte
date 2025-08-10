<script lang="ts">
	import ChallengeEntry from '$lib/components/ChallengeEntry.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
</script>

<TopNav>Sign Up for Challenge</TopNav>

<main class="mx-6 mt-4">
	<section>
		<h2 class="divider mb-8 text-center text-lg font-bold underline">Preview</h2>
		<ChallengeEntry posted_ago="just now" />
	</section>
</main>
