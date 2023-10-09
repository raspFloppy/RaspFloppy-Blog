<!--

<script lang="ts">
	import { page } from '$app/stores'
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'

	export let data

	let pageSize: number = 10
	$: totalItems = data.posts.length
	$: totalPages = Math.ceil(totalItems / pageSize)
	$: activeUrl = $page.url.searchParams.get('page')


</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<div>
	{#each Array(totalPages) as _, index}
		<a href="/page?limit={pageSize}&skip={pageSize * index}">
			{index + 1}
		</a>
	{/each}
</div>


<style>
	.posts {
		justify-content: center;
		display: grid;
		gap: var(--size-5);
	}

	.post {
		max-inline-size: var(--size-content-10);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-2);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}
</style>
-->

<script>
	import { Card } from 'flowbite-svelte';
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'

	export let data
  </script>
  
  <div class="justify-center items-center flex flex-col">
	
	{#each data.posts as post}		
		<Card img="https://avatars.githubusercontent.com/u/73550410?v=4" href={post.slug} horizontal class="mb-4">
		  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
		  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{post.description}</p>
		  <p>{formatDate(post.date)}</p>
		</Card>
	{/each}
  </div>