<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/state';

	const id = page.params['id'];

	const onsubmit: EventHandler<SubmitEvent, HTMLFormElement> = async function (ev) {
		try {
			ev.preventDefault();
			const form_data = new FormData(ev.currentTarget);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			await goto(`${base}/delivery/${id}/pickup?${new URLSearchParams(form_data as any)}`);
		} catch (e) {
			console.error(`/delivery/${id}/options/+page.svelte onsubmit`, e);
		}
	};
</script>

<form class="mx-3 mt-6" {onsubmit}>
	<header class="mb-6 text-xl font-bold">
		<h2>Choose Delivery Options</h2>
	</header>
	<main>
		<fieldset class="tabs tabs-box mx-1 mb-3 flex-col gap-y-2">
			<label class="tab flex h-max flex-col items-start p-2">
				<input name="delivery_option" checked required type="radio" value="f2f" />
				<p class="mb-1 text-start font-bold">F2F Meet Up</p>
				<p class="ms-1 text-start text-sm">Cost: Free — No charges</p>
			</label>
			<label class="tab flex h-max flex-col items-start p-2">
				<input name="delivery_option" type="radio" value="basic" />
				<p class="mb-1 text-start font-bold">Basic Delivery SingPost Delivery</p>
				<p class="ms-1 text-start text-sm">
					Cost: $1.50 — Delivery within 2 days without tracking features
				</p>
			</label>
			<label class="tab flex h-max flex-col items-start p-2">
				<input name="delivery_option" type="radio" value="tracked" />
				<p class="mb-1 text-start font-bold">Tracked SingPost Delivery</p>
				<p class="ms-1 text-start text-sm">
					Cost: $3 — Delivery within 2 days with tracking features
				</p>
			</label>
		</fieldset>
		<button class="btn btn-primary mt-6 w-full" type="submit">Confirm</button>
	</main>
</form>
