<script lang="ts">
	import { SvelteURLSearchParams } from 'svelte/reactivity';

	import type { HTMLAnchorAttributes } from 'svelte/elements';

	import { base } from '$app/paths';
	import { me } from '$lib/stores/me';

	type TProps = HTMLAnchorAttributes & Required<Pick<HTMLAnchorAttributes, 'children'>>;

	const { href, children, ...rest }: TProps = $props();

	const auth_href = $derived.by(function () {
		const params = new SvelteURLSearchParams();
		if (href) params.set('redirect', href);
		return `${base}/profile/auth?${params}`;
	});
</script>

<a href={$me.auth ? href : auth_href} {...rest}>{@render children()}</a>
