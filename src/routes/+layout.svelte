<script lang="ts">
	import '../app.postcss'
	import Header from '../lib/components/header.svelte'
	import Footer from '../lib/components/footer.svelte'
	import { fade } from 'svelte/transition'

	export let data
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	{#key data.currentRoute}
		<main
			class="flex-grow px-4"
			in:fade={{ duration: 150, delay: 150 }}
			out:fade={{ duration: 150 }}
		>
			<slot />
		</main>
	{/key}
	<Footer />
</div>
