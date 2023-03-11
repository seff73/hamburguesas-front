<template>
  <div class="burgers-view">

    <BackgComponent />
    <div class="flex-end">
      <h1 class="title-burger-view">MENU </h1>
      <button type="button" class="btn btn-primary mx-3" v-on:click="createBurger"> Agregar </button>
      <button type="button" class="btn btn-success" v-on:click="getBurgers"> GET DATA </button>
    </div>
    <div class="box-container">
      <BurgerCard v-for="burger in this.$store.state.burgers.allBurgers" :key="burger.id" :id="burger.id"
        :nombre="burger.nombre.toUpperCase()" :ingredientes="burger.ingredientes?.toString().replaceAll(',', ', ')"
        :calorias="burger.calorias" />
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import BackgComponent from '../components/BackgComponent.vue';
import BurgerCard from '../components/BurgerCard.vue';

export default {
  name: "Burgers",
  components: { BackgComponent, BurgerCard },
  data() {
    return {

    }
  },

  methods: {
    ...mapActions('burgers', ['getBurgers']),

    ...mapActions('burgers', ['setCurrentBurger']),

    createBurger() {
      const burger = {
        id: '',
        nombre: '',
        ingredientes: "",
        calorias: '',
      }

      this.setCurrentBurger({ 'commit': 'commit', data: burger })
      this.$router.push('/hamburguesas/crear')

    },

  },



  created() {
    try {
      this.getBurgers();
    } catch (error) {
      console.log(error)
      alert('algo salió mal, intenta de nuevo')
    }



  },
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
