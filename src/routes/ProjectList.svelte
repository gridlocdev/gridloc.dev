<script>
	import ProjectListItem from './ProjectListItem.svelte';

	// valid ProjectType values: 'App', 'Tool', 'Game'
</script>

<h2 id="projects" class="mt-10 p-10 text-center text-3xl font-bold">Projects</h2>
<div class="grid gap-y-10 grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-10">
	<ProjectListItem
		title="Username Generator"
		description="A set of applications for creating randomly-generated usernames"
		projectType="Tool"
		technologies="C#, .NET 6, Terminal.GUI, Blazor WebAssembly, Avalonia UI"
		website={null}
		source="https://github.com/gridlocdev/UsernameGenerator"
		screenshot="/screenshots/username-generator.png"
	/>
	<ProjectListItem
		title="Drum Machine"
		description="A drum machine that you can play with the keyboard"
		projectType="App"
		technologies="Web Components, Vanilla CSS"
		source="https://github.com/gridlocdev/drum-machine"
		website="https://drum-machine.gridloc.dev"
		screenshot="/screenshots/drum-machine.png"
	/>
	<ProjectListItem
		title="Static Site Generator"
		description="My custom-built Static Site Generator"
		projectType="Tool"
		technologies="C#, .NET 6, Markdown, Markdig"
		source="https://github.com/gridlocdev/custom-static-site-generator"
		website={null}
		screenshot="/screenshots/developer-notes.png"
	/>
	<ProjectListItem
		title="Cube Slide"
		description="A jump-less 3D platformer video game where a cube slides around obstacles to make its way to the goal"
		technologies="Unity (Game Engine)"
		projectType="Game"
		source="https://github.com/gridlocdev/cube-slide"
		website="https://gridlocdev.github.io/cube-slide"
		screenshot="/screenshots/cube-slide.png"
	/>
	<ProjectListItem
		title="Chess Clock"
		description="A web-based clock application for timing games of Chess"
		technologies="Angular, Angular Material"
		projectType="App"
		source="https://github.com/gridlocdev/chess-clock"
		website="https://gridlocdev.github.io/chess-clock"
		screenshot="/screenshots/chess-clock.png"
	/>
	<ProjectListItem
		title="Text Adventure"
		description="Create, play, import or export a text adventure game story."
		technologies="Vue 2, Vuetify, VueX"
		projectType="App"
		source="https://github.com/gridlocdev/text-adventure"
		website="https://gridlocdev.github.io/text-adventure"
		screenshot="/screenshots/text-adventure.png"
	/>
	<ProjectListItem
		title="Portfolio (this site)"
		description="The website that you're currently on! A portfolio website that gives a list of the projects, articles, and other details about myself as a developer."
		projectType="Tool"
		technologies="Vanilla JS, Bootstrap"
		source="https://github.com/gridlocdev/developer-portfolio-website"
		website="https://gridloc.dev"
		screenshot={null}
	/>
</div>
