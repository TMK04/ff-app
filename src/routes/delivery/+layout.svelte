<script lang="ts">
	import IconParcelIcon from '~icons/logos/parcel-icon';

	import TopNav from '$lib/components/TopNav.svelte';

	let { children } = $props();
</script>

<TopNav>
	<div class="gap-x-space flex items-center justify-center">
		<IconParcelIcon /><span>ParcelPickup</span>
	</div>
</TopNav>
{@render children()}
