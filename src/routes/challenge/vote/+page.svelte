<script lang="ts">
	import ChallengeEntry from '$lib/components/ChallengeEntry.svelte';
	import Hearts from '$lib/components/Hearts.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
	import { challenge_store } from '$lib/stores/challenge';
	import { me } from '$lib/stores/me';

	const hearts_used = $derived.by(function () {
		let used = 0;
		for (const challenge_entry_id in $challenge_store) {
			const challenge_entry = $challenge_store[challenge_entry_id];
			if (challenge_entry.like_username_arr.includes($me.username)) {
				used += 1;
			}
		}
		return used;
	});
</script>

<TopNav>Vote</TopNav>
<main class="mx-6 flex flex-col items-center">
	<Hearts used={hearts_used} />
	<ol class="flex w-full flex-wrap gap-8">
		{#each Object.keys($challenge_store) as challenge_entry_id (challenge_entry_id)}
			<ChallengeEntry id={challenge_entry_id} {...$challenge_store[challenge_entry_id]} />
		{/each}
	</ol>
</main>
