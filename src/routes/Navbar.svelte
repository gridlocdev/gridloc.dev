<script>
	import { base } from '$app/paths';
</script>

<nav class="flex gap-x-8">
	<a class="flex-grow max-md:hidden" href="/"
		><img
			class="m-8 max-h-[2rem]"
			src="{base}/brand/brand-logo.svg"
			alt="gridlocdev brand logo"
		/></a
	>
	<section
		class="fixed bottom-0 left-0 z-10 flex w-screen items-center justify-around gap-x-8 p-4 text-center backdrop-blur-3xl md:relative md:bottom-auto md:top-0 md:ml-auto md:w-fit md:p-8 md:backdrop-blur-0"
	>
		<a
			class="flex flex-col items-center gap-1 transition-opacity hover:opacity-50 md:text-lg"
			href="#projects"
			><img class="h-6 w-6 md:hidden" src="{base}/icons/stack.svg" alt="projects icon" />projects</a
		>
		<a
			class="flex flex-col items-center gap-1 transition-opacity hover:opacity-50 md:text-lg"
			href="#articles"
		>
			<img class="h-6 w-6 md:hidden" src="{base}/icons/document-text.svg" alt="projects icon" />
			articles</a
		>
		<a
			class="flex flex-col items-center gap-1 transition-opacity hover:opacity-50 md:text-lg"
			href="#about"
		>
			<img class="h-6 w-6 md:hidden" src="{base}/icons/user.svg" alt="projects icon" />
			about</a
		>
	</section>
</nav>
