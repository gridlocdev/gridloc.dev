<script>
	export let data;
	import { fly } from 'svelte/transition';
</script>

<div
	class="m-10 grid h-[80dvh] grid-cols-2 place-content-center bg-secondary p-5"
	in:fly={{ x: -10, duration: 500, delay: 500 }}
	out:fly={{ x: 5, duration: 500 }}
>
	<div class="mx-auto p-5">
		<!--	TODO: Add project screenshot and link	to static file -->
		<div class="w-max-[500px] h-[500px] bg-primary text-5xl font-bold">insert screenshot here</div>
	</div>
	<article class="flex flex-col gap-5 p-5">
		<h2 class="text-5xl">{data.title}</h2>
		<p class="text-2xl">{data.description}</p>
		<p class="text-2xl text-opacity-10">{data.technologies}</p>
		<div class="my-5 flex text-[1.5rem]">
			<input type="button" class="mx-auto w-min rounded-full bg-accent px-10 py-5" value="github" />
			<input
				type="button"
				class="mx-auto w-min rounded-full bg-accent px-10 py-5"
				value="visit app"
			/>
		</div>
		<div class="my-5 flex text-[1.5rem]">
			<a href="../" class="mx-auto w-min rounded-full bg-accent px-10 py-5">Return</a>
		</div>
	</article>
</div>

<div>{data.title}</div>
<div>{data.description}</div>
<div>{data.technologies}</div>
<div>{data.source}</div>
<div>{data.website}</div>
