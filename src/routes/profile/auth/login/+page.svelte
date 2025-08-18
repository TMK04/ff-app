<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	import { building } from '$app/environment';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { me_store } from '$lib/stores/atom/me';
	import { users_store } from '$lib/stores/atom/users';

	const user = $derived(building ? '' : page.url.searchParams.get('user'));
	let user_el: HTMLInputElement;
	let pass_el: HTMLInputElement;

	const reportInvalidUserOrPass = $derived(function () {
		user_el.setCustomValidity('Invalid user or password');
		pass_el.setCustomValidity('Invalid user or password');
		pass_el.reportValidity();
	});

	const onsubmit: EventHandler<SubmitEvent, HTMLFormElement> = async function (ev) {
		try {
			ev.preventDefault();
			const form_data = new FormData(ev.currentTarget);
			const user = form_data.get('user');

			let found_username;
			for (const store_username in $users_store) {
				if (user === store_username || user === $users_store[store_username].email) {
					found_username = store_username;
					break;
				}
			}
			if (!found_username) {
				reportInvalidUserOrPass();
				return;
			}

			const pass = form_data.get('pass');
			const store_pass = $users_store[found_username].pass;
			if (pass !== store_pass) {
				reportInvalidUserOrPass();
				return;
			}

			$me_store = { auth: true, username: found_username };
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
			bind:this={user_el}
			name="user"
			class="input validator mb-2 w-full"
			autocomplete="username webauthn"
			placeholder="email@domain.com"
			required
			type="text"
			value={user}
		/>
		<input
			bind:this={pass_el}
			name="pass"
			class="input validator w-full"
			autocomplete="current-password webauthn"
			placeholder="Password"
			required
			type="password"
			value="P@ssw0rd"
		/>
		<button class="btn btn-neutral mt-3 w-full" type="submit">Login</button>
	</form>
</main>
