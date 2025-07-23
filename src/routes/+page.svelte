<script lang="ts">
	import IconChevronRightCircle from '~icons/mdi/chevron-right-circle';
	import IconHistory from '~icons/mdi/history';
	import IconListBoxOutline from '~icons/mdi/list-box-outline';

	import Search from '$lib/components/Search.svelte';
</script>

<div class="m-3 flex flex-col gap-y-4">
	<header class="flex flex-col gap-y-2">
		<Search />
		<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
		<nav role="tablist">
			<button class="btn btn-outline btn-sm border-base-300" type="button">
				<IconHistory /> History
			</button>
			<button class="btn btn-outline btn-sm border-base-300" type="button">
				<IconListBoxOutline /> Pending Exchanges
			</button>
		</nav>
	</header>
	<section class="relative">
		<div class="carousel rounded-lg">
			<div id="item1" class="carousel-item w-full">
				<img
					class="w-full"
					alt="1"
					src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
				/>
			</div>
			<div id="item2" class="carousel-item w-full">
				<img
					class="w-full"
					alt="2"
					src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
				/>
			</div>
			<div id="item3" class="carousel-item w-full">
				<img
					class="w-full"
					alt="3"
					src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
				/>
			</div>
			<div id="item4" class="carousel-item w-full">
				<img
					class="w-full"
					alt="4"
					src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
				/>
			</div>
		</div>
		<fieldset class="absolute right-0 bottom-1 left-0 mx-auto w-max">
			<a class="text-base-100" href="#item1">⋅</a>
			<a class="text-base-100" href="#item2">⋅</a>
			<a class="text-base-100" href="#item3">⋅</a>
			<a class="text-base-100" href="#item4">⋅</a>
		</fieldset>
	</section>
	<section class="flex flex-col gap-y-2">
		<h1 class="flex items-center gap-x-1 font-bold">
			Past Competitions
			<IconChevronRightCircle class="inline align-middle" />
		</h1>
		<article class="flex gap-x-4 overflow-x-scroll">
			{#each { length: 10 }}
				<figure>
					<div class="skeleton h-24 w-24 rounded"></div>
				</figure>
			{/each}
		</article>
	</section>
	<section class="flex flex-col gap-y-2">
		<h1 class="flex items-center gap-x-1 font-bold">
			Our Partners
			<IconChevronRightCircle class="inline align-middle" />
		</h1>
		<article class="flex gap-x-4 overflow-x-scroll">
			{#each { length: 10 }}
				<figure>
					<div class="skeleton h-16 w-16 rounded-full"></div>
				</figure>
			{/each}
		</article>
	</section>
	<section class="flex flex-col gap-y-2">
		<h1 class="flex items-center gap-x-1 font-bold">
			About Us
			<IconChevronRightCircle class="inline align-middle" />
		</h1>
		<figure>
			<div class="skeleton h-24 rounded"></div>
		</figure>
	</section>
</div>
