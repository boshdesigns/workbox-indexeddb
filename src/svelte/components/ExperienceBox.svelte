<script>
  import { count } from '../../js/store.js';
  import { setData } from '../../js/uti/idb.js';

  // Setup export to act as a prop
	export let value;

  function increment() {
    count.update(count => count + value);

    setData($count);
  }
</script>

<style>
  .experience-box {
    background: #68b600;
    border-radius: 3px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    box-shadow: 0 1px 1px 0 rgba(60,64,67,.08), 0 1px 3px 1px rgba(60,64,67,.16);
    display: block;
    padding: 25px 20px;
    text-align: center;
    width: 100%;
    vertical-align: top;
    z-index: 1;
    margin: 10px 0;
    transition: color ease-in-out 0.3s, background ease-in-out 0.3s;
  }
  .experience-box:hover {
    background: #455456;
    color: #fff;
  }

  @media screen and (min-width: 640px) {
    .experience-box {
      margin: 40px 20px;
      width: 33.3%;
    }
  }
</style>

<button class="experience-box" on:click={increment}>
  Click to Gain {value}!
</button>
