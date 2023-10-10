<script>
	import { description } from '$lib/config'
	import { Timeline, TimelineItem, Button, Heading, Span, Badge, P } from 'flowbite-svelte'
	import { ArrowRightOutline } from 'flowbite-svelte-icons'
</script>

<svelte:head>
	<title>{description}</title>
</svelte:head>

<div class="items-center justify-center flex flex-col">
	<!-- About Me Section -->
	<div class="about-me text-center">
		<Heading tag="h2" class="mb-4 -mt-10">
			<span class="bg-gradient-to-r from-purple-500 via-yellow-500 to-orange-600 bg-[length:100%_5px] bg-no-repeat bg-bottom">Who Am I?</span>
		</Heading>
		<P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300">
			Hi guys!👋 I'm Gabriel aka RaspFloppy, 
		</P>
	</div>

	<!-- Work Section -->
	<div id="work-section" class="items-center mt-10">
		<Heading tag="h2" class="mb-4">
			<span class="bg-gradient-to-r from-purple-500 via-yellow-500 to-orange-600 bg-[length:100%_5px] bg-no-repeat bg-bottom">Work</span>
		</Heading>
		<Timeline>
			<TimelineItem title="Movendo Technology" date="March 2022 - Present">
				<div class="grid grid-cols-4 gap-1 max-w-md mt-2 mb-2">
					<Badge border color="blue">C++</Badge>
					<Badge border color="green">Qt</Badge>
					<Badge border color="indigo">MediaPipe</Badge>
					<Badge border color="purple">OpenCV</Badge>
					<Badge border color="dark">Flask</Badge>
					<Badge border color="red">Angular</Badge>
					<Badge border color="dark">Git</Badge>
					<Badge border color="blue">Bitbucket</Badge>
				</div>
				<p class="mb-4 text-base font-normal text-gray-400 dark:text-gray-300">
					Working as a Junior Software Engineer 
				</p>
			</TimelineItem>
			<TimelineItem title="Linuxhub.it" date="March 2021 - March 2023">
				<div class="grid grid-cols-4 gap-1 max-w-md mt-2 mb-2">
					<Badge border color="none">Linux</Badge>
					<Badge border color="dark">Bash</Badge>
					<Badge border color="yellow">Javascript</Badge>
					<Badge border color="dark">Git</Badge>
				</div>
				<p class="text-base font-normal text-gray-400 dark:text-gray-300">
					As a Linux enthusiast, I joined the LinuxHub community for two years as a writer for their blog. <br>
					The topics of my articles were guides for Linux, open-source tools, and coding.
				</p>
				<Button href="https://linuxhub.it/" color="alternative">Learn more<ArrowRightOutline class="ml-2 w-3 h-3" /></Button>
			</TimelineItem>
			<TimelineItem title="Geco Business Consultant" date="November 2019 - December 2019">
				<div class="grid grid-cols-4 gap-1 max-w-md mt-2 mb-2">
					<Badge border color="none">Linux</Badge>
					<Badge border color="dark">Bash</Badge>
					<Badge border color="blue">Docker</Badge>
					<Badge border color="dark">Git</Badge>
				</div>
				<p class="text-base font-normal text-gray-400 dark:text-gray-300">
					During high school, I completed a two-month internship at a small consulting company in Genoa. <br>
					Here, I was able to strengthen my knowledge of Linux and delve into the world of web development and Docker.
				</p>
			</TimelineItem>
		</Timeline>
	</div>	

	<!-- Education Section -->
	<div id="education-section" class="items-center mt-10">
		<Heading tag="h2" class="mb-4">
			<span class="bg-gradient-to-r from-purple-500 via-yellow-500 to-orange-600 bg-[length:100%_5px] bg-no-repeat bg-bottom">Education</span>
		</Heading>
		<Timeline>
			<TimelineItem title="University of Genoa" date="September 2021 - Present">
				<div class="grid grid-cols-4 gap-1 max-w-md mt-2 mb-2">
				</div>
				<P class="mb-4 text-base font-normal text-gray-400 dark:text-gray-300">
					I am currently enrolled in the third year of a Bachelor's degree program in Computer Science at the University of Genoa. 
					Since computer science is my passion, I have decided to delve deeper into the subject, particularly focusing on its theoretical and mathematical aspects. 
					I have completed several projects, including:
					<ul>
						<li>A Java interpreter for a custom programming language.</li>
						<li>Microbash in C, which implements basic shell functions.</li>
						<li>A C++ library for matrix operations.</li>
					</ul>
				</P>
			</TimelineItem>
			<TimelineItem title="CyberChallange" date="March 2022 - June 2022">
				<div class="grid grid-cols-4 gap-1 max-w-xl mt-2 mb-2">
					<Badge border color="dark">Linux</Badge>
					<Badge border color="dark">Reverse Engineer</Badge>
					<Badge border color="dark">Debugging</Badge>
				</div>
				<p class="text-base font-normal text-gray-400 dark:text-gray-300">
					As a Linux enthusiast, I joined the LinuxHub community for two years as a writer for their blog. <br>
					The topics of my articles were guides for Linux, open-source tools, and coding.
				</p>
				<Button href="" color="alternative">Check My Badge<ArrowRightOutline class="ml-2 w-3 h-3" /></Button>
			</TimelineItem>
			<TimelineItem title="High School" date="November 2019 - December 2019">
				<div class="grid grid-cols-4 gap-1 max-w-md mt-2 mb-2">
					<Badge border color="none">Linux</Badge>
					<Badge border color="dark">Javascript</Badge>
					<Badge border color="blue">Docker</Badge>
					<Badge border color="dark">Node.js</Badge>
				</div>
				<p class="text-base font-normal text-gray-400 dark:text-gray-300">
					During high school, I completed a two-month internship at a small consulting company in Genoa. <br>
					Here, I was able to strengthen my knowledge of Linux and delve into the world of web development and Docker.
				</p>
			</TimelineItem>
		</Timeline>
	</div>
</div>