<script lang="ts">
	import IconListBoxOutline from '~icons/mdi/list-box-outline';

	import type { FormEventHandler } from 'svelte/elements';

	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Logout from '$lib/components/Logout.svelte';
	import PendingExchanges from '$lib/components/PendingExchanges.svelte';
	import ResetStores from '$lib/components/ResetStores.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
	import { me_store } from '$lib/stores/atom/me';
	import { users_store } from '$lib/stores/atom/users';

	const pfp_onchange: FormEventHandler<HTMLInputElement> = function (ev) {
		try {
			const files = ev.currentTarget.files;
			if (files instanceof FileList && files.length === 1) {
				const file = files[0]!;
				const reader = new FileReader();
				reader.addEventListener('error', function (e) {
					console.error('/profile/+page.svelte pfp_onchange reader', e);
				});
				reader.addEventListener('loadend', function () {
					$users_store[$me_store.username].pfp = reader.result!.toString();
				});
				// doesn't need to be synchronous/awaited
				reader.readAsDataURL(file);
			}
		} catch (e) {
			console.error('/profile/+page.svelte pfp_onchange', e);
		}
	};
	$effect(function () {
		if (!$me_store.auth) {
			(async function () {
				try {
					await goto(`${base}/profile/auth`);
				} catch (e) {
					console.error('/profile/+page.svelte $effect`)', e);
				}
			})();
		}
	});
</script>

<TopNav>Profile</TopNav>
<main class="mx-3 mt-3">
	<form>
		<label class="mx-auto mb-2 block aspect-square w-32">
			<input name="pfp" class="hidden" onchange={pfp_onchange} type="file" />
			<img
				class="h-full w-full rounded-full object-cover"
				alt={$me_store.username}
				src={$users_store[$me_store.username].pfp}
			/>
		</label>
		<h2 class="text-center text-2xl font-bold">{$me_store.username}</h2>
	</form>
	<section class="mb-9">
		<h2 class="divider mt-9 mb-8 text-xl font-bold">
			<span class="gap-x-space flex items-center"
				><IconListBoxOutline /><span>Pending Exchanges</span></span
			>
		</h2>
		<PendingExchanges />
	</section>
	<Logout />
	<ResetStores />
</main>
