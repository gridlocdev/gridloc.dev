<script>
	import ArticleCard from './ArticleListItem.svelte';
</script>

<h2 id="articles" class="mt-10 p-10 text-center text-4xl font-bold">Articles</h2>
<div class="mx-10 grid grid-cols-1 gap-10 md:text-start lg:grid-cols-3">
	<ArticleCard
		title="Developer Notes"
		description="Notes about miscellaneous industry-related topics"
		website="https://notes.gridloc.dev"
	/>
	<ArticleCard
		title="Blog"
		description="A website where I put short-form guides for things I can't find on the Internet"
		website="https://listed.to/@gridlocdev"
	/>
	<ArticleCard
		title="C# Developer Roadmap"
		description="A beginner's roadmap of concepts to learn the C# programming language"
		website="https://github.com/gridlocdev/csharp-learning-roadmap"
	/>
	<ArticleCard
		title="Lua Tutorial"
		description="An introductory article for the Lua programming language"
		website="https://gridlocdev.github.io/lua-beginners-guide"
	/>
</div>
