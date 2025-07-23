<script lang="ts">
	import IconApple from '~icons/logos/apple';
	import IconGoogleIcon from '~icons/logos/google-icon';

	import type { MouseEventHandler } from 'svelte/elements';

	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { me } from '$lib/stores/me';

	const onclick: MouseEventHandler<HTMLButtonElement> = async function (ev) {
		try {
			ev.preventDefault();
			$me.auth = true;
			await goto(`${base}/`);
		} catch (e) {
			console.error('/profile/signup/+page.svelte onclick', e);
		}
	};
</script>

<div class="mx-8 mt-12 flex grow flex-col justify-center gap-y-6 text-center">
	<h1 class="font-cursive mb-4 text-5xl">Fashion Forward</h1>
	<main>
		<form>
			<label class="mb-4 block">
				<header class="mb-6">
					<h2 class="text-large font-bold">Create an account</h2>
					<p>Enter your email to sign up for this app</p>
				</header>
				<input
					name="email"
					class="input w-full"
					autocomplete="email webauthn"
					placeholder="email@domain.com"
					type="email"
				/>
			</label>
			<!-- TODO: auth -->
			<button class="btn btn-neutral w-full" {onclick} type="submit">Continue</button>
		</form>

		<div class="divider text-base-content/50 my-8">or</div>

		<section class="flex flex-wrap gap-2">
			<!-- TODO: oauth -->
			<button class="btn text-base-content bg-base-200 grow" {onclick} type="button">
				<IconGoogleIcon />Continue with Google</button
			>
			<button class="btn text-base-content bg-base-200 grow" {onclick} type="button">
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
</div>
