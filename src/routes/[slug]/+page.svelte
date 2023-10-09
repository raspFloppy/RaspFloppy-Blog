<script lang="ts">
	import { formatDate } from '$lib/utils'
	import { Span, Badge, P } from 'flowbite-svelte'

	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="dark:text-white flex flex-col justify-center items-center">
	<hgroup>
		<Span>{data.meta.title}</Span>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="grid grid-cols-3 justify-center gap-4">
		{#each data.meta.categories as category}
			<Badge border>&num;{category}</Badge>
		{/each}
	</div>

	<div class="mt-10">
		<svelte:component this={data.content} />
	</div>
</article>


