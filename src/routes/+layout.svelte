<script lang="ts">
	import IconAccount from '~icons/mdi/account';
	import IconAccountKey from '~icons/mdi/account-key';
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
	<div class="bg-base-100 mx-auto flex h-dvh max-w-sm flex-col">
		<div class="flex h-0 grow flex-col overflow-scroll pb-8">
			{@render children()}
		</div>
		<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
		<nav
			class="border-base-300 grid h-15 auto-cols-fr grid-flow-col grid-rows-1 gap-x-2 border-t p-2"
			role="tablist"
		>
			<NavTab Icon={IconHome} path="">Home</NavTab>
			<NavTab Icon={IconGamepadVariantOutline} path="challenge">Challenge</NavTab>
			<NavTab Icon={IconHanger} path="explore">Explore</NavTab>
			<NavTab Icon={IconLightbulbOnOutline} path="learn">Learn</NavTab>
			<NavTab
				Icon={$me.auth ? IconAccount : IconAccountKey}
				path={$me.auth ? 'profile' : 'profile/signup'}>Profile</NavTab
			>
		</nav>
	</div>
</div>
