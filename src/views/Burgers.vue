<template>
  <div class="burgers-view">
    
    <BackgComponent />
    <div class="flex-end">
      <h1 class="title-burger-view">MENU </h1>
      <button type="button" class="btn btn-primary" v-on:click="createBurger"> Agregar </button>
      <button type="button" class="btn btn-primary" v-on:click="getBurgers"> GETDATA </button>
    </div>
    <div class="box-container">
      <BurgerCard v-for="burger in this.allBurgers" :key="burger.id" 
        :id="burger.id"  
        :name="burger.name" 
        :ingredients="burger.ingredients"
        :calories="burger.calories" 
      />
    </div>
  </div>
</template>

<script>
import BackgComponent from '../components/BackgComponent.vue';
import BurgerCard from '../components/BurgerCard.vue';

export default {
    name: "Burgers",
    components: { BackgComponent, BurgerCard },
    data() {
      return {
        allBurgers: [
          {
            id: '9999',
            name: 'CHESSE BURGER',
            ingredients: 'queso, tomate, lechuga, jamón ',
            calories: '322'

          },
          {
            id: '22229',
            name: 'MEAL BURGER',
            ingredients: 'steak, tomate, lechuga, onion ',
            calories: '433'

          }
        ],
      }
    }, 
    methods: {
      createBurger() {
            this.$router.push('/hamburguesas/crear')
      },
       async getBurgers() {
        await this.$http
                .get('https://hamburguesas-back.elevadev.cl/burger/')
                .then(res => { this.allBurgers = res.data}, err => console.error(err))
        
                console.log(this.allBurgers)
      }
    },
    created() {
      console.log(' creado!, llamando a api');
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
