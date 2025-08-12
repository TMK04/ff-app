<script lang="ts">
	import IconListBoxOutline from '~icons/mdi/list-box-outline';

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
		<h2 class="gap-x-space mb-3 flex items-center text-xl font-bold">
			<IconListBoxOutline /><span>Pending Exchanges</span>
		</h2>
		<PendingExchanges />
	</section>
	<Logout />
</main>
