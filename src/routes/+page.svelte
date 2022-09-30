<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="mx-auto w-fit">
	<div class="max-w-insta mx-4 lg:mt-28 mb-28 flex flex-col gap-7">
		<img src="/banner.jpeg" alt="" class="w-full h-auto rounded-lg" />

		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
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
</div>
