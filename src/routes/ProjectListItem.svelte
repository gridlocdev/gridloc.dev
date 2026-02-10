<script>
	import { base } from '$app/paths';

	let { title, description, screenshot, onclick } = $props();
</script>

<button
	class="aspect-square w-full overflow-hidden rounded-lg relative group cursor-pointer"
	{onclick}
>
	{#if screenshot}
		<img
			src="{base}{screenshot}"
			alt="Screenshot of {title}"
			class="absolute inset-0 h-full w-full object-cover"
		/>
	{/if}

	<!-- Title overlay (bottom-right) -->
	<span class="absolute bottom-3 right-3 bg-background/80 px-3 py-1 rounded text-sm font-bold">
		{title}
	</span>

	<!-- Hover description overlay -->
	<div class="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
		<p class="text-sm text-center">{description}</p>
	</div>
</button>
