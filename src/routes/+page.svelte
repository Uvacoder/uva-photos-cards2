<script>
	/** @type {import('./$types').PageData} */
	export let data;

	console.log(data.images);
</script>

<div class="max-w-insta mx-auto">
	<h1>Images</h1>

	<div class="grid grid-cols-3 gap-7">
		{#each data.images as image}
			<div class="aspect-square">
				{#if /.*\.mp4/.test(image[1])}
					<video src={image[1]} class="w-full h-full object-cover" />
				{:else}
					<img src={image[1]} class="w-full h-full object-cover" />
				{/if}
			</div>
		{/each}
	</div>
</div>
