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
-->

<script>
	import { page } from '$app/stores'
	import { Pagination } from 'flowbite-svelte'

	$: activeUrl = $page.url.searchParams.get('page')
	let pages = [
		{ name: 1, href: '/blog/?page=1' },
		{ name: 2, href: '/blog/?page=2' },
		{ name: 3, href: '/blog/?page=3' },
		{ name: 4, href: '/blog/?page=4' },
		{ name: 5, href: '/blog/?page=5' }
	]

	// @ts-ignore
	$: {
		pages.forEach((page) => {
			let splitUrl = page.href.split('?')
			let queryString = splitUrl.slice(1).join('?')
			const hrefParams = new URLSearchParams(queryString)
			let hrefValue = hrefParams.get('page')
			if (hrefValue === activeUrl) {
				// @ts-ignore
				page.active = true
			} else {
				// @ts-ignore
				page.active = false
			}
		})
		pages = pages
	}
</script>

<Pagination {pages} large  />

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
 