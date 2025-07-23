<script lang="ts">
	import '../app.css';

	import BottomNav from '$lib/components/BottomNav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Fashion Forward</title>
</svelte:head>

<div class="bg-neutral">
	<div class="bg-base-100 mx-auto flex h-dvh max-w-sm flex-col">
		<div class="flex h-0 grow flex-col overflow-scroll pb-8">
			{@render children()}
		</div>
		<BottomNav />
	</div>
</div>
