<script>
	import { description } from '$lib/config'
	import {
		Timeline,
		TimelineItem,
		Button,
		Heading,
		Hr,
		P,
		List,
		Li,
		Blockquote
	} from 'flowbite-svelte'
	import { ArrowUpRightFromSquareOutline, QuoteSolid } from 'flowbite-svelte-icons'
	import 'devicon'
</script>

<svelte:head>
	<title>{description}</title>
</svelte:head>

<div class="items-center justify-center flex flex-col">
	<!-- About Me Section -->
	<div id="aboutme-section" class="items-center mt-5">
		<figure class="mx-auto max-w-screen-md text-center">
			<QuoteSolid class="mx-auto mb-3 w-12 h-12 text-gray-600 dark:text-gray-600" />
			<Blockquote bgClass="md md:xl">
				"Flowbite is just awesome. It contains tons of predesigned components and pages starting
				from login screen to complex dashboard. Perfect choice for your next SaaS application."
			</Blockquote>
			<figcaption class="flex justify-center items-center mt-6 space-x-3">
				<img
					class="w-6 h-6 rounded-full"
					src="https://avatars.githubusercontent.com/u/73550410?v=4"
					alt="raspFloppy github profile"
				/>
				<div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
					<cite class="pr-3 font-medium text-gray-900 dark:text-white">Gabriel</cite>
					<cite class="pl-3 text-sm font-light text-gray-600 dark:text-gray-400">
						Software Engineer
					</cite>
				</div>
			</figcaption>
		</figure>
	</div>

	<Hr classHr="w-96 h-1 mx-auto my-10 rounded md:my-10">
		<QuoteSolid class="w-4 h-4 text-gray-700 dark:text-gray-300" />
	</Hr>

	<!-- Hobbies Section -->
	<div id="Projects-section" class="items-center mt-10">
		<Heading tag="h2" class="mb-4">
			<p class="underline md:underline-offset-8 ...">Projects</p>
		</Heading>
	</div>

	<Hr classHr="w-96 h-1 mx-auto my-10 rounded md:my-10">
		<QuoteSolid class="w-4 h-4 text-gray-700 dark:text-gray-300" />
	</Hr>

	<!-- Work Section -->
	<div id="work-section" class="items-center mt-10">
		<Heading tag="h2" class="mb-4">
			<p class="underline md:underline-offset-8 ...">Experience</p>
		</Heading>
		<Timeline>
			<TimelineItem title="Movendo Technology" date="March 2022 - Present">
				<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
					<i class="devicon-debian-plain colored" />
					<i class="devicon devicon-cplusplus-plain colored" />
					<i class="devicon devicon-qt-original colored" />
					<i class="devicon devicon-opencv-plain-wordmark colored" />
					<i class="devicon-flask-original dark:text-white colored" />
					<i class="devicon-angularjs-plain colored" />
					<i class="devicon devicon-git-plain colored" />
					<i class="devicon-bitbucket-original colored" />
				</div>
				<P class="text-sm font-normal md:text-base text-gray-600 dark:text-gray-300">
					Working as a Junior Software Engineer
				</P>
			</TimelineItem>
			<TimelineItem title="Linuxhub.it" date="March 2021 - March 2023">
				<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
					<i class="devicon-linux-plain dark:text-white colored" />
					<i class="devicon-bash-plain dark:text-white colored" />
					<i class="devicon-javascript-plain colored" />
					<i class="devicon-git-plain colored" />
				</div>
				<P class="text-sm font-normal md:text-base text-gray-600 dark:text-gray-300 mb-4">
					As a Linux enthusiast, I joined the LinuxHub community for two years as a writer for their
					blog. <br />
					The topics of my articles were guides for Linux, open-source tools, and coding.
				</P>
				<Button href="https://linuxhub.it/" color="alternative">
					Got to Website
					<ArrowUpRightFromSquareOutline class="ml-2 w-3 h-3" />
				</Button>
			</TimelineItem>
			<TimelineItem title="Geco Business Consultant" date="November 2019 - December 2019">
				<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
					<i class="devicon-linux-plain dark:text-white colored" />
					<i class="devicon-bash-plain dark:text-white colored" />
					<i class="devicon-docker-plain colored" />
					<i class="devicon-git-plain colored" />
				</div>
				<P class="text-sm font-normal md:text-base text-gray-600 dark:text-gray-300">
					During high school, I completed a two-month internship at a small consulting company in
					Genoa. <br />
					Here, I was able to strengthen my knowledge of Linux and delve into the world of web development
					and Docker.
				</P>
			</TimelineItem>
		</Timeline>
	</div>

	<Hr classHr="w-96 h-1 mx-auto my-4 rounded md:my-10">
		<QuoteSolid class="w-4 h-4 text-gray-700 dark:text-gray-300" />
	</Hr>

	<!-- Education Section -->
	<div id="work-section" class="items-center mt-10">
		<Heading tag="h2" class="mb-4">
			<p class="underline md:underline-offset-8 ...">Education</p>
		</Heading>
		<Timeline>
			<TimelineItem title="University of Genoa" date="September 2021 - Present">
				<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
					<i class="devicon-linux-plain colored dark:text-white" />
					<i class="devicon-bash-plain dark:text-white colored" />
					<i class="devicon-docker-plain colored" />
					<i class="devicon-git-plain colored" />
				</div>
				<P class="text- font-normal md:text-base text-gray-600 dark:text-gray-300">
					My passion brings me to be a third year Computer Science student, during this period I did
					several projects:
					<List>
						<Li>Intepreter: A Java Intepreter</Li>
						<Li>Microbash: a C basic shell</Li>
						<Li>Alan Lib: A C++ Matrix library</Li>
					</List>
				</P>
			</TimelineItem>
			<TimelineItem title="CyberChallange" date="March 2022 -  2022">
				<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
					<i class="devicon-linux-plain dark:text-white colored" />
					<i class="devicon-bash-plain dark:text-white colored" />
					<i class="devicon-javascript-plain colored" />
					<i class="devicon-git-plain colored" />
				</div>
				<P class="text-sm font-normal md:text-base text-gray-600 dark:text-gray-300  mb-4" />
				<Button href="https://bestr.it/award/show/ISZ_Ku2KSKWT1-iVRB5lzA" color="alternative">
					See my Badge
					<ArrowUpRightFromSquareOutline class="ml-2 w-3 h-3" />
				</Button>
			</TimelineItem>
			<TimelineItem title="Majorana-Giorgi" date="November 2019 - December 2019">
				<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
					<i class="devicon-linux-plain dark:text-white colored" />
					<i class="devicon-javascript-plain colored" />
					<i class="devicon-docker-plain colored" />
					<i class="devicon-nodejs-plain colored" />
				</div>
				<P class="text-sm font-normal md:text-base text-gray-600 dark:text-gray-300"
					>High School aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
				</P>
			</TimelineItem>
		</Timeline>
	</div>

	<Hr classHr="w-96 h-1 mx-auto my-10 rounded md:my-10">
		<QuoteSolid class="w-4 h-4 text-gray-700 dark:text-gray-300" />
	</Hr>
</div>
