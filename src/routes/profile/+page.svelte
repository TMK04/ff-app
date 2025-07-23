<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Logout from '$lib/components/Logout.svelte';
	import { me } from '$lib/stores/me';

	$effect(function () {
		if (!$me.auth) {
			(async function () {
				try {
					await goto(`${base}/profile/signup`);
				} catch (e) {
					console.error('/profile/+page.svelte $effect`)', e);
				}
			})();
		}
	});
</script>

<Logout />
