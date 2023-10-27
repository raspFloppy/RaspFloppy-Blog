<script>
	import { Card, Heading, P } from 'flowbite-svelte'
	import { formatDate } from '$lib/utils'
	import { description } from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{description}</title>
</svelte:head>



<div class="flex justify-center items-center flex-col">
	<div class="mt-10 mb-20 w-1/2">
		<Heading tag="h2" customSize="text-4xl font-extrabold">
			Welcome to my Blog!
		</Heading>
		<P class="text-sm md:text-base my-4 text-gray-500">
			Hello there! I'm Gabriel and this is my blog!<br>
			Here you can find a lot of stuff I love to learn, use, talk about. 
		</P>
	</div>

	{#each data.posts as post}
		<Card href={post.slug} class="mb-4 w-1/2" padding="xl" size="xl">
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
