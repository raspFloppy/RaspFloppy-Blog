<script lang="ts">
	import { title } from '$lib/config.js'
	import { formatDate } from '$lib/utils'
	import { Badge, Heading, P } from 'flowbite-svelte'
	import { ClockSolid, CalendarPlusSolid } from 'flowbite-svelte-icons'

	export let data
</script>

<svelte:head>
	<title>{title} - {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="dark:text-white flex flex-col justify-center items-center">
	<hgroup>
		<Heading tag="h2" customSize="md:text-6xl text-4xl font-extrabold text-center" class="mt-10">
			{data.meta.title}
		</Heading>
		<P class="my-2 dark:text-gray-100 text-center font-mono text-sm">
			<Badge border color="none">
				<CalendarPlusSolid class="w-2.5 h-2.5 mr-1.5" />
				{formatDate(data.meta.date)}
			</Badge>
			<Badge border color="none">
				<ClockSolid class="w-2.5 h-2.5 mr-1.5" />
				3 minutes
			</Badge>
		</P>
	</hgroup>

	<div class="flex flex-wrap gap-2 mt-2 mb-2 items-center justify-center">
		{#each data.meta.categories as category}
			<Badge border color="red" rounded>&num;{category}</Badge>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>
