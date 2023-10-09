<script>
	import { Heading, P, Button } from 'flowbite-svelte'
	import { Avatar } from 'flowbite-svelte'
	import { ArrowRightOutline } from 'flowbite-svelte-icons'
</script>

<div class="text-center flex flex-wrap justify-center items-center">
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
		>Hi! I'm Gabriel
	</Heading>
	<Heading tag="h2" class="mb-4" customSize="text-2xl font-extrabold  md:text-3xl lg:text-3xl"
		>Hi! I'm Gabriel
	</Heading>
	<Avatar
		src="https://avatars.githubusercontent.com/u/73550410?v=4"
		dot={{ placement: 'top-right', color: 'red' }}
		rounded
		size="lg"
		border
		class="mb-4 ring-orange-500 dark:ring-orange-500"
	/>

	<P class="mb-8 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300">
		Welcome to my Blog, I'm a Software Engineer with a lot of passions but if you want to know more
		check click the button below.
	</P>
	<Button href="/about">
		About Me
		<ArrowRightOutline class="w-3.5 h-3.5 ml-2" />
	</Button>
</div>
