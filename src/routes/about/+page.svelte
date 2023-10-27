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

<div class="items-center justify-center flex flex-col mt-10">
	<!-- About Me Section -->
	<div id="about-section">
		<figure class="mx-auto max-w-screen-md text-center">
			<QuoteSolid class="mx-auto mb-3 w-12 h-12 text-gray-600 dark:text-gray-600" />
			<Blockquote bgClass="lg md:xl">
				"Hi there! I'm Gabriel, a tech enthusiast who loves coding, automating tasks, optimizing
				code and also a Linux lover; I'm deeply interested in science, especially physics,
				mathematics, and economics. <br />I'm an avid reader, particularly of satirical dystopian
				novels and popular science books. I'm kinda into gym, even tho I have a long way to go.
				<br /><br />
				I've always wanted to use my writing to help others, and I hope my blog can fulfill that purpose,
				so if you are curious check it out:"
			</Blockquote>
			<Button href="/blog" color="alternative">
				Go to Blog
				<ArrowUpRightFromSquareOutline class="ml-2 w-3 h-3" />
			</Button>
			<figcaption class="flex justify-center items-center mt-6 space-x-3" />
		</figure>
	</div>

	<Hr classHr="w-96 h-1 mx-auto my-10 rounded md:my-10">
		<QuoteSolid class="w-4 h-4 text-gray-700 dark:text-gray-300" />
	</Hr>

	<!-- Work Section -->
	<div id="work-section" class="items-center mt-10">
		<Heading tag="h2" class="mb-4 md:text-4xl text-3xl underline md:underline-offset-8">
			Experience
		</Heading>
		<Timeline order="vertical">
			<TimelineItem title="Movendo Technology" date="March 2022 - Present">
				<div class="grid grid-cols-9 max-w-xs mt-2 mb-4">
					<i class="devicon-debian-plain colored" />
					<i class="devicon devicon-cplusplus-plain colored" />
					<i class="devicon devicon-python-plain colored" />
					<i class="devicon devicon-qt-original colored" />
					<i class="devicon devicon-opencv-plain-wordmark colored" />
					<i class="devicon-flask-original dark:text-white colored" />
					<i class="devicon-angularjs-plain colored" />
					<i class="devicon devicon-git-plain colored" />
					<i class="devicon-bitbucket-original colored" />
				</div>
				<P class="text-sm font-normal md:text-base text-gray-600 dark:text-gray-300 mb-2">
					I am currently employed as a Junior Software Engineer at Movendo Technology,a company in
					the field of rehabilitative robotics. In my current roles, I undertake various
					responsibilities, including:
					<List class="text-sm font-normal md:text-base">
						<Li class="mb-2 mt-2">
							Developing an augmented reality application in <strong>Python Pyside6 OpenCV</strong> and
							Mediapipe for rehab.
						</Li>
						<Li class="mb-2">
							Maintain and improve the rehab desktop application written in <strong>
								C++ Qt and QML
							</strong>
							that serves as a user interface for patient gaming sessions.
						</Li>
						<Li class="mb-2">
							Maintain and improve the web application based <strong>Flask and Angular</strong>,
							used by therapists to customize rehabilitation sessions.
						</Li>
						<Li class="mb-2">
							Develop CLI application in <strong>C++</strong> to detect measurement errors in the robotics.
						</Li>
					</List>
				</P>
			</TimelineItem>
			<TimelineItem title="Linuxhub.it" date="March 2021 - March 2023">
				<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
					<i class="devicon-linux-plain dark:text-white colored" />
					<i class="devicon-bash-plain dark:text-white colored" />
					<i class="devicon-javascript-plain colored" />
					<i class="devicon-git-plain colored" />
				</div>
				<P class="text-sm md:text-base font-normal text-gray-600 dark:text-gray-300">
					As a Linux enthusiast, I joined the LinuxHub community for two years as a writer for their
					blog. <br />
					The topics of my articles were guides about: Linux, open-source tools and coding.
				</P>
				<Button href="https://linuxhub.it/" color="alternative" class="mt-2">
					Go to Website
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
				<P class="text-sm md:text-base font-normal text-gray-600 dark:text-gray-300">
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
			<Heading tag="h2" class="mb-4 md:text-4xl text-3xl underline md:underline-offset-8">
				Education
			</Heading>
			<Timeline order="vertical">
				<TimelineItem title="University of Genoa" date="September 2021 - Present">
					<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
						<i class="devicon-linux-plain colored " />
						<i class="devicon devicon-cplusplus-plain colored" />
						<i class="devicon devicon-c-plain colored" />
						<i class="devicon devicon-java-plain colored" />
						<i class="devicon devicon-php-plain colored" />
						<i class="devicon devicon-git-plain colored" />
					</div>
					<P class="text-sm font-normal md:text-base text-gray-600 dark:text-gray-300 mb-2">
						I am enrolled in the third year of computer science at the University of Genoa, and among the projects I have completed are: 
						<List>
							<Li>a</Li>
							<Li>b</Li>
							<Li>c</Li>
						</List>
					</P>
				</TimelineItem>
				<TimelineItem title="Cyberchallange" date="March 2022 - June 2022">
					<div class="grid grid-cols-8 max-w-xs mt-2 mb-4">
						<i class="devicon-linux-plain dark:text-white colored" />
						<i class="devicon-bash-plain dark:text-white colored" />
						<i class="devicon-javascript-plain colored" />
						<i class="devicon-git-plain colored" />
					</div>
					<P class="text-sm md:text-base font-normal text-gray-600 dark:text-gray-300">
					</P>
					<Button href="https://openbadges.bestr.it/public/assertions/ISZ_Ku2KSKWT1-iVRB5lzA" color="alternative" class="mt-2">
						See my Badge
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
					<P class="text-sm md:text-base font-normal text-gray-600 dark:text-gray-300">
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
</div>
