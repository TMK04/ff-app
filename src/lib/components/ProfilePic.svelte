<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	import { blank_gif } from '$lib/skeleton';

	type TProps = HTMLImgAttributes;

	const { alt, class: _class, src, ...rest }: TProps = $props();
</script>

<img
	class={['aspect-square rounded-full', _class, { skeleton: !src }]}
	alt={alt || 'pfp'}
	src={src || blank_gif}
	{...rest}
/>
