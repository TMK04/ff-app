<script lang="ts">
	import TopSearch from '$lib/components/TopSearch.svelte';

	const article_arr: { img: string; title: string; url: string }[] = [
		{
			img: 'https://i.ytimg.com/vi/1ZuSimfaIaU/maxresdefault.jpg',
			title:
				"10 Winter Wardrobe Essentials You Can't Live Without! ❄️ | Must-Have Basics for Cold Weather 2024",
			url: 'https://youtu.be/1ZuSimfaIaU'
		},
		{
			img: 'https://i.ytimg.com/vi/PM0TUQi2xZY/maxresdefault.jpg',
			title:
				'Clothes to make out of old jeans || 100 Upcycled Jean Ideas || Thrift Flip Sewing Projects',
			url: 'https://youtu.be/PM0TUQi2xZY'
		},
		{
			img: 'https://i.ytimg.com/vi/tLfNUD0-8ts/maxresdefault.jpg',
			title: 'The true cost of fashion',
			url: 'https://youtu.be/tLfNUD0-8ts'
		},
		{
			img: 'https://i.ytimg.com/vi/Ko_BZhIpI1Q/maxresdefault.jpg',
			title: "Fashion's toxic threads",
			url: 'https://youtu.be/Ko_BZhIpI1Q'
		}
	];
	const video_arr: { img: string; title: string; url: string }[] = [
		{
			img: 'https://www.plasticreimagined.org/hubfs/dan-lewis-ZAETpF4MThg-unsplash.jpg',
			title: 'Upcycling Defined: A Creative Approach to Sustainable Living',
			url: 'https://www.plasticreimagined.org/articles/upcycling-explained-4-ways-it-can-help-the-planet'
		},
		{
			img: 'https://r.fashionunited.com/WcJz4VEvVpOCNYEBQFQifLhK5q1l7MM5toP_zb3ZOs8/resize:fit:1200:630:0/gravity:ce/quality:70/aHR0cHM6Ly9mYXNoaW9udW5pdGVkLmNvbS9pbWcvdXBsb2FkLzIwMjMvMDgvMzEvdmFuLWRlci1rZW1wLWhjLWYyMy0wMTItaDlpZnpzZnQtMjAyMy0wNy0xNy1scHd5eW12OC0yMDIzLTA4LTMxLmpwZWc.jpeg',
			title: "Making something new from something existing is ' in ': This is upcycling",
			url: 'https://fashionunited.com/news/background/making-something-new-from-something-existing-is-in-this-is-upcycling/2024010857698'
		},
		{
			img: 'https://earth.org/wp-content/uploads/2022/12/Leather-Waste-1-Chin-Leong-Teo-1024x683-1.jpg',
			title: 'The Environmental Impact of Fast Fashion, Explained',
			url: 'https://earth.org/fast-fashions-detrimental-effect-on-the-environment'
		},
		{
			img: 'https://images.squarespace-cdn.com/content/v1/5981c7129f7456741cde6662/1556618222964-21XGK39SKTNFMVMBEM5W/logo_sustain_sologrey2.png?format=1500w',
			title: 'How can we reduce our Fashion Environmental Impact?',
			url: 'https://www.sustainyourstyle.org/en/reducing-our-impact'
		}
	];
</script>

<TopSearch />

<main class="mx-3 mt-3">
	<h1 class="mb-4 text-lg font-bold">Courses & Videos</h1>
	<section class="mb-6 flex gap-4 overflow-x-scroll">
		{#each video_arr as { img, title, url } (url)}
			<a href={url} target="_blank">
				<figure class="w-32">
					<img class="aspect-square object-cover" alt={title} src={img} />
					<figcaption class="h-lh overflow-hidden overflow-ellipsis whitespace-nowrap">
						{title}
					</figcaption>
				</figure>
			</a>
		{/each}
	</section>
	<section class="flex flex-wrap gap-4">
		{#each article_arr as { img, title, url } (url)}
			<a href={url} target="_blank">
				<figure class="aspect-video w-full">
					<img class="h-full w-full object-cover" alt={title} src={img} />
				</figure>
			</a>
		{/each}
	</section>
</main>
