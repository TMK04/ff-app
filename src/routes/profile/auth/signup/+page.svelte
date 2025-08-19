<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	import { building } from '$app/environment';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { me_store } from '$lib/stores/atom/me';
	import { pfp_default, users_store } from '$lib/stores/atom/users';

	let username = $state(building ? '' : (page.url.searchParams.get('username') as string));
	let email = $state(building ? '' : (page.url.searchParams.get('email') as string));
	let pass = $state('');

	let username_el: HTMLInputElement;
	let email_el: HTMLInputElement;
	let pass0_el: HTMLInputElement;
	let pass1_el: HTMLInputElement;

	const onsubmit: EventHandler<SubmitEvent, HTMLFormElement> = async function (ev) {
		try {
			ev.preventDefault();
			let invalid = false;
			if (username in $users_store) {
				username_el.setCustomValidity('Username taken');
				invalid = true;
			}
			if (pass0_el.value !== pass1_el.value) {
				pass0_el.setCustomValidity('Passwords do not match');
				pass1_el.setCustomValidity('Passwords do not match');
				invalid = true;
			}
			if (invalid) {
				ev.currentTarget.reportValidity();
				return;
			}

			$users_store[username] = {
				email,
				pass,
				pfp: pfp_default
			};
			$me_store = { auth: true, username: username_el.value };
			const redirect = page.url.searchParams.get('redirect');
			await goto(redirect || `${base}/`);
		} catch (e) {
			console.error('/profile/auth/signup/+page.svelte onsubmit', e);
		}
	};
</script>

<main>
	<form class="flex flex-wrap justify-center gap-y-2" {onsubmit}>
		<h2 class="text-large mb-2 font-bold">Create an account</h2>
		<input
			bind:this={username_el}
			name="username"
			class="input validator w-full"
			autocomplete="username webauthn"
			placeholder="Username"
			required
			type="text"
			bind:value={username}
		/>
		<input
			bind:this={email_el}
			name="email"
			class="input validator mb-1 w-full"
			autocomplete="email webauthn"
			placeholder="email@domain.com"
			required
			type="email"
			bind:value={email}
		/>
		<input
			bind:this={pass0_el}
			name="pass0"
			class="input validator w-full"
			autocomplete="new-password webauthn"
			placeholder="Password"
			required
			type="password"
			bind:value={pass}
		/>
		<input
			bind:this={pass1_el}
			name="pass1"
			class="input validator w-full"
			autocomplete="new-password webauthn"
			placeholder="Confirm Password"
			required
			type="password"
		/>
		<button class="btn btn-neutral mt-3 w-full" type="submit">Sign Up</button>
	</form>
</main>
