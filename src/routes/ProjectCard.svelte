<script>
	export let title;
	export let description;
	export let technologies;
	export let source;
	export let website;
	export let screenshot;
	export let projectType;
</script>

<article class="flex flex-col gap-5 rounded-lg bg-text/[.1] p-10 shadow-2xl">
	<h2 class="text-2xl font-bold">{title}</h2>
	<p class="text-xl">{description}</p>
	{#if screenshot}
		<img src={screenshot} class="w-full" alt="(screenshot of {title})" />
	{/if}
	<span class="italic opacity-75">Built with: {technologies}</span>
	<div class="mt-auto flex justify-around">
		{#if website}
			<a
				href={website}
				target="_blank"
				class="flex cursor-pointer gap-2 rounded-full bg-accent px-9 py-3 text-xl transition hover:scale-95 hover:bg-opacity-50"
			>
				{#if projectType === 'App'}
					<span>Open App</span>
					<img src="/icons/link.svg" alt="link icon" class="h-7 w-7" />
				{:else if projectType === 'Tool'}
					<span>Visit Website</span>
					<img src="/icons/link.svg" alt="link icon" class="h-7 w-7" />
				{:else if projectType === 'Game'}
					<span>Play</span>
					<img src="/icons/play.svg" alt="play icon" class="h-7 w-7" />
				{/if}
			</a>
		{/if}
		{#if source}
			<a
				href={source}
				target="_blank"
				class="flex cursor-pointer gap-3 rounded-full bg-accent px-9 py-3 text-xl transition hover:scale-95 hover:bg-opacity-50"
			>
				<span>View Source</span>
				<img src="/icons/github-mark-white.svg" alt="GitHub icon" class="inline h-7 w-7" />
			</a>
		{/if}
	</div>
</article>
