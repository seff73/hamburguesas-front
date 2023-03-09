<template>
  <div class="create-container">
    
    <BurgerCard class="create-preview-card"/>
    <BurgerForm />
    
  </div>
</template>

<script>
import BurgerCard from '../components/BurgerCard.vue';
import BurgerForm from '../components/BurgerForm.vue';


export default {
  setup() {
    return {};
  },
  components: { BurgerCard, BurgerForm }
}
</script>

<style lang="css">
  .create-container {
    background: url(../assets/background.jpg);
    height: 100vh;
    padding: 3% 8%;
    display: grid;
    justify-content: center;
    grid-template-rows: repeat(3, 1fr);
    gap: 2rem;
  }
  .create-preview-container {
    display: block;
  }
  .create-preview-card{
    max-width: 289px;
  }
</style>