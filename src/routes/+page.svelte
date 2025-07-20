<script lang="ts">
	import IconHistory from '~icons/mdi/history';
	import IconListBoxOutline from '~icons/mdi/list-box-outline';
	import Search from '$lib/components/Search.svelte';
</script>

<div class="m-3">
	<Search />
	<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
	<nav class="mb-3" role="tablist">
		<button class="btn btn-outline btn-sm border-base-300" type="button">
			<IconHistory /> History
		</button>
		<button class="btn btn-outline btn-sm border-base-300" type="button">
			<IconListBoxOutline /> Pending Exchanges
		</button>
	</nav>
</div>
