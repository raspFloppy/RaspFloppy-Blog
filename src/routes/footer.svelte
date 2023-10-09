<script>
	import * as config from '$lib/config'
	import { DarkMode } from 'flowbite-svelte'
	import { Footer, FooterCopyright } from 'flowbite-svelte'

	let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-xl p-2';
</script>

<Footer class="flex justify-between items-center">
	<FooterCopyright href="/" by={config.title} year={new Date().getFullYear()} />
	<DarkMode {btnClass}/>
</Footer>

