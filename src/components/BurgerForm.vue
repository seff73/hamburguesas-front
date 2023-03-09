<template>
  <div class="form-container">
    <form @submit="hello">
      <div class="mb-0">

        <p>
          <input 
          type="text" name="name" placeholder="Nombre" 
          autocomplete="off" class="form-control"
          v-model="state.newBurger.name"
        >
        <span  v-if="v$.newBurger.name.$error">
          {{ v$.newBurger.name.$errors[0].$message }}
        </span>
      </p>
      
      <p>
        <input class="form-control"
        type="text" name="ingredients" placeholder="Ingredientes" autocomplete="off"
        v-model="state.newBurger.ingredients"
        >
        <span v-if="v$.newBurger.ingredients.$error">
          {{ v$.newBurger.ingredients.$errors[0].$message }}
        </span>
      </p>
      
      <p>
        <input  class="form-control"
        type="number" name="calories" placeholder="Calorías" autocomplete="off"
        v-model="state.newBurger.calories"
        >
        <span v-if="v$.newBurger.calories.$error" >
          {{ v$.newBurger.calories.$errors[0].$message }}
        </span>
      </p>
      
      <button type="submit" class="btn btn-primary mr-3 px-4">Guardar</button>
      <button type="cancel" class="btn btn-secondary m-3 " v-on:click="cancelar">Cancelar</button>
      
    </div>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { maxLength, required, minValue, maxValue } from '@vuelidate/validators';
import { computed, reactive } from 'vue';


export default {
    name: "BurgerForm",
    setup () {
      const state = reactive ({
        newBurger: {
                name: "",
                ingredients: [],
                calories: ""
        }
      })

      const rules = computed(() => {
        return {

          newBurger: {
            name: {
              required, 
              maxLength: maxLength(254),
            },
            ingredients: {
              required,
              maxLength: maxLength(254),
            },
            calories: {
              required,
              minValue: minValue(0),
              maxValue: maxValue(10000)
            }               
          }
        }
      });

      const v$ = useVuelidate(rules, state);

      return {
        state,
        v$
      }
    },
    methods: {
         async hello(e) { 
          e.preventDefault();
          alert(this.state.newBurger.name)
          await this.v$.$validate();
          if(this.v$.$errors.length) {
            console.log(this.v$.$errors)
            alert('validate failed')
            console.log(this.v$.$errors[0].$message)
          }else {
            alert('heyheyhey')
            console.log(this.v$)
          }
          
        },
        cancelar() {
          this.$router.push('/hamburguesas')
        },
    },
}
</script>

<style lang="css">
  .form-container {
    color: #ffFf;
  }
  .form-container input{
    border-radius: .3rem;
  }
</style>