<script lang="ts">
	import IconAccount from '~icons/mdi/account';
	import IconAccountKey from '~icons/mdi/account-key';
	import IconGamepadVariantOutline from '~icons/mdi/gamepad-variant-outline';
	import IconHanger from '~icons/mdi/hanger';
	import IconHome from '~icons/mdi/home';
	import IconLightbulbOnOutline from '~icons/mdi/lightbulb-on-outline';

	import BottomNavTab from '$lib/components/BottomNavTab.svelte';
	import { me_store } from '$lib/stores/me';
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
<nav
	class="border-base-content/30 grid h-15 auto-cols-fr grid-flow-col grid-rows-1 gap-x-2 border-t p-2"
	role="tablist"
>
	<BottomNavTab Icon={IconHome} path="">Home</BottomNavTab>
	<BottomNavTab Icon={IconGamepadVariantOutline} path="challenge">Challenge</BottomNavTab>
	<BottomNavTab Icon={IconHanger} path="explore">Explore</BottomNavTab>
	<BottomNavTab Icon={IconLightbulbOnOutline} path="learn">Learn</BottomNavTab>
	<BottomNavTab
		Icon={$me_store.auth ? IconAccount : IconAccountKey}
		path={$me_store.auth ? 'profile' : 'profile/auth'}>Profile</BottomNavTab
	>
</nav>
