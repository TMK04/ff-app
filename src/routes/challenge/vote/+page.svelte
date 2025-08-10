<script lang="ts">
	import ChallengeEntry from '$lib/components/ChallengeEntry.svelte';
	import Hearts from '$lib/components/Hearts.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
</script>

<TopNav>Vote</TopNav>
<main class="mx-6 flex flex-col items-center">
	<Hearts used={0} />
	<ol class="flex w-full flex-wrap gap-8">
		<ChallengeEntry
			comment_count={4}
			like_count={21}
			pfp="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
			posted_ago="3 mins ago"
			src="https://i.pinimg.com/736x/2b/d3/cf/2bd3cfdb4e32baf3087a68ea4b531012.jpg"
			username="Daniel"
		/>
		<ChallengeEntry
			comment_count={4}
			like_count={21}
			pfp="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
			posted_ago="2 hrs ago"
			src="https://media.istockphoto.com/id/1205018922/photo/fashionable-young-woman-is-crossing-the-street.jpg?s=612x612&w=0&k=20&c=e8-xIEtnjsocwIhMMjMXGxdyXYJ7avVBzeed2M5TSKM="
			username="Helen"
		/>
	</ol>
</main>
