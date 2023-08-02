<script>
	export let title;
	export let description;
	export let source;
	export let website;
</script>

<article class="flex flex-col gap-5 rounded-2xl bg-background p-10">
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
	<p class="italic">{description}</p>
</article>
