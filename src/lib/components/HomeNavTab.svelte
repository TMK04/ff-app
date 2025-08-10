<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	import { base } from '$app/paths';
	import { page } from '$app/state';

	type TProps = HTMLAnchorAttributes & Required<Pick<HTMLAnchorAttributes, 'children'>>;
	const { children, href: _href, ...rest }: TProps = $props();

	const href = $derived(`${base}${_href}`);
	const active = $derived(RegExp(`^${href}(/.*|$)`).test(page.url.pathname));
</script>

<a
	class={[
		'btn-badge',
		{
			'not-hover:bg-base-200 border-base-content/60': active
		}
	]}
	href={active ? `${base}/` : href}
	{...rest}
>
	{@render children()}
</a>
