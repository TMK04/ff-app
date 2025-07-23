<script lang="ts">
	import IconAccountLock from '~icons/mdi/account-lock';

	import type { MouseEventHandler } from 'svelte/elements';
	import { me } from '$lib/stores/me';

	// TODO
	const onclick: MouseEventHandler<HTMLButtonElement> = function () {
		try {
			$me.auth = false;
			// Relevant pages like /profile have $effect to redirect to /profile/signup
		} catch (e) {
			console.error('/profile/logout/+page.svelte onclick', e);
		}
	};
</script>

<button class="btn btn-neutral" type="button" {onclick}>
	<IconAccountLock />
	Logout
</button>
