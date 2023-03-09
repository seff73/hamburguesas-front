<template>
  <div class="form-container">
    <form v-on:submit.prevent="hello()">
      <label for="name">Nombre:</label><br/>
      <input type="text" name="name" v-model="newBurger.name">
      <br/>
      <br/>

      <label for="ingredients">Ingredientes:</label><br/>
      <input type="text" name="ingredients" v-model="newBurger.ingredients">
      <br/>
      <br/>

      <label for="calories">Calorías:</label><br/>
      <input type="number" name="calories" v-model="newBurger.calories">
      <br/>
      <br/>

      <button type="submit">Crear</button>
      <button type="cancel" v-on:click="$event => cancelar()">Cancelar</button>

    </form>
  </div>
</template>

<script>


export default {
    name: "BurgerForm",
    data () {
        return {
            newBurger: {
                name: "",
                ingredients: "",
                calories: ""
            }
        }
    },
    methods: {
        hello() {
            console.log('helllooo')
        },
        cancelar() {
            this.$router.push('/hamburguesas')
        }
    }
    
}
</script>

<style lang="css">
  .form-container {
    border: solid #DDDD;
    color: #ffFf;
  }
  .form-container input{
    border-radius: .3rem;
  }
</style>