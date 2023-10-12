<script lang="ts">
	import * as config from '$lib/config'
	import { page } from '$app/stores'
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte'

	$: activeUrl = $page.url.pathname
	let activeClass =
		'text-md font-bold text-orange-600 dark:text-orange-600 dark:hover:text-orange-600 hover:text-orange-600 hover:border-orange-600'
	let nonActiveClass = 'font-bold  text-md dark:text-white dark:hover:text-orange-600 hover:text-orange-600'
	let btnClass =
		'text-gray-300 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-xl'
</script>

<Navbar class="fixed w-full z-20 top-0 left-0">
	<NavBrand href="/">
		<span
			class="self-center whitespace-nowrap text-xl font-bold dark:text-white dark:hover:text-orange-600 hover:text-orange-600 transition-colors duration-300 hover:border-b-2 border-transparent hover:border-orange-500"
		>
			{config.title}
		</span>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl} {activeClass} {nonActiveClass}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/blog">Blog</NavLi>
		<NavLi><DarkMode {btnClass} /></NavLi>
	</NavUl>
</Navbar>
