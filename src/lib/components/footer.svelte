<script>
	import * as config from '$lib/config'
	import { Footer, FooterCopyright } from 'flowbite-svelte'
</script>

<Footer footerType="logo" class="w-full">
	<FooterCopyright href="/" by={config.title} year={new Date().getFullYear()} />
</Footer>
