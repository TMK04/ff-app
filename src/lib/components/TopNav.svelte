<script lang="ts">
	import Back from './Back.svelte';

	const { children } = $props();
</script>

<nav class="border-base-content/30 border-b p-3">
	<div class="relative flex h-8 items-center">
		<Back class="absolute top-0 bottom-0 left-0 h-full" />
		<h1 class="ms-11 me-6 grow text-center font-bold">{@render children()}</h1>
	</div>
</nav>
