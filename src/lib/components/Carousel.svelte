<script lang="ts">
	import { writable } from 'svelte/store';

	const item_arr = [
		'https://www.potterclarkson.com/media/2770/istock-1363115810.jpg',
		'https://3dlook.ai/wp-content/uploads/2023/05/ideas_for_apparel_retailers_2-1.jpeg',
		'https://pg-online.leeds.ac.uk/wp-content/uploads/2022/08/Is-sustainable-fashion-really-sustainable.jpg',
		'https://edienetlive.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/5/innovation-snapshotsustainable-fashion-business-ideas-2020.jpg'
	];

	const el_obj = {} as {
		carousel: HTMLDivElement;
	} & { [K in `carousel-item${number}`]: HTMLImageElement };

	/**
	 * Clicking stops auto-slide interval
	 */
	const clicked = writable(false);
	const active_i = writable(0);

	function scrollTo(i: number) {
		el_obj['carousel'].scrollTo({ left: el_obj[`carousel-item${i}`].offsetLeft });
	}

	$effect(function () {
		const slide_interval_timeout = 5000;
		const min_active_i = 0;
		const max_active_i = item_arr.length - 1;
		const slide_interval = setInterval(function () {
			active_i.update(function (prev) {
				const curr = prev === max_active_i ? min_active_i : prev + 1;
				scrollTo(curr);
				return curr;
			});
		}, slide_interval_timeout);

		const unsubscribeClicked = clicked.subscribe(function (v) {
			if (v) clearInterval(slide_interval);
		});

		return function () {
			clearInterval(slide_interval);
			unsubscribeClicked();
		};
	});
</script>

<div class="relative">
	<div bind:this={el_obj['carousel']} class="carousel aspect-[3/1] rounded-lg">
		{#each item_arr as item, i (item)}
			<img
				bind:this={el_obj[`carousel-item${i}`]}
				class="carousel-item h-full w-full object-cover"
				alt={i.toString()}
				src={item}
			/>
		{/each}
	</div>
	<nav class="text-base-100 absolute right-0 bottom-1 left-0 mx-auto w-max text-3xl">
		{#each item_arr as item, i (item)}
			<button
				class={{
					'text-primary': $active_i === i
				}}
				onclick={function () {
					$clicked = true;
					$active_i = i;
					scrollTo(i);
				}}>⋅</button
			>
		{/each}
	</nav>
</div>
