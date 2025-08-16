<script lang="ts">
	import IconHeart from '~icons/mdi/heart';

	import type { HTMLInputAttributes } from 'svelte/elements';

	export type TProps = Omit<HTMLInputAttributes, 'name' | 'type'>;

	const { class: _class, ...rest }: TProps = $props();
</script>

<input name="like" class={['hidden', _class]} type="checkbox" {...rest} />
<IconHeart
	class="stroke-neutral text-base-100 stroke-2 transition-colors [:checked+&]:text-red-500"
/>
