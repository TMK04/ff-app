<script lang="ts">
	import IconChevronLeft from '~icons/mdi/chevron-left';

	import type { MouseEventHandler } from 'svelte/elements';

	const onclick: MouseEventHandler<HTMLButtonElement> = async function () {
		try {
			history.back();
		} catch (e) {
			console.error('Back.svelte onclick', e);
		}
	};
</script>

<button class="btn btn-ghost h-full w-full px-0" {onclick}>
	<IconChevronLeft class="aspect-square" height="100%" width="100%" />
</button>
