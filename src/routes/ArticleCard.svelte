<script>
	export let title;
	export let description;
	export let technologies;
	export let website;
</script>

<article class="flex flex-col rounded bg-background p-5">
	<h2>{title}</h2>
	<p>{description}</p>
	{#if technologies}
		<span class="">{technologies}</span>
	{/if}
	<a href={website} target="_blank" class="rounded-full bg-accent px-6 py-3"> Link </a>
</article>
