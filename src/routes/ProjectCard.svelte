<script>
	export let title;
	export let description;
	export let technologies;
	export let source;
	export let website;
	export let screenshot;
</script>

<article class="flex flex-col gap-5 rounded-md shadow-2xl bg-text/[.1] p-10 lg:hover:scale-105 lg:transition lg:duration-300">
	<div class="flex gap-5">
		<h2 class="text-2xl font-bold">{title}</h2>
		{#if source}
			<a
				href={source}
				target="_blank"
				class="h-7 w-7 bg-icon-github bg-contain bg-no-repeat text-[0] text-opacity-0 transition-opacity hover:opacity-50"
				title="GitHub link"
			>
				GitHub link
			</a>
		{/if}
		{#if website}
			<a
				href={website}
				target="_blank"
				class="h-7 w-7 bg-icon-link bg-contain bg-no-repeat text-[0] text-opacity-0 transition-opacity hover:opacity-50"
				title="Website link"
			>
				Website link
			</a>
		{/if}
	</div>
	<p class="text-xl">{description}</p>
	{#if screenshot}
		<img src={screenshot} class="w-full" alt='(screenshot of {title})'/>
	{/if}
	<span class="italic opacity-75">Built with: {technologies}</span>

</article>
