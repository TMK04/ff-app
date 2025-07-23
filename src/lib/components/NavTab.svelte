<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import type { Component, Snippet } from 'svelte';

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
	role="tab"
	class={[
		'flex flex-col items-center justify-center',
		{ 'font-bold': active, 'text-base-content/60': !active }
	]}
	{href}
>
	<Icon class="basis-full" />
	{@render children()}
</a>
