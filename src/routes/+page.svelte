<script>
	import ProjectCard from './ProjectCard.svelte';
	import ArticleCard from './ArticleCard.svelte';
	import Jumbotron from './Jumbotron.svelte';

	import { fly } from 'svelte/transition';
</script>

<main
	class="mx-[10dvw] py-10"
	in:fly={{ x: -10, duration: 500, delay: 500 }}
	out:fly={{ x: 5, duration: 500 }}
>
	<Jumbotron />
	<h2 id="projects" class="m-5 text-center text-4xl font-bold">Projects</h2>
	<div class="flex flex-col gap-5">
		<ProjectCard
			title={'Username Generator'}
			slug={'username-generator'}
			description={'A set of applications for creating randomly-generated usernames'}
			technologies={'C#, .NET 6, Terminal.GUI, Blazor WebAssembly, Avalonia UI'}
			source={'https://github.com/gridlocdev/UsernameGenerator'}
		/>
		<ProjectCard
			title={'Drum Machine'}
			slug={'drum-machine'}
			description={'A drum machine that you can play with the keyboard'}
			technologies={'Web Components, Vanilla CSS'}
			source={'https://github.com/gridlocdev/drum-machine'}
			website={'https://drum-machine.gridloc.dev'}
		/>
		<ProjectCard
			title={'Static Site Generator'}
			slug={'static-site-generator'}
			description={'My custom-built Static Site Generator'}
			technologies={'C#, .NET 6, Markdown, Markdig'}
			source={'https://github.com/gridlocdev/custom-static-site-generator'}
		/>
		<ProjectCard
			title={'Cube Slide'}
			slug={'cube-slide'}
			description={'A jump-less 3D platformer video game where a cube slides around obstacles to make its way to the goal'}
			technologies={'Unity (Game Engine)'}
			source={'https://github.com/gridlocdev/cube-slide'}
			website={'https://gridlocdev.github.io/cube-slide'}
		/>
		<ProjectCard
			title={'Chess Clock'}
			slug={'chess-clock'}
			description={'A web-based clock application for timing games of Chess'}
			technologies={'Angular, Angular Material'}
			source={'https://github.com/gridlocdev/chess-clock'}
			website={'https://gridlocdev.github.io/chess-clock'}
		/>
		<ProjectCard
			title={'Text Adventure'}
			slug={'text-adventure'}
			description={'Create, play, import or export a text adventure game story.'}
			technologies={'Vue 2, Vuetify, VueX'}
			source={'https://github.com/gridlocdev/text-adventure'}
			website={'https://gridlocdev.github.io/text-adventure'}
		/>
		<ProjectCard
			title={'Portfolio (this site)'}
			slug={'portfolio'}
			description={"The website that you're currently on! A portfolio website that gives a list of the projects, articles, and other details about myself as a developer."}
			technologies={'Vanilla JS, Bootstrap'}
			source={'https://github.com/gridlocdev/developer-portfolio-website'}
			website={'https://gridloc.dev'}
		/>
	</div>
	<h2 id="articles">Articles</h2>
	<div class="flex flex-col gap-5">
		<ArticleCard
			title={'Developer Notes'}
			description={'Notes about miscellaneous industry-related topics'}
			website={'https://notes.gridloc.dev'}
		/>
		<ArticleCard
			title={'Blog'}
			description={"A website where I put short-form guides for things I can't find on the Internet"}
			website={'https://listed.to/@gridlocdev'}
		/>
		<ArticleCard
			title={'C# Developer Roadmap'}
			description={"A beginner's roadmap of concepts to learn the C# programming language"}
			website={'https://github.com/gridlocdev/csharp-learning-roadmap'}
		/>
		<ArticleCard
			title={'Lua Tutorial'}
			description={'An introductory article for the Lua programming language'}
			website={'https://gridlocdev.github.io/lua-beginners-guide'}
		/>
	</div>
	<div id="about">About Me</div>
</main>
