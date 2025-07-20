<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import type { Component, Snippet } from 'svelte';

	type TProps = {
		Icon: Component;
		children: Snippet;
		path: string;
	};

	const { Icon, children, path } = $props();

	const href = $derived(`${base}/${path}`);
	const active = $derived(page.url.pathname === href);
</script>

<a
	role="tab"
	class={[
		'flex grow basis-0 flex-wrap items-center justify-center',
		{ 'font-bold': active, 'text-gray-500': !active }
	]}
	{href}
>
	<Icon class="basis-full" />
	{@render children()}
</a>
