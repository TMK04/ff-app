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
					alt="1"
					src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
					class="w-full"
				/>
			</div>
			<div id="item2" class="carousel-item w-full">
				<img
					alt="2"
					src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
					class="w-full"
				/>
			</div>
			<div id="item3" class="carousel-item w-full">
				<img
					alt="3"
					src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
					class="w-full"
				/>
			</div>
			<div id="item4" class="carousel-item w-full">
				<img
					alt="4"
					src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
					class="w-full"
				/>
			</div>
		</div>
		<fieldset class="absolute right-0 bottom-1 left-0 mx-auto w-max">
			<a href="#item1" class="text-base-100">⋅</a>
			<a href="#item2" class="text-base-100">⋅</a>
			<a href="#item3" class="text-base-100">⋅</a>
			<a href="#item4" class="text-base-100">⋅</a>
		</fieldset>
	</section>
	<section>
		<h1 class="flex items-center gap-x-1 font-bold">
			Past Competitions
			<IconChevronRightCircle class="inline align-middle" />
		</h1>
	</section>
	<section>
		<h1 class="flex items-center gap-x-1 font-bold">
			Our Partners
			<IconChevronRightCircle class="inline align-middle" />
		</h1>
	</section>
	<section>
		<h1 class="flex items-center gap-x-1 font-bold">
			About Us
			<IconChevronRightCircle class="inline align-middle" />
		</h1>
	</section>
</div>
