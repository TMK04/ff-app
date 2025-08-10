<script lang="ts">
	import IconHistory from '~icons/mdi/history';
	import IconListBoxOutline from '~icons/mdi/list-box-outline';

	import type { Snippet } from 'svelte';

	import HomeNavTab from '$lib/components/HomeNavTab.svelte';
	import TopSearch from '$lib/components/TopSearch.svelte';

	type TProps = {
		children: Snippet;
	};
	const { children }: TProps = $props();
</script>

<TopSearch />
<main class="mx-3 flex flex-col gap-y-4">
	<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
	<nav class="flex gap-x-1.5" role="tablist">
		<HomeNavTab href="/history">
			<IconHistory /> History
		</HomeNavTab>
		<HomeNavTab href="/swaps">
			<IconListBoxOutline /> Pending Swaps
		</HomeNavTab>
	</nav>
	{@render children()}
</main>
