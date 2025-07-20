<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import type { MouseEventHandler } from 'svelte/elements';

	const onclick: MouseEventHandler<HTMLButtonElement> = async function (ev) {
		ev.preventDefault();
		await goto(`${base}/`);
	};
</script>

<div class="mx-8 flex min-h-full flex-col justify-center gap-y-6 text-center">
	<header class="my-2 text-4xl">Fashion Forward</header>
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

		<div class="divider my-8 text-gray-400">or</div>

		<section class="flex flex-wrap gap-2">
			<!-- TODO: oauth -->
			<!-- TODO: icons -->
			<button class="btn grow bg-gray-200 text-black" type="button" {onclick}
				>Continue with Google</button
			>
			<button class="btn grow bg-gray-200 text-black" type="button" {onclick}
				>Continue with Apple</button
			>
		</section>
	</main>
	<footer class="text-sm text-gray-400">
		By clicking continue, you agree to our
		<a class="font-bold text-gray-800" href={`${base}/tos`}>Terms of Service</a>
		and
		<a class="font-bold text-gray-800" href={`${base}/privacy`}>Privacy Policy</a>
	</footer>
</div>
