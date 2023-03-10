<template>
  <div class="form-container">
    <form @submit="hello">
      <div class="mb-0">

        <p>
          <input 
            type="text" 
            name="nombre" 
            placeholder="Nombre" 
            autocomplete="off" 
            class="form-control"
            v-model="state.newBurger.nombre"
          
          >
          <span class="error-message" v-if="v$.newBurger.nombre.$error">
            {{ v$.newBurger.nombre.$errors[0].$message }}
          </span>
        </p>
      
        <p>
          <input class="form-control"
            type="text" name="ingredientes" placeholder="Ingredientes" autocomplete="off"
            v-model="state.newBurger.ingredientes"
          >
          <span class="error-message" v-if="v$.newBurger.ingredientes.$error">
            {{ v$.newBurger.ingredientes.$errors[0].$message }}
          </span>
        </p>
      
        <p>
          <input  class="form-control"
            type="number" name="calorias" placeholder="Calorías" autocomplete="off"
            v-model="state.newBurger.calorias"
          >
          <span class="error-message" v-if="v$.newBurger.calorias.$error" >
            {{ v$.newBurger.calorias.$errors[0].$message }}
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
    props: ['current'],
    setup () {
      const state = reactive ({
         newBurger: {
                nombre: "",
                ingredientes: [],
                calorias: ""
        }
      })

      const rules = computed(() => {
        return {

          newBurger: {
            nombre: {
              required, 
              maxLength: maxLength(254),
            },
            ingredientes: {
              required,
              maxLength: maxLength(254),
            },
            calorias: {
              required,
              minValue: minValue(0),
              maxValue: maxValue(100000)
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
        await this.v$.$validate();
        if(this.v$.$errors.length) {
          console.log(this.v$.$errors)
          console.log('validate failed')
      
        }else {
          alert('heyheyhey')
        }
          
      },
      cancelar() {
        this.$router.push('/hamburguesas')
      },
    },

    created () {
      this.state.newBurger = this.$store.state.burgers.current[0]
    }
}
</script>

<style lang="css">
  .form-container {
    color: #ffFf;
  }
  .form-container input{
    border-radius: .3rem;
  }
  .error-message{
    color: #E32;
  }
</style>