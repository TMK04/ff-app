<script lang="ts">
	import IconAccountLock from '~icons/mdi/account-lock';

	import type { MouseEventHandler } from 'svelte/elements';

	import { me_store } from '$lib/stores/me';

	// TODO
	const onclick: MouseEventHandler<HTMLButtonElement> = function () {
		try {
			$me_store.auth = false;
			// Relevant pages like /profile have $effect to redirect to /profile/auth
		} catch (e) {
			console.error('/profile/logout/+page.svelte onclick', e);
		}
	};
</script>

<button class="btn btn-neutral" {onclick} type="button">
	<IconAccountLock />
	Logout
</button>
