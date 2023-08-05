<script>
	export let title;
	export let description;
	export let website;
</script>

<article>
	<h2 class="text-2xl transition hover:cursor-pointer hover:text-primary hover:underline">
		<a href={website} target="_blank">{title}</a>
	</h2>
	<p class="pt-2 opacity-75">{description}</p>
</article>
