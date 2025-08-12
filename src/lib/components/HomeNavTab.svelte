<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	import MaybeAuthA from './MaybeAuthA.svelte';

	import { base } from '$app/paths';
	import { page } from '$app/state';

	type TProps = HTMLAnchorAttributes & Required<Pick<HTMLAnchorAttributes, 'children'>>;
	const { children, href: _href, ...rest }: TProps = $props();

	const href = $derived(`${base}${_href}`);
	const active = $derived(RegExp(`^${href}(/.*|$)`).test(page.url.pathname));
</script>

<MaybeAuthA
	class={[
		'btn-badge gap-x-space',
		{
			'not-hover:bg-base-200 border-base-content/60': active
		}
	]}
	href={active ? `${base}/` : href}
	{...rest}
>
	{@render children()}
</MaybeAuthA>
