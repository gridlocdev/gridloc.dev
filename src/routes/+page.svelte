<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import ArticleCard from './ArticleCard.svelte';
	import Jumbotron from './Hero.svelte';
	import NavBar from './NavBar.svelte';

	import { fly } from 'svelte/transition';

	// valid ProjectType values: 'App', 'Tool', 'Game'
</script>

<header>
	<NavBar />
</header>
<main
	class="py-10"
	in:fly={{ x: -10, duration: 500, delay: 500 }}
	out:fly={{ x: 5, duration: 500 }}
>
	<Jumbotron />
	<h2 id="projects" class="m-5 text-center text-4xl font-bold">Projects</h2>
	<div class="grid md:grid-cols-1 md:gap-5 lg:grid-cols-2 lg:gap-10">
		<ProjectCard
			title={'Username Generator'}
			description={'A set of applications for creating randomly-generated usernames'}
			projectType={'Tool'}
			technologies={'C#, .NET 6, Terminal.GUI, Blazor WebAssembly, Avalonia UI'}
			website={null}
			source={'https://github.com/gridlocdev/UsernameGenerator'}
			screenshot={'/screenshots/username-generator.png'}
		/>
		<ProjectCard
			title={'Drum Machine'}
			description={'A drum machine that you can play with the keyboard'}
			projectType={'App'}
			technologies={'Web Components, Vanilla CSS'}
			source={'https://github.com/gridlocdev/drum-machine'}
			website={'https://drum-machine.gridloc.dev'}
			screenshot={'/screenshots/drum-machine.png'}
		/>
		<ProjectCard
			title={'Static Site Generator'}
			description={'My custom-built Static Site Generator'}
			projectType={'Tool'}
			technologies={'C#, .NET 6, Markdown, Markdig'}
			source={'https://github.com/gridlocdev/custom-static-site-generator'}
			website={null}
			screenshot={'/screenshots/developer-notes.png'}
		/>
		<ProjectCard
			title={'Cube Slide'}
			description={'A jump-less 3D platformer video game where a cube slides around obstacles to make its way to the goal'}
			technologies={'Unity (Game Engine)'}
			projectType={'Game'}
			source={'https://github.com/gridlocdev/cube-slide'}
			website={'https://gridlocdev.github.io/cube-slide'}
			screenshot={'/screenshots/cube-slide.png'}
		/>
		<!-- TODO: Create image for Chess Clock -->
		<ProjectCard
			title={'Chess Clock'}
			description={'A web-based clock application for timing games of Chess'}
			technologies={'Angular, Angular Material'}
			projectType={'App'}
			source={'https://github.com/gridlocdev/chess-clock'}
			website={'https://gridlocdev.github.io/chess-clock'}
			screenshot={'/screenshots/chess-clock.png'}
		/>
		<!-- TODO: Create image for Text Adventure -->
		<ProjectCard
			title={'Text Adventure'}
			description={'Create, play, import or export a text adventure game story.'}
			technologies={'Vue 2, Vuetify, VueX'}
			projectType={'App'}
			source={'https://github.com/gridlocdev/text-adventure'}
			website={'https://gridlocdev.github.io/text-adventure'}
			screenshot={'/screenshots/text-adventure.png'}
		/>
		<ProjectCard
			title={'Portfolio (this site)'}
			description={"The website that you're currently on! A portfolio website that gives a list of the projects, articles, and other details about myself as a developer."}
			projectType={'Tool'}
			technologies={'Vanilla JS, Bootstrap'}
			source={'https://github.com/gridlocdev/developer-portfolio-website'}
			website={'https://gridloc.dev'}
			screenshot={null}
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
