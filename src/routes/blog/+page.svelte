<script>
	import { Card, Heading, P } from 'flowbite-svelte'
	import { formatDate } from '$lib/utils'
	import { description } from '$lib/config'
	import { PaginationItem } from 'flowbite-svelte'
	import { ArrowLeftSolid, ArrowRightSolid } from 'flowbite-svelte-icons'

	export let data

	let pageSize = 10
	let currentPage = 1

	$: totalItems = data.posts.length
	$: totalPages = Math.ceil(totalItems / pageSize)
	$: start = (currentPage - 1) * pageSize
	$: end = start + pageSize
	$: currentPosts = data.posts.slice(start, end)

	const previous = () => {
		if (currentPage > 1) {
			currentPage -= 1
			scrollToTop()
		}
	}
	const next = () => {
		if (currentPage < totalPages) {
			currentPage += 1
			scrollToTop()
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
</script>

<svelte:head>
	<title>{description}</title>	 
</svelte:head>

{#each data.posts as post}
	{post.slug}
{/each}

<div class="flex justify-center items-center flex-col">
	<div class="mt-6 mb-16 w-1/2 min-w-[275px]">
		<Heading tag="h2" customSize="text-4xl font-extrabold">Welcome to my Blog!</Heading>
		<P class="text-sm md:text-base my-4 text-gray-500">
			Hello there! I'm Gabriel and this is my blog!<br />
			Here you can find a lot of stuff I love to learn, use, talk about.
		</P>
	</div>

	{#each currentPosts as post}
		<Card href={post.slug} class="mb-5 w-1/2 min-w-[275px]" padding="xl" size="xl">
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

<div class="flex items-center justify-center space-x-10 flex-row">
	<PaginationItem large class="flex items-center" on:click={previous}>
		<ArrowLeftSolid class="mr-2 w-5 h-5" />
		Previous
	</PaginationItem>
	<PaginationItem large class="flex items-center" on:click={next}>
		Next
		<ArrowRightSolid class="ml-2 w-5 h-5" />
	</PaginationItem>
</div>
