<template>
  <div class="burgers-view">
    
    <BackgComponent />
    <div>
      <h1 class="title-burger-view">MENU </h1>
    </div>
    <div class="box-container">
      <BurgerCard />
      <BurgerCard />
      <BurgerCard />
      <BurgerCard />
      <BurgerCard />
      <BurgerCard />
    </div>
  </div>
</template>

<script>
import BackgComponent from '../components/BackgComponent.vue';
import BurgerCard from '../components/BurgerCard.vue';

export default {
    name: "Burgers",
    components: { BackgComponent, BurgerCard }
}
</script>

<style lang="css">
  .burgers-view {
    height: 100%;
    position: relative;
    z-index: 111111;
    background-color: black;
    text-align: -webkit-center;
  }

  .title-burger-view {
    position: relative;
    z-index: 999;
    color: #eacf4f;
    padding: 2rem;
  }

  .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 3rem;
    background: url(../assets/background.jpg);
    background-attachment: fixed;
    justify-items: center;
    padding: 5% 10% 5% 10%;
    max-width: 1440px;
  }
</style>
