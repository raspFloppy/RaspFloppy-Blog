<script>
	import { Card } from 'flowbite-svelte'
	import { formatDate } from '$lib/utils'
	import { description } from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{description}</title>
</svelte:head>

<div class="justify-center items-center flex flex-col">
	{#each data.posts as post}
		<Card
			img="https://avatars.githubusercontent.com/u/73550410?v=4"
			href={post.slug}
			horizontal
			class="mb-4"
		>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{post.title}
			</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				{post.description}
			</p>
			<p>{formatDate(post.date)}</p>
		</Card>
	{/each}
</div>
