<script>
	// Import components
	import UsersXP from '../UsersXP.svelte';

	// Setup variables
	let mainTitle = "PWA Test";
</script>

<style>
  h1 {
		color: #FFFFFF;
		font-size: 2em;
		font-weight: 300;
		display: inline-block;
		margin-top: 0;
		margin-bottom: 10px;
	}
	header {
		background-color: #2a2a2a;

		-webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.25);
		-moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.25);
		box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.25);

		padding: 15px;

		text-align: center;
		position: relative;
		z-index: 10;
	}
	@media screen and (min-width: 640px) {
    header {
			padding: 50px 25px;
      text-align: left;
    }

		h1 {
			margin-bottom: 0;
		}
  }
</style>

<header>
	<div class="grid grid--container">
		<h1>{mainTitle}</h1>
		<UsersXP/>
	</div>
</header>
