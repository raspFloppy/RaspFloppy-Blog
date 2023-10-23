<script>
	import { Card } from 'flowbite-svelte'
	import { formatDate } from '$lib/utils'
	import { description } from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{description}</title>
</svelte:head>

<div class="flex justify-center items-center flex-col">
	{#each data.posts as post}
		<Card href={post.slug} class="mb-4 w-2/3" padding="xl" size="xl">
			<h5 class="mb-2 md:text-3xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{post.title}
			</h5>
			<p class="mb-3 md:text-sm text-xs text-gray-600 dark:text-gray-300 leading-tight">
				{post.description}
			</p>
			<p class="text-xs md:text-sm italic">{formatDate(post.date)}</p>
		</Card>
	{/each}
</div>
