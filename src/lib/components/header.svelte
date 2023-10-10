<script lang="ts">
	import * as config from '$lib/config'
	import { page } from '$app/stores'
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'

	$: activeUrl = $page.url.pathname
	let activeClass = "text-md font-semibold text-orange-500 dark:text-orange-500 dark:hover:text-orange-500 hover:text-orange-500 hover:border-orange-500"
	let nonActiveClass = "font-semibold  text-md dark:text-white"
</script>

<Navbar>
	<NavBrand href="/" class> 
		<span class="self-center whitespace-nowrap text-xl font-bold dark:text-white dark:hover:text-orange-500 hover:text-orange-500 transition-colors duration-300 hover:border-b-2 border-transparent hover:border-orange-500">
			{config.title}
		</span>
	</NavBrand>
	<NavHamburger/>
	<NavUl {activeUrl} {activeClass} {nonActiveClass} >
			<NavLi href="/" >Home</NavLi>
			<NavLi href="/about">About</NavLi>
			<NavLi href="/blog">Blog</NavLi>
		</NavUl>
</Navbar>
