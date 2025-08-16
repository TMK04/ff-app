<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	import { challenge_store } from '$lib/stores/atom/challenge';
	import { me_store } from '$lib/stores/atom/me';
	import { pieces_store } from '$lib/stores/atom/pieces';
	import { users_store } from '$lib/stores/atom/users';

	const onclick: MouseEventHandler<HTMLButtonElement> = function () {
		challenge_store.reset();
		me_store.reset();
		pieces_store.reset();
		users_store.reset();
	};
</script>

<button class="btn-ghost btn text-base-100" {onclick} type="button">Reset</button>
