<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { me } from '$lib/stores/me';

	const onsubmit: EventHandler<SubmitEvent, HTMLFormElement> = async function (ev) {
		try {
			ev.preventDefault();
			if (!ev.currentTarget.checkValidity()) return;
			$me.auth = true;
			const redirect = page.url.searchParams.get('redirect');
			await goto(redirect || `${base}/`);
		} catch (e) {
			console.error('/profile/auth/login/+page.svelte onsubmit', e);
		}
	};
</script>

<div class="mx-8 mt-12 flex grow flex-col justify-center gap-y-6 text-center">
	<h1 class="font-cursive mb-4 text-5xl">Fashion Forward</h1>
	<main>
		<form {onsubmit}>
			<label class="mb-2 block">
				<header class="mb-4">
					<h2 class="text-large font-bold">Enter your password to login</h2>
				</header>
				<input
					name="email"
					class="input validator w-full"
					autocomplete="email webauthn"
					placeholder="email@domain.com"
					required
					type="email"
					value={page.url.searchParams.get('email')}
				/>
			</label>
			<label class="block">
				<input
					name="password"
					class="input validator w-full"
					autocomplete="current-password webauthn"
					placeholder="Password"
					required
					type="password"
					value="P@ssw0rd"
				/>
			</label>
			<!-- TODO: auth -->
			<button class="btn btn-neutral mt-3 w-full" type="submit">Login</button>
		</form>
	</main>
</div>
