<script>
	import * as config from '$lib/config'
	import { Footer, FooterCopyright } from 'flowbite-svelte'
</script>

<Footer footerType="logo" class="w-full mt-10">
	<FooterCopyright href="/" by={config.title} year={new Date().getFullYear()} />
</Footer>
