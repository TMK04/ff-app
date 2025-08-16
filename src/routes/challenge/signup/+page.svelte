<script lang="ts">
	import type { FormEventHandler } from 'svelte/elements';

	import ChallengeEntryPreview from '$lib/components/ChallengeEntryPreview.svelte';
	import TopNav from '$lib/components/TopNav.svelte';

	let img = $state('');
	let like_checked = $state(true);
	let title = $state('');

	const like_oninput: FormEventHandler<HTMLInputElement> = function () {
		like_checked = !like_checked;
	};
</script>

<TopNav>Sign Up for Challenge</TopNav>

<main class="mx-6 mt-4">
	<form>
		<section>
			<h2 class="divider mb-8 text-center text-lg font-bold underline">Preview</h2>
			<ChallengeEntryPreview
				{img}
				like_props={{ checked: like_checked, oninput: like_oninput }}
				{title}
			/>
		</section>
	</form>
</main>
