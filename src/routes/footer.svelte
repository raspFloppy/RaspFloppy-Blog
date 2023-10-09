<script>
	import * as config from '$lib/config'
	import { DarkMode } from 'flowbite-svelte'
	import { Footer, FooterCopyright } from 'flowbite-svelte'
</script>

<Footer>
	<FooterCopyright href="/" by={config.title} year={new Date().getFullYear()} />
	<DarkMode />
</Footer>
