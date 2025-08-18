<script lang="ts">
	import IconApple from '~icons/logos/apple';
	import IconGoogleIcon from '~icons/logos/google-icon';

	import type { EventHandler } from 'svelte/elements';

	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { email_regex } from '$lib/regex/email';
	import { users_store } from '$lib/stores/atom/users';

	const onsubmit: EventHandler<SubmitEvent, HTMLFormElement> = async function (ev) {
		try {
			ev.preventDefault();
			const form_data = new FormData(ev.currentTarget);
			const user = form_data.get('user')!.toString();

			for (const store_username in $users_store) {
				if (user === store_username || user === $users_store[store_username].email) {
					page.url.searchParams.set('user', user);
					await goto(`${base}/profile/auth/login?${page.url.searchParams}`);
					return;
				}
			}

			page.url.searchParams.set(email_regex.test(user) ? 'email' : 'username', user);
			await goto(`${base}/profile/auth/signup?${page.url.searchParams}`);
		} catch (e) {
			console.error('/profile/auth/+page.svelte onsubmit', e);
		}
	};
</script>

<main>
	<form {onsubmit}>
		<label class="block">
			<h2 class="mb-4 font-bold">Enter your email to continue</h2>
			<input
				name="user"
				class="input validator w-full"
				autocomplete="username webauthn"
				placeholder="email@domain.com"
				required
				type="text"
				value="janedoe@mail.com"
			/>
		</label>
		<button class="btn btn-neutral mt-3 w-full" type="submit">Continue</button>
	</form>

	<div class="divider text-base-content/50 my-8">or</div>

	<section class="flex flex-wrap gap-2">
		<!-- TODO: oauth -->
		<button class="btn text-base-content bg-base-200 grow" disabled type="button">
			<IconGoogleIcon />Continue with Google</button
		>
		<button class="btn text-base-content bg-base-200 grow" disabled type="button">
			<IconApple />Continue with Apple</button
		>
	</section>
</main>
<footer class="text-base-content/50 text-sm">
	By clicking continue, you agree to our
	<a class="link-neutral link-hover font-bold" href={`${base}/tos`}>Terms of Service</a>
	and
	<a class="link-neutral link-hover font-bold" href={`${base}/privacy`}>Privacy Policy</a>
</footer>
