<template>
  <div class="burger-card">
    <img src='../assets/product-1.png' alt="product_1"/>
    <div class="contenty">
      <h3 class="">CHESSE BURGER</h3>
      <h4>Ingredientes:</h4>
      <p>queso, tomate, lechuga, jamón</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BurgerCard',
  props: [  ],
  data () {

      return {}
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
    transform: scale(1.9, 1.9);
    transition: transform .7s ease;
  }
  .contenty {
    margin: 0rem 1rem 1.4rem;
    color: #fff;
    
  }
  h3 {
    margin-top: 0;
    margin-bottom: .8rem;
    
  }
  h4 {
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