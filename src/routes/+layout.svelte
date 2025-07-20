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

<div class="bg-black">
	<div class="relative mx-auto h-screen max-w-sm overflow-scroll bg-white">
		{@render children()}
		{#if $me.auth}
			<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
			<nav
				class="absolute right-0 bottom-0 left-0 flex h-16 items-center justify-around gap-x-2 border-t border-gray-400 p-2"
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
