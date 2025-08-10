<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	import { blank_gif } from '$lib/skeleton';

	type TProps = HTMLImgAttributes;

	const { class: _class, src, ...rest }: TProps = $props();
</script>

<img class={[_class, { skeleton: !src }]} src={src || blank_gif} {...rest} />
