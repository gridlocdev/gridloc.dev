<script>
	export let title;
	export let description;
	export let website;
</script>

<article class="group transition hover:scale-105 hover:cursor-pointer">
	<a href={website} target="_blank">
		<h2 class="text-xl transition group-hover:text-primary md:text-2xl">
			{title}
		</h2>
		<p class="pt-2 text-base opacity-75 md:text-lg">{description}</p>
	</a>
</article>
