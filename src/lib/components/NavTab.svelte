<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	import { base } from '$app/paths';
	import { page } from '$app/state';

	type TProps = {
		Icon: Component;
		children: Snippet;
		path: string;
	};

	const { Icon, children, path }: TProps = $props();

	const href = $derived(`${base}/${path}`);
	const active = $derived(RegExp(`^${href}(/.*|$)`).test(page.url.pathname));
</script>

<a
	class={[
		'flex flex-col items-center justify-center',
		{ 'font-bold': active, 'text-base-content/60': !active }
	]}
	{href}
	role="tab"
>
	<Icon class="basis-full" />
	{@render children()}
</a>
