<script lang="ts">
	import Cards1 from '$lib/Cards1.svelte';
	import { collections } from '$lib/constants/content';
	import Header from '$lib/header/Header.svelte';
	import Intro from '$lib/Intro.svelte';
	import { quadOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	</script>

<div class=" bg-[#F9FAFB] h-screen">
	<Header />
	<div
		class=" flex flex-col px-24 py-12 gap-12 justify-center items-center "
		in:fly={{
			duration: 300,
			x: 0,
			y: 10,
			opacity: 0.1,
			easing: quadOut
		}}
	>
		<Intro />
		<div class="w-full h-[1px] bg-[#85d990]" />
		<div class=" flex flex-col items-center w-full gap-10 lg:gap-0 lg:justify-evenly lg:flex-row">
			{#each collections as collection}
				<a class=" hover:drop-shadow-2xl" href="/vaults/bayc">
					<Cards1 content={collection} />
				</a>
			{/each}
		</div>
	</div>
</div>
