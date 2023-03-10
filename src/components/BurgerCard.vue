<template>
  <div class="burger-card" v-on:click="$event => editBurger({ id, name, ingredients, calories })">
    <img src='../assets/product-1.png' alt="product_1"/>
    <div class="contenty">
      <h4 class="fs-5">{{ name }}</h4>
      <h5 class="fs-6">Ingredientes:</h5>
      <p>{{ ingredients }}</p>
      <p>{{ calories }} Calorías</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BurgerCard',
  props: ['id', 'name', 'ingredients', 'calories' ],
  data () {
      return {
         
      }
  },
  methods: {
    editBurger(burger) {
      this.$router.push(`/hamburguesas/editar/${burger.id}`)  
    }
  }
}
</script>

<style lang="css">
  .burger-card {
    position: relative;
    z-index: 99;
    text-align: center;
    
    border: solid #E32;
    border-radius: 27px;
    cursor: pointer;
  }
  .burger-card:hover{
    transform: translateY(.2rem);
    transition: transform .10s ease
  }

  img {
    height: 10rem;
    margin-top: .4rem;
  }
  img:hover{
    transform: translateY(-.7rem);
    transform: scale(1.4, 1.4);
    transition: transform .7s ease;
  }
  .contenty {
    margin: 0rem 1rem 1.4rem;
    color: #fff;
    
  }
  h4 {
    margin-top: 0;
    margin-bottom: .8rem;
    
  }
  h5 {
    margin-top: 0rem;
    margin-bottom: 0rem;
    color: #EEE
    
  }
  p{
    margin-top: 3%;
    margin: 3%  ;
    color: #DDDD;
  }


</style>