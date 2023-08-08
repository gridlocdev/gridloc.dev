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
		<h2 class="text-xl font-bold">{title}</h2>
		<p class="text-base">{description}</p>
	</div>
	<div class="flex flex-col items-center gap-2">
		{#if screenshot}
			<img src={screenshot} class="w-fit" alt="(screenshot of {title})" />
		{/if}
		<span class="text-sm italic opacity-75">Built with: {technologies}</span>
	</div>
	<div class="mt-5 flex flex-wrap place-content-around gap-5">
		{#if source}
			<a
				href={source}
				target="_blank"
				class="bg-transparent flex w-fit cursor-pointer items-center gap-3 rounded-full border-2 border-accent px-9 py-3 text-base font-bold transition hover:scale-95 hover:opacity-60"
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
				class="flex w-fit cursor-pointer items-center gap-3 rounded-full bg-accent bg-gradient-to-tl from-secondary px-9 py-3 text-base font-bold brightness-125 transition hover:scale-95 hover:brightness-100"
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
