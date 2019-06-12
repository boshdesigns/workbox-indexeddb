<script>
	// Setup image variables
	let imageValues = ['assets/images/characters/cannonbolt_enhanced.png', 'assets/images/characters/cannonbolt.png', 'assets/images/characters/diamondhead_enhanced.png', 'assets/images/characters/diamondhead.png', 'assets/images/characters/four_arms_enhanced.png', 'assets/images/characters/four_arms.png', 'assets/images/characters/grey_matter_enhanced.png', 'assets/images/characters/grey_matter.png', 'assets/images/characters/heatblast_enhanced.png', 'assets/images/characters/heatblast.png', 'assets/images/characters/hex.png', 'assets/images/characters/overflow.png', 'assets/images/characters/overflow_enhanced.png', 'assets/images/characters/shock_rock_enhanced.png', 'assets/images/characters/shockrock.png', 'assets/images/characters/stinkfly_enhanced.png', 'assets/images/characters/stinkfly.png', 'assets/images/characters/upgrade.png', 'assets/images/characters/wildvine_enhanced.png', 'assets/images/characters/wildvine.png', 'assets/images/characters/xlr8_enhanced.png', 'assets/images/characters/xlr8.png'];
  let imageAlt = "this is an image";
</script>

<style>
  .images img {
    max-width: 33.3%;
  }
</style>

<div class="images">
	{#each imageValues as src}
	  <img {src} alt="test" />
	{/each}
</div>
