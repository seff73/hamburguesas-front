<template>
  <div class="create-container">
    
    <BurgerCard class="create-preview-card"
      :key="this.$store.state.burgers.current[0].id" 
      :id="this.$store.state.burgers.current[0].id"  
      :nombre="this.editCurrent.nombre.toUpperCase()" 
      :ingredientes=this.editCurrent.ingredientes
      :calorias=this.editCurrent.calorias
      :current="this.$store.state.burgers.current"
    />
    <BurgerForm  />
    
  </div>
</template>

<script>
import BurgerCard from '../components/BurgerCard.vue';
import BurgerForm from '../components/BurgerForm.vue';


export default {
  setup() {
    return {};
  },
  components: { BurgerCard, BurgerForm },

  data() {
    return {
      editCurrent: {
        id: "",
        nombre: "",
        ingredientes: "",
        calorias: "",

      }
    }
  },
  
  created () {
    this.editCurrent = this.$store.state.burgers.current[0]
  }
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