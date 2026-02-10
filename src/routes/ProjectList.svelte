<script>
	import ProjectListItem from './ProjectListItem.svelte';
	import ProjectModal from './ProjectModal.svelte';

	const projects = [
		{
			title: 'wor6le',
			description:
				'A word-guessing game inspired by Wordle, but with 6 letters and arrows to give more clues for finding the right words.',
			projectType: 'Game',
			technologies: 'Flutter',
			website: 'https://gridloc.dev/games/wor6le/',
			source: 'https://github.com/gridlocdev/wor6le',
			screenshot: '/screenshots/wor6le.png'
		},
		{
			title: 'Drum Machine',
			description: 'A drum machine that you can play with the keyboard',
			projectType: 'App',
			technologies: 'Web Components, Vanilla CSS',
			source: 'https://github.com/gridlocdev/drum-machine',
			website: 'https://gridloc.dev/apps/drum-machine',
			screenshot: '/screenshots/drum-machine.png'
		},
		{
			title: 'Cube Slide',
			description:
				'A jump-less 3D platformer video game where a cube slides around obstacles to make its way to the goal',
			projectType: 'Game',
			technologies: 'Unity (Game Engine)',
			source: 'https://github.com/gridlocdev/cube-slide',
			website: 'https://gridloc.dev/games/cube-slide',
			screenshot: '/screenshots/cube-slide.png'
		},
		{
			title: 'Chess Clock',
			description: 'A web-based clock application for timing games of Chess',
			projectType: 'App',
			technologies: 'Angular, Angular Material',
			source: 'https://github.com/gridlocdev/chess-clock',
			website: 'https://gridloc.dev/apps/chess-clock',
			screenshot: '/screenshots/chess-clock.png'
		},
		{
			title: 'Username Generator',
			description: 'A set of applications for creating randomly-generated usernames',
			projectType: 'Tool',
			technologies: 'C#, .NET 6, Terminal.GUI, Blazor WebAssembly, Avalonia UI',
			website: null,
			source: 'https://github.com/gridlocdev/UsernameGenerator',
			screenshot: '/screenshots/username-generator.png'
		}
	];

	let selectedIndex = $state(-1);
	let selectedProject = $derived(selectedIndex >= 0 ? projects[selectedIndex] : null);
</script>

<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
	{#each projects as project, i}
		<ProjectListItem
			title={project.title}
			description={project.description}
			screenshot={project.screenshot}
			onclick={() => (selectedIndex = i)}
		/>
	{/each}
</div>

{#if selectedProject}
	<ProjectModal
		project={selectedProject}
		current={selectedIndex + 1}
		total={projects.length}
		onclose={() => (selectedIndex = -1)}
		onprev={selectedIndex > 0 ? () => (selectedIndex--) : null}
		onnext={selectedIndex < projects.length - 1 ? () => (selectedIndex++) : null}
	/>
{/if}
