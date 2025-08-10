<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Logout from '$lib/components/Logout.svelte';
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

<Logout />
