<template>
  <div class="burgers-view">
    
    <BackgComponent />
    <div class="flex-end">
      <h1 class="title-burger-view">MENU </h1>
      <button type="button" class="btn btn-primary" v-on:click="createBurger"> Agregar </button>
      <button type="button" class="btn btn-primary" v-on:click="getBurgers2"> GETDATA </button>
    </div>
    <div class="box-container">
      <BurgerCard v-for="burger in this.$store.state.burgers.allBurgers" 
        :key="burger.id" 
        :id="burger.id"  
        :name="burger.nombre.toUpperCase()" 
        :ingredients="burger.ingredientes?.toString().replaceAll(',', ', ')"
        :calories="burger.calorias" 
      />
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
      ...mapActions('burgers', ['getBurgers2']),
      createBurger() {
            this.$router.push('/hamburguesas/crear')
      },
      async getBurgers() {
        await this.$http
                .get('https://hamburguesas-back.elevadev.cl/burger/')
                .then(res => { this.allBurgers = res.data}, err => console.error(err))
        
                console.log(this.allBurgers)
                console.log()
      },
      

    },

    
    
    created() {
      //console.log(this.getBurgers2())
      this.getBurgers2
      //console.log(this.$store.state.burgers.allBurgers);
   
    
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
