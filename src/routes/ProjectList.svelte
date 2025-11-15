<script>
	import ProjectListItem from './ProjectListItem.svelte';

	// valid ProjectType values: 'App', 'Tool', 'Game'
</script>

<h2 id="projects" class="mt-12 p-12 text-center text-3xl font-bold">Projects</h2>
<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
	<ProjectListItem
		title="wor6le"
		description="A word-guessing game inspired by Wordle, but with 6 letters and arrows to give more clues for finding the right words."
		projectType="Game"
		technologies="Flutter"
		website="https://gridloc.dev/games/wor6le/"
		source="https://github.com/gridlocdev/wor6le"
		screenshot="/screenshots/wor6le.png"
	/>
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
		website="https://gridloc.dev/apps/drum-machine"
		screenshot="/screenshots/drum-machine.png"
	/>
	<ProjectListItem
		title="Cube Slide"
		description="A jump-less 3D platformer video game where a cube slides around obstacles to make its way to the goal"
		technologies="Unity (Game Engine)"
		projectType="Game"
		source="https://github.com/gridlocdev/cube-slide"
		website="https://gridloc.dev/games/cube-slide"
		screenshot="/screenshots/cube-slide.png"
	/>
	<ProjectListItem
		title="Chess Clock"
		description="A web-based clock application for timing games of Chess"
		technologies="Angular, Angular Material"
		projectType="App"
		source="https://github.com/gridlocdev/chess-clock"
		website="https://gridloc.dev/apps/chess-clock"
		screenshot="/screenshots/chess-clock.png"
	/>
</div>
