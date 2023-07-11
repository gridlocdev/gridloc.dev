<script>
	import projects from '../project-data.js';
	import articles from '../article-data.js';
	import ProjectCard from './ProjectCard.svelte';
	import ArticleCard from './ArticleCard.svelte';

	import { fly } from 'svelte/transition';
</script>

<header>
	<nav class="flex gap-x-5 p-5">
		<span class="flex-grow font-bold">Web Page</span>
		<a href="#projects">projects</a>
		<a href="#articles">articles</a>
		<a href="#about">about</a>
	</nav>
</header>

<main
	class="mx-[10dvw] py-10"
	in:fly={{ x: -10, duration: 500, delay: 500 }}
	out:fly={{ x: 5, duration: 500 }}
>
	<div id="start" class="flex flex-col gap-y-5">
		<h1 class="text-5xl font-bold">I've made some stuff, feel free to check it out</h1>
		<input type="button" class="w-min rounded-full bg-accent px-6 py-3" value="sounds cool" />
	</div>
	<h2 id="projects">Projects</h2>
	<div class="grid grid-cols-3 gap-5">
		{#each projects as project}
			<ProjectCard
				title={project.title}
				slug={project.slug}
				description={project.description}
				technologies={project.technologies}
				sourceLink={project.source}
				website={project.website}
			/>
		{/each}
	</div>
	<h2 id="articles">Articles</h2>
	<div class="grid grid-cols-2 gap-5">
		{#each articles as article}
			<ArticleCard
				title={article.title}
				description={article.description}
				technologies={article.technologies}
				website={article.website}
			/>
		{/each}
	</div>
	<div id="about">About Me</div>
</main>
