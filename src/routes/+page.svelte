<script lang="ts">
	import { fly } from 'svelte/transition';

	import Navbar from './Navbar.svelte';
	import Hero from './Hero.svelte';
	import ProjectList from './ProjectList.svelte';
	import ArticleList from './ArticleList.svelte';
</script>

<header>
	<Navbar />
</header>
<main
	class="py-10"
	in:fly={{ x: -10, duration: 500, delay: 500 }}
	out:fly={{ x: 5, duration: 500 }}
>
	<Hero />
	<h2 id="projects" class="mt-10 p-10 text-center text-4xl font-bold">Projects</h2>
	<div class="grid md:grid-cols-1 md:gap-5 lg:grid-cols-2 lg:gap-10">
		<ProjectList />
	</div>
	<h2 id="articles" class="mt-10 p-10 text-center text-4xl font-bold">Articles</h2>
	<div class="grid grid-cols-3 gap-10">
		<ArticleList />
	</div>
	<div id="about">About Me</div>
</main>
