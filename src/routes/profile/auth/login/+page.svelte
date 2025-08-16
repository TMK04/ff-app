<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	import { building } from '$app/environment';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { me_store } from '$lib/stores/atom/me';

	const onsubmit: EventHandler<SubmitEvent, HTMLFormElement> = async function (ev) {
		try {
			ev.preventDefault();
			$me_store.auth = true;
			const redirect = page.url.searchParams.get('redirect');
			await goto(redirect || `${base}/`);
		} catch (e) {
			console.error('/profile/auth/login/+page.svelte onsubmit', e);
		}
	};
</script>

<main>
	<form {onsubmit}>
		<h2 class="text-large mb-4 font-bold">Enter your password to login</h2>
		<input
			name="email"
			class="input validator mb-2 w-full"
			autocomplete="email webauthn"
			placeholder="email@domain.com"
			required
			type="email"
			value={building ? '' : page.url.searchParams.get('email')}
		/>
		<input
			name="password"
			class="input validator w-full"
			autocomplete="current-password webauthn"
			placeholder="Password"
			required
			type="password"
			value="P@ssw0rd"
		/>
		<!-- TODO: auth -->
		<button class="btn btn-neutral mt-3 w-full" type="submit">Login</button>
	</form>
</main>
