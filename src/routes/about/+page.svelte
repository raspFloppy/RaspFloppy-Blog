<script>
	import { Timeline, TimelineItem, Button } from 'flowbite-svelte'
	import { ArrowRightOutline } from 'flowbite-svelte-icons'
</script>

<Timeline>
	<TimelineItem title="Movendo Technology" date="March 2022 - Present">
		<p class="mb-4 text-base font-normal text-gray-400 dark:text-gray-300">
			Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and
			pre-order E-commerce & Marketing pages.
		</p>
		<Button color="alternative">Learn more<ArrowRightOutline class="ml-2 w-3 h-3" /></Button>
	</TimelineItem>
	<TimelineItem title="Geco Business Consultant" date="November 2019 - December 2019">
		<p class="text-base font-normal text-gray-400 dark:text-gray-300">
			All of the pages and components are first designed in Figma and we keep a parity between the
			two versions even as we update the project.
		</p>
	</TimelineItem>
</Timeline>
