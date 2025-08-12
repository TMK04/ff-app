<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Logout from '$lib/components/Logout.svelte';
	import PendingExchanges from '$lib/components/PendingExchanges.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
	import { me } from '$lib/stores/me';

	$effect(function () {
		if (!$me.auth) {
			(async function () {
				try {
					await goto(`${base}/profile/auth`);
				} catch (e) {
					console.error('/profile/+page.svelte $effect`)', e);
				}
			})();
		}
	});
</script>

<TopNav>Profile</TopNav>
<main class="mx-3 mt-3">
	<section class="mb-9">
		<h2 class="mb-3 text-xl font-bold">Pending Exchanges</h2>
		<PendingExchanges />
	</section>
	<Logout />
</main>
