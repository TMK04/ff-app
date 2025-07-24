<script lang="ts">
	import IconHeart from '~icons/mdi/heart';
</script>

<aside class="custom--hearts pointer-events-none sticky top-0 h-[4.75rem] w-full">
	<figure
		class="bg-base-100/90 pointer-events-auto flex max-h-full flex-wrap-reverse justify-center gap-1.5 py-4 text-sm"
	>
		<figcaption class="grow text-end transition-[flex-grow]">1 of 3 hearts used</figcaption>
		<span class="stroke-neutral flex w-max justify-center transition-[width]">
			<IconHeart class="text-red-500" />
			<IconHeart class="text-red-200" />
			<IconHeart class="text-red-200" />
		</span>
	</figure>
</aside>

<style>
	.custom--hearts {
		container-type: scroll-state;

		@supports (container-type: scroll-state) {
			@container scroll-state(stuck: none) {
				> figure {
					> figcaption {
						flex-grow: 0;
					}

					> span {
						width: 100%;
					}
				}
			}
		}
	}
</style>
