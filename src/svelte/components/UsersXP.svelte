<script>
  import { count } from '../../js/store.js';
</script>

<style>
  .users-xp {
    color: #008697;
    background-color: #ffffff;
    padding: 5px;
    padding-left: 15px;
    border-radius: 25px;
    max-width: 150px;
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  .users-xp__text {
    display: inline-block;
  }

  .users-xp__count {
    color: #ffffff;
    background-color: #008697;
    border-radius: 50%;
    display: inline-block;
    padding: 5px;
    min-width: 17px;
    min-height: 17px;
    text-align: center;
  }

  @media screen and (min-width: 640px) {
    .users-xp {
      display: inline-block;
      float: right;
    }
  }
</style>

<section class="users-xp">
  <div class="users-xp__text">
    Your XP points -
  </div>
  <div class="users-xp__count">
    {$count}
  </div>
</section>
