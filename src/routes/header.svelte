<script lang="ts">
	import * as config from '$lib/config'
	import { page } from '$app/stores'
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
	$: activeUrl = $page.url.pathname
</script>

<Navbar>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>{config.title}</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/blog">Blog</NavLi>
		<NavLi href="/contacts">Contact</NavLi>
		<NavLi href="/rss">RSS</NavLi>
	</NavUl>
</Navbar>
