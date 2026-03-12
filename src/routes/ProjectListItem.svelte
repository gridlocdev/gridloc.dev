<script>
	import { base } from '$app/paths';

	let { title, description, screenshot, onclick } = $props();
</script>

<button class="aspect-square w-full overflow-hidden rounded-lg relative group cursor-pointer" {onclick}>
	{#if screenshot}
		<img
			src="{base}{screenshot}"
			alt="Screenshot of {title}"
			class="absolute inset-0 h-full w-full object-cover"
		/>
	{/if}

	<!-- Hover description overlay (desktop only) -->
	<div
		class="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-[opacity,backdrop-filter] backdrop-blur-none group-hover:backdrop-blur-sm flex items-center justify-center px-6 py-12"
	>
		<p class="text-sm text-center">{description}</p>
	</div>

	<!-- Mobile: bottom bar with title + View -->
	<div
		class="md:hidden absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent px-4 py-3"
	>
		<span class="block text-base font-bold text-center"><span class="bg-background/70 px-3 py-1 rounded-full">{title}</span></span>
		<span class="absolute right-4 bottom-3 text-xs opacity-70">Tap to View</span>
	</div>

	<!-- Desktop: title chip bottom-right -->
	<span class="hidden md:block absolute bottom-3 right-3 bg-background/60 px-3 py-1 rounded-full text-sm font-bold">
		{title}
	</span>
</button>
