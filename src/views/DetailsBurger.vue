<template>
  <div class="details-burger-container">
    <BurgerCard 
      :id = this.$store.state.burgers.current[0].id
      :nombre= this.$store.state.burgers.current[0].nombre
      :ingredientes= this.$store.state.burgers.current[0].ingredientes
      :calorias= this.$store.state.burgers.current[0].calorias
    />
    <div class="buttons-modifier-container flex">
        <button class="btn btn-primary mt-4 px-4 m-1 " v-on:click="$event => editBurger(this.$store.state.burgers.current[0])">Editar</button>
        <button class="btn btn-secondary mt-4 m-1" v-on:click="backHome">Regresar</button>
        <button class="btn btn-danger mt-4 m-1" v-on:click="deleteBurger">Eliminar</button>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BurgerCard from '../components/BurgerCard.vue';

export default {
  name: "DetailsBurger",
  
  props: [],
  
  setup() {
    return {
    
    };
  },

  data () {
    return {
      currentEdit: {
        id: "",
        nombre: "",
        ingredientes: "",
        calorias: ""
      }
    };
  },
  
  components: { BurgerCard },
  
  methods: {
    
    backHome() {
      this.$router.push('/hamburguesas')
    },

    ...mapActions('burgers', ['setCurrentBurger']),

    async editBurger(burger) {
      this.$router.push(`/hamburguesas/editar/${burger.id}`)
      //this.setCurrentBurger({'commit': 'commit', data: burger})
      
    },

    deleteBurger() {
        console.log(this.$store.state)
    },
  },

  computed: {
      ...mapGetters('burgers', ['getSaludo'])
  },

  created () {
    this.currentEdit = this.$store.state.burgers.current[0]
  }
}
</script>

<style lang="css">
.details-burger-container{
  background: url(../assets/background.jpg);
  height: 100vh;
  text-align: -webkit-center;
  padding-top: 3%
}
</style>