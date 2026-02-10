<script>
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';

	let { project, current, total, onclose, onprev, onnext } = $props();

	// Split technologies and projectType into pill tags
	let pills = $derived([
		project.projectType,
		...project.technologies.split(',').map((t) => t.trim())
	]);

	// Label for the website button based on project type
	let websiteLabel = $derived(
		project.projectType === 'Game'
			? 'Play'
			: project.projectType === 'App'
				? 'Open App'
				: 'Visit Website'
	);

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			onclose();
		} else if (event.key === 'ArrowLeft' && onprev) {
			onprev();
		} else if (event.key === 'ArrowRight' && onnext) {
			onnext();
		}
	}

	function handleBackdropClick() {
		onclose();
	}

	// Lock body scroll while modal is open
	$effect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Backdrop -->
<div
	class="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm flex items-center justify-center p-4"
	onclick={handleBackdropClick}
	onkeydown={(e) => e.key === 'Enter' && handleBackdropClick()}
	transition:fade={{ duration: 150 }}
	role="button"
	tabindex="-1"
>
	<!-- Panel -->
	<div class="max-w-4xl w-full rounded-xl bg-secondary ring-1 ring-text/20 flex flex-col md:flex-row overflow-hidden relative">
		<!-- Close button -->
		<button
			class="absolute top-3 right-3 z-10 bg-background/60 rounded-full w-8 h-8 flex items-center justify-center text-text hover:bg-background/80 transition-colors cursor-pointer"
			onclick={onclose}
			aria-label="Close"
		>
			&times;
		</button>

		<!-- Left: screenshot -->
		{#if project.screenshot}
			<img
				src="{base}{project.screenshot}"
				alt="Screenshot of {project.title}"
				class="md:w-1/2 w-full object-cover max-h-[300px] md:max-h-none"
			/>
		{/if}

		<!-- Right: details -->
		<div class="flex flex-col gap-4 p-6 md:p-8 flex-1">
			<h2 class="text-2xl font-bold">{project.title}</h2>

			<!-- Pill tags -->
			<div class="flex flex-wrap gap-2">
				{#each pills as pill}
					<span class="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold">
						{pill}
					</span>
				{/each}
			</div>

			<p class="text-sm leading-relaxed opacity-90">{project.description}</p>

			<!-- Buttons -->
			<div class="flex flex-wrap gap-3 mt-auto">
				{#if project.source}
					<a
						href={project.source}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 rounded-full border-2 border-accent px-6 py-2 text-sm font-bold transition hover:scale-95 hover:opacity-60"
					>
						<span>Source</span>
						<img
							src="{base}/icons/github-mark.svg"
							alt="GitHub"
							class="h-5 w-5"
						/>
					</a>
				{/if}
				{#if project.website}
					<a
						href={project.website}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 rounded-full bg-accent bg-gradient-to-tl from-secondary px-6 py-2 text-sm font-bold brightness-125 transition hover:scale-95 hover:brightness-100"
					>
						<span>{websiteLabel}</span>
						<img
							src="{base}/icons/link.svg"
							alt="link icon"
							class="h-5 w-5"
						/>
					</a>
				{/if}
			</div>
		</div>

		<!-- Prev / Next navigation -->
		<div class="absolute bottom-3 right-3 flex items-center gap-2">
			<button
				class="bg-background/60 rounded-full w-9 h-9 flex items-center justify-center text-text text-lg transition-colors {onprev ? 'hover:bg-background/80 cursor-pointer' : 'opacity-30 cursor-not-allowed'}"
				onclick={(e) => { e.stopPropagation(); if (onprev) onprev(); }}
				disabled={!onprev}
				aria-label="Previous project"
			>
				&#8249;
			</button>
			<span class="text-xs text-text/70 tabular-nums">{current} / {total}</span>
			<button
				class="bg-background/60 rounded-full w-9 h-9 flex items-center justify-center text-text text-lg transition-colors {onnext ? 'hover:bg-background/80 cursor-pointer' : 'opacity-30 cursor-not-allowed'}"
				onclick={(e) => { e.stopPropagation(); if (onnext) onnext(); }}
				disabled={!onnext}
				aria-label="Next project"
			>
				&#8250;
			</button>
		</div>
	</div>
</div>
