<script lang="ts">
	import { fly } from 'svelte/transition';

	import Navbar from './Navbar.svelte';
	import Hero from './Hero.svelte';
	import ProjectList from './ProjectList.svelte';
	import ArticleList from './ArticleList.svelte';
	import AboutMe from './AboutMe.svelte';
</script>

<header>
	<Navbar />
</header>
<main
	class="py-10 mb-10"
	in:fly={{ x: -10, duration: 500, delay: 500 }}
	out:fly={{ x: 5, duration: 500 }}
>
	<Hero />
	<ProjectList />
	<ArticleList />
	<AboutMe />
</main>
