<script>
	export let title;
	export let description;
	export let technologies;
	export let source;
	export let website;
	export let screenshot;
	export let projectType;
</script>

<article class="flex flex-col justify-between gap-2 rounded-lg bg-text/[.1] p-10 shadow-2xl">
	<div class="flex flex-col gap-2">
		<h2 class="text-2xl font-bold">{title}</h2>
		<p class="text-xl">{description}</p>
	</div>
	<div class="flex flex-col gap-2">
		{#if screenshot}
			<img src={screenshot} class="w-full" alt="(screenshot of {title})" />
		{/if}
		<span class="italic opacity-75">Built with: {technologies}</span>
	</div>
	<div class="flex place-content-around gap-5">
		{#if source}
			<a
				href={source}
				target="_blank"
				class="bg-transparent flex w-fit cursor-pointer gap-3 rounded-full border-2 border-accent px-9 py-3 text-xl font-bold transition hover:scale-95 hover:opacity-60"
			>
				<span>View Source</span>
				<img
					src="/icons/github-mark.svg"
					alt="GitHub icon"
					class="inline h-7 w-7 justify-self-center"
				/>
			</a>
		{/if}
		{#if website}
			<a
				href={website}
				target="_blank"
				class="flex w-fit cursor-pointer items-center gap-3 rounded-full bg-accent bg-gradient-to-tl from-secondary px-9 py-3 text-xl font-bold brightness-125 transition hover:scale-95 hover:brightness-100"
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
	</div>
</article>
