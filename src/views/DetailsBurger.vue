<template>
  <div class="details-burger-container">
    <h1> este es el detalle </h1>
    <BurgerCard 
      id = "{{ id }} "
      name= "{{ name }}" 
      ingredients="{{ ingredients }}"
      calories="{{ calories }}" 
    />
    <div class="buttons-modifier-container flex">
        <button class="btn btn-primary mt-4 " v-on:click="editBurger">Editar</button>
        <button class="btn btn-primary mt-4" v-on:click="backHome">Regresar</button>
        <button class="btn btn-secondary mt-4" v-on:click="deleteBurger">Eliminar</button>
    </div>
</div>
</template>

<script>
import BurgerCard from '../components/BurgerCard.vue';

export default {
  name: "DetailsBurger",
  props: [ "id", "name", "ingredients", "calories" ],
  setup() {
    return {};
  },
  components: { BurgerCard },
  methods: {
    backHome() {
      this.$router.push('/hamburguesas')
    },
    editBurger(algo) {
      console.log(algo)
    },
    deleteBurger(algo) {
        console.log(algo)
    },
  },
}
</script>

<style lang="css">
.details-burger-container{
  background: url(../assets/background.jpg);
  height: 100vh;
}
</style>