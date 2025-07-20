<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import type { MouseEventHandler } from 'svelte/elements';
	import IconGoogleIcon from '~icons/logos/google-icon';
	import IconApple from '~icons/logos/apple';
	import { me } from '$lib/stores/me';

	$effect(function () {
		(async function () {
			try {
				if ($me.auth) {
					goto(`${base}/`);
				}
			} catch (e) {
				console.error('/signup/+page.svelte $effect`)', e);
			}
		})();
	});

	const onclick: MouseEventHandler<HTMLButtonElement> = async function (ev) {
		try {
			ev.preventDefault();
			$me.auth = true;
		} catch (e) {
			console.error('/signup/+page.svelte onclick', e);
		}
	};
</script>

<div class="mx-8 flex min-h-full flex-col justify-center gap-y-6 text-center">
	<header class="font-cursive my-2 text-4xl">Fashion Forward</header>
	<main>
		<form>
			<label class="mb-4 block">
				<header class="mb-6">
					<h1 class="text-large font-bold">Create an account</h1>
					<p>Enter your email to sign up for this app</p>
				</header>
				<input
					class="input w-full"
					name="email"
					autocomplete="email webauthn"
					placeholder="email@domain.com"
					type="email"
				/>
			</label>
			<!-- TODO: auth -->
			<button class="btn btn-neutral w-full" type="submit" {onclick}>Continue</button>
		</form>

		<div class="divider text-base-content/50 my-8">or</div>

		<section class="flex flex-wrap gap-2">
			<!-- TODO: oauth -->
			<button class="btn text-base-content bg-base-200 grow" type="button" {onclick}>
				<IconGoogleIcon />Continue with Google</button
			>
			<button class="btn text-base-content bg-base-200 grow" type="button" {onclick}>
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
