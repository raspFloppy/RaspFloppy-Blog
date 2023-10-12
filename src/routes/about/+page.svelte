<script>
	import { description } from '$lib/config'
	import {
		Timeline,
		TimelineItem,
		Button,
		Heading,
		Hr,
		Badge,
		P,
		List,
		Li,
		Blockquote,
		Span
	} from 'flowbite-svelte'
	import {
		ArrowRightOutline,
		ArrowUpRightFromSquareOutline,
		QuoteSolid,
		BugSolid
	} from 'flowbite-svelte-icons'
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
			<Blockquote size="xl">
				"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
				login screen to complex dashboard. Perfect choice for your next SaaS application."
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

	<Hr classHr="w-48 h-1 mx-auto my-4 rounded md:my-10">
		<QuoteSolid class="w-4 h-4 text-gray-700 dark:text-gray-300" />
	</Hr>

	<!-- Work Section -->
	<div id="work-section" class="items-center mt-10">
		<Heading tag="h2" class="mb-4">
			<p class="underline md:underline-offset-8 ...">Work</p>
		</Heading>
		<Timeline>
			<TimelineItem title="Movendo Technology" date="March 2022 - Present">
				<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
					<i class="devicon-debian-plain colored"></i>
					<i class="devicon devicon-cplusplus-plain colored" />
					<i class="devicon devicon-qt-original colored" />
					<i class="devicon devicon-opencv-plain-wordmark colored" />
					<i class="devicon-flask-original colored"></i>
					<i class="devicon-angularjs-plain colored"></i>
					<i class="devicon devicon-git-plain colored" />
					<i class="devicon-bitbucket-original colored"></i>
				</div>
				<p class="mb-4 text-base font-normal text-gray-600 dark:text-gray-300">
					Working as a Junior Software Engineer
				</p>
			</TimelineItem>
			<TimelineItem title="Linuxhub.it" date="March 2021 - March 2023">
				<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
					<i class="devicon-linux-plain colored"></i>
					<i class="devicon-bash-plain colored"></i>
					<i class="devicon-javascript-plain colored"></i>
					<i class="devicon-git-plain colored"></i>
				</div>
				<p class="text-base font-normal text-gray-600 dark:text-gray-300">
					As a Linux enthusiast, I joined the LinuxHub community for two years as a writer for their
					blog. <br />
					The topics of my articles were guides for Linux, open-source tools, and coding.
				</p>
				<Button href="https://linuxhub.it/" color="alternative"
					>Learn more<ArrowRightOutline class="ml-2 w-3 h-3" /></Button
				>
			</TimelineItem>
			<TimelineItem title="Geco Business Consultant" date="November 2019 - December 2019">
				<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
					<i class="devicon-linux-plain colored"></i>
					<i class="devicon-bash-plain colored"></i>
					<i class="devicon-docker-plain colored"></i>
					<i class="devicon-git-plain colored"></i>
				</div>
				<p class="text-base font-normal sm:text-sm text-gray-600 dark:text-gray-300">
					During high school, I completed a two-month internship at a small consulting company in
					Genoa. <br />
					Here, I was able to strengthen my knowledge of Linux and delve into the world of web development
					and Docker.
				</p>
			</TimelineItem>
		</Timeline>
	</div>

	<Hr classHr="w-48 h-1 mx-auto my-4 rounded md:my-10">
		<QuoteSolid class="w-4 h-4 text-gray-700 dark:text-gray-300" />
	</Hr>

	<!-- Education Section -->
	<div id="education-section" class="items-center mt-10">
		<Heading tag="h2" class="mb-4">
			<p class="underline md:underline-offset-8 ...">Education</p>
		</Heading>
		<Timeline>
			<TimelineItem title="University of Genoa" date="September 2021 - Present">
				<div class="grid grid-cols-8 max-w-xs mt-2 mb-4" />
				<P class="mb-4 text-base font-normal text-gray-600 dark:text-gray-300">
					My passion brings me to be a third year Computer Science student, <br />during this period
					I did several projects:
					<List list="disc">
						<Li>Intepreter: A Java Intepreter that implements Bool, Int and Vect types</Li>
						<Li>Microbash: a C basic shell with I/O, Pipe and built-in commands</Li>
						<Li>Alan Lib: A C++ Matrix library for my Linear Algebra course</Li>
					</List>
				</P>
			</TimelineItem>
			<TimelineItem title="CyberChallange" date="March 2022 - June 2022">
				<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
					
				</div>
				<p class="text-base font-normal text-gray-600 dark:text-gray-300">
					
				</p>
				<Button href="https://bestr.it/award/show/ISZ_Ku2KSKWT1-iVRB5lzA" color="alternative">
					See my Badge
					<ArrowUpRightFromSquareOutline class="ml-2 w-3 h-3" />
				</Button>
			</TimelineItem>
			<TimelineItem title="High School" date="November 2019 - December 2019">
				<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
					<i class="devicon-linux-plain colored"></i>
					<i class="devicon-javascript-plain colored"></i>
					<i class="devicon-docker-plain colored"></i>
					<i class="devicon-nodejs-plain colored"></i>
				</div>
				<p class="text-base font-normal text-gray-600 dark:text-gray-300">
					My passion about computers brings me to study computer science
					<br />
					Here, I was able to strengthen my knowledge of Linux and delve into the world of web development
					and Docker.
				</p>
			</TimelineItem>
		</Timeline>
	</div>
</div>