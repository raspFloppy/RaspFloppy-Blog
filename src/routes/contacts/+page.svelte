<script>
	import { Card, Avatar, Button } from 'flowbite-svelte'
</script>

<Card padding="xl">
	<div class="flex flex-col items-center pb-4">
		<Avatar size="lg" src="https://avatars.githubusercontent.com/u/73550410?v=4" />
		<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">RaspFloppy</h5>
		<span class="text-sm text-gray-500 dark:text-gray-400">Software Engineer</span>
		<div class="flex mt-4 space-x-3 lg:mt-6">
			<Button>Add friend</Button>
			<Button color="light" class="dark:text-white">Message</Button>
		</div>
	</div>
</Card>
