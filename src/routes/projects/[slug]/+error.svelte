<script>
	import { page } from '$app/stores';
</script>

<!-- TODO: Add nicer error page styling -->
<h1>{$page.status}: {$page.error.message}</h1>
<a class="flex" href="../">Return home</a>
