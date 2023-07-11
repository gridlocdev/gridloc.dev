<script>
	export let title;
	export let description;
	export let source;
	export let slug;
</script>

<article class="flex max-w-md flex-col gap-5 rounded bg-background p-5">
	<h2>{title}</h2>
	<p>{description}</p>
	<div class="flex">
		{#if source}
			<a
				href={source}
				class="h-10 w-10 flex-grow justify-center rounded-full bg-primary text-center align-middle"
			>
				<img src="/image.png" alt="github logo" />
			</a>
		{/if}
		<a href="/projects/{slug}" class="rounded-full bg-accent px-6 py-3"> Check it out </a>
	</div>
</article>
