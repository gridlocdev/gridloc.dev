<script>
	export let title;
	export let description;
	export let website;
</script>

<article>
	<h2 class="text-2xl transition hover:cursor-pointer hover:text-primary hover:underline">
		<a href={website} target="_blank">{title}</a>
	</h2>
	<p class="opacity-75 pt-2">{description}</p>
</article>
