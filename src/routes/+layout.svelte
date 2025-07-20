<script lang="ts">
	import IconAccount from '~icons/mdi/account';
	import IconGamepadVariantOutline from '~icons/mdi/gamepad-variant-outline';
	import IconHanger from '~icons/mdi/hanger';
	import IconHome from '~icons/mdi/home';
	import IconLightbulbOnOutline from '~icons/mdi/lightbulb-on-outline';

	import { me } from '$lib/stores/me';
	import NavTab from '$lib/components/NavTab.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Fashion Forward</title>
</svelte:head>

<div class="bg-neutral">
	<div class="bg-base-100 relative mx-auto flex h-screen max-w-sm flex-col overflow-scroll">
		{@render children()}
		{#if $me.auth}
			<!-- Blank space to prevent navbar from blocking content -->
			<div class="h-16"></div>
			<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
			<nav
				class="border-base-300 absolute right-0 bottom-0 left-0 flex h-15 items-center justify-around gap-x-2 border-t p-2"
				role="tablist"
			>
				<NavTab Icon={IconHome} path="">Home</NavTab>
				<NavTab Icon={IconGamepadVariantOutline} path="challenge">Challenge</NavTab>
				<NavTab Icon={IconHanger} path="explore">Explore</NavTab>
				<NavTab Icon={IconLightbulbOnOutline} path="learn">Learn</NavTab>
				<NavTab Icon={IconAccount} path="profile">Profile</NavTab>
			</nav>
		{/if}
	</div>
</div>
