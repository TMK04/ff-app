<script lang="ts">
	import IconApple from '~icons/logos/apple';
	import IconGoogleIcon from '~icons/logos/google-icon';

	import type { EventHandler } from 'svelte/elements';

	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	const onsubmit: EventHandler<SubmitEvent, HTMLFormElement> = async function (ev) {
		try {
			ev.preventDefault();
			if (!ev.currentTarget.checkValidity()) return;
			await goto(
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				`${base}/profile/auth/login?${new URLSearchParams(new FormData(ev.currentTarget) as any)}`
			);
		} catch (e) {
			console.error('/profile/auth/+page.svelte onsubmit', e);
		}
	};
</script>

<div class="mx-8 mt-12 flex grow flex-col justify-center gap-y-6 text-center">
	<h1 class="font-cursive mb-4 text-5xl">Fashion Forward</h1>
	<main>
		<form {onsubmit}>
			<label class="block">
				<header class="mb-4">
					<h2 class="text-large font-bold">Enter your email to continue</h2>
				</header>
				<input
					name="email"
					class="input validator w-full"
					autocomplete="email webauthn"
					placeholder="email@domain.com"
					required
					type="email"
					value="janedoe@mail.com"
				/>
			</label>
			<!-- TODO: auth -->
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
</div>
