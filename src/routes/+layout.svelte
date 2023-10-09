<script lang="ts">
	import '../app.postcss'
	import Header from './header.svelte'
	import Footer from './footer.svelte'

</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-grow mt-20 p-4">
		<slot />
	</main>
	<Footer />
</div>
