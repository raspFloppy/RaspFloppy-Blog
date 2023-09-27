<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './toggle.svelte'

	let isMenuOpen = false

	function toggleMenu() {
		isMenuOpen = !isMenuOpen
	}
</script>

<nav class="pb-">
	<div class="header-content">
		<a href="/" class="title">
			<b>{config.title}</b>
		</a>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="hamburger-menu" on:click={toggleMenu}>
			<div class="hamburger-bar" />
			<div class="hamburger-bar" />
			<div class="hamburger-bar" />
		</div>

		<ul class="links" class:open={isMenuOpen}>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
			<li>
				<a href="/rss">RSS</a>
			</li>
			<li>
				<Toggle />
			</li>
		</ul>
	</div>
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center; /* Vertically align the items */
	}

	.title {
		flex: 1;
		font-size: medium;
	}

	.hamburger-menu {
		display: block;
		cursor: pointer;
		padding: 10px;
	}

	.hamburger-bar {
		width: 30px;
		height: 3px;
		background-color: #333;
		margin: 6px 0;
		transition: 0.4s;
	}

	.links {
		display: none;
	}

	.links.open {
		display: flex;
		gap: var(--size-7);
		width: 100%; /* Make the menu full-width */
		margin-top: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
		color: #2ca0d7;
		transition-delay: 200ms;
	}

	@media (min-width: 768px) {
		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}

		.hamburger-menu {
			display: none;
		}
	}
</style>
