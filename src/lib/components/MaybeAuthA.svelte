<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	import { base } from '$app/paths';
	import { me_store } from '$lib/stores/atom/me';

	type TProps = HTMLAnchorAttributes & Required<Pick<HTMLAnchorAttributes, 'children'>>;

	const { href, children, ...rest }: TProps = $props();

	const auth_href = $derived.by(function () {
		// eslint-disable-next-line svelte/prefer-svelte-reactivity
		const params = new URLSearchParams();
		if (href) params.set('redirect', href);
		return `${base}/profile/auth?${params}`;
	});
</script>

<a href={$me_store.auth ? href : auth_href} {...rest}>{@render children()}</a>
