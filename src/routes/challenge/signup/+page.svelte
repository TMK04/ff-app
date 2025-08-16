<script lang="ts">
	import IconClose from '~icons/mdi/close';

	import type { EventHandler, FormEventHandler } from 'svelte/elements';

	import ChallengeEntryPreview from '$lib/components/ChallengeEntryPreview.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
	import { challenge_store, ChallengeId } from '$lib/stores/challenge';
	import { me } from '$lib/stores/me';

	let img_input_el: HTMLInputElement;
	let file_name = $state('');
	let img = $state('');
	let like_checked = $state(true);
	let title = $state('');

	const resetImg = function () {
		try {
			img_input_el.value = '';
			file_name = '';
			img = '';
		} catch (e) {
			console.error('/challenge/signup/+page.svelte resetImg', e);
		}
	};
	const img_onchange: FormEventHandler<HTMLInputElement> = function () {
		try {
			const files = img_input_el.files;
			if (files instanceof FileList && files.length === 1) {
				const file = files[0]!;
				file_name = file.name;
				const reader = new FileReader();
				reader.addEventListener('error', function (e) {
					console.error('/challenge/signup/+page.svelte img_onchange reader', e);
				});
				reader.addEventListener('loadend', function () {
					img = reader.result!.toString();
				});
				// doesn't need to be synchronous/awaited
				reader.readAsDataURL(file);
			} else {
				resetImg();
			}
		} catch (e) {
			console.error('/challenge/signup/+page.svelte img_onchange', e);
		}
	};
	const like_oninput: FormEventHandler<HTMLInputElement> = function () {
		like_checked = !like_checked;
	};

	const onsubmit: EventHandler<SubmitEvent, HTMLFormElement> = function (ev) {
		try {
			ev.preventDefault();
			const id = ChallengeId();
			challenge_store.update(function (challenge) {
				try {
					challenge[id] = {
						comment_count: 0,
						img,
						like_username_arr: like_checked ? [$me.username] : [],
						posted_ago: 'just now',
						title,
						username: $me.username
					};
				} catch (e) {
					console.error('/challenge/signup/+page.svelte onsubmit update', e);
				}
				return challenge;
			});
		} catch (e) {
			console.error('/challenge/signup/+page.svelte onsubmit', e);
		}
	};
</script>

<TopNav>Sign Up for Challenge</TopNav>

<main class="mx-6 mt-4">
	<form {onsubmit}>
		<section class="flex flex-wrap justify-center gap-3">
			<label
				class="join has-user-invalid:outline-error min-w-max grow outline-offset-2 has-user-invalid:outline-2"
			>
				<header class="join-item btn">Select image</header>
				<p class="join-item input">{file_name || 'No image selected'}</p>
				<input
					bind:this={img_input_el}
					name="img"
					class="hidden"
					accept="image/*"
					onchange={img_onchange}
					required
					type="file"
				/>
				<button class="btn join-item" onclick={resetImg} type="button"><IconClose /></button>
			</label>
			<input
				name="title"
				class="input min-w-2xs grow"
				maxlength={30}
				placeholder="Title"
				required
				type="text"
			/>
			<button class="btn btn-primary" type="submit">Submit Entry</button>
		</section>
		<aside>
			<h2 class="divider divider-primary mt-8 mb-6 text-center text-lg font-bold">Preview</h2>
			<ChallengeEntryPreview
				{img}
				like_props={{ checked: like_checked, oninput: like_oninput }}
				{title}
			/>
		</aside>
	</form>
</main>
