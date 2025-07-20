<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="bg-black">
	<div class="mx-auto h-screen max-w-sm overflow-scroll bg-white">
		{@render children()}
	</div>
</div>
