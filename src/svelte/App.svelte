<script>
	// Import components
	import ExperienceBox from './components/ExperienceBox.svelte';
	import Header from './components/generic/Header.svelte';
	import PlaceholderImage from './components/generic/PlaceholderImage.svelte';

	// Setup test variables
	let xpValues = [5, 10, 20];
</script>


<Header/>
<PlaceholderImage/>
<main role="main">
	<div class="grid grid--container">
		<div class="grid__blocks">
			{#each xpValues as xp}
				<ExperienceBox value={xp} />
			{/each}
		</div>
	</div>
</main>
