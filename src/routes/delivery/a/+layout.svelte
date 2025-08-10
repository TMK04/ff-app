<script lang="ts">
	import IconParcelIcon from '~icons/logos/parcel-icon';

	import TopNav from '$lib/components/TopNav.svelte';

	let { children } = $props();
</script>

<TopNav>
	<div class="flex items-center justify-center gap-x-[0.4ch]">
		<IconParcelIcon /><span>ParcelPickup</span>
	</div>
</TopNav>
{@render children()}
