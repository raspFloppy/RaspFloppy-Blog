<script>
	import * as config from '$lib/config'
	import { Footer, FooterCopyright } from 'flowbite-svelte'
</script>

<Footer class="w-full z-20 bottom-0 left-0">
	<FooterCopyright href="/" by={config.title} year={new Date().getFullYear()} />
</Footer>
