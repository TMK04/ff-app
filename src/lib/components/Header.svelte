<script lang="ts">
	import Back from './Back.svelte';

	const { children } = $props();
</script>

<header class="border-base-300 mb-4 border-b p-3">
	<div class="relative flex h-8 items-center">
		<div class="absolute top-0 bottom-0 left-0 h-8">
			<Back />
		</div>
		<h1 class="ms-11 me-6 grow text-center font-bold">{@render children()}</h1>
	</div>
</header>
