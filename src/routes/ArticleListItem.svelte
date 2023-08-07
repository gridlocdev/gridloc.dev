<script>
	export let title;
	export let description;
	export let website;
</script>

<article class="group transition hover:scale-105 hover:cursor-pointer">
	<a href={website} target="_blank">
		<h2
			class="text-2xl transition group-hover:text-primary"
		>
			{title}
		</h2>
		<p class="pt-2 opacity-75">{description}</p>
	</a>
</article>
