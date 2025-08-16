<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	import ImgMaybeSkeleton from './ImgMaybeSkeleton.svelte';

	type TProps = HTMLImgAttributes;

	const { alt, class: _class, src, ...rest }: TProps = $props();
</script>

<ImgMaybeSkeleton
	class={['aspect-square rounded-full object-cover', _class]}
	alt={alt || 'pfp'}
	{src}
	{...rest}
/>
