<script lang="ts">
	import type { Snippet } from 'svelte';

	type TProps = {
		children: Snippet;
	};
	const { children }: TProps = $props();
</script>

<div class="mx-8 mt-12 flex grow flex-col justify-center gap-y-6 text-center">
	<h1 class="font-cursive mb-4 text-5xl">Fashion Forward</h1>
	{@render children()}
</div>
