<script lang="ts">
	import IconChevronLeft from '~icons/mdi/chevron-left';

	import type { ClassValue, MouseEventHandler } from 'svelte/elements';

	type TProps = {
		class?: ClassValue;
	};

	const { class: _class = '' }: TProps = $props();

	const onclick: MouseEventHandler<HTMLButtonElement> = async function () {
		try {
			history.back();
		} catch (e) {
			console.error('Back.svelte onclick', e);
		}
	};
</script>

<button class={['btn btn-ghost px-0', _class]} {onclick}>
	<IconChevronLeft height="100%" width="100%" />
</button>
