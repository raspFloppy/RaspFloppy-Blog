<script lang="ts">
	import { title } from '$lib/config.js';
	import { formatDate } from '$lib/utils'
	import { Badge, Heading, P } from 'flowbite-svelte'

	export let data
</script>

<svelte:head>
	<title>{title} - {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="dark:text-white flex flex-col justify-center items-center">
	<hgroup>
		<Heading tag="h2" customSize="text-4xl font-extrabold">
			{data.meta.title}
		</Heading>
		<P class="my-2 dark:text-gray-100">
			<p>Published at {formatDate(data.meta.date)}</p>
		</P>
	</hgroup>

	<div class="grid grid-cols-3 gap-2 mt-2">
		{#each data.meta.categories as category}
			<Badge border>&num;{category}</Badge>
		{/each}
	</div>

	<div class="mt-6 prose">
		<svelte:component this={data.content} />
	</div>
</article>
