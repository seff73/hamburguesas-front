import axios from "axios";



export default {
  namespaced: true,


  state: {
    allBurgers: [
      {
          id: 9999,
          nombre: 'CHESSE BURGER',
          ingredientes: [ 'queso', 'tomate', 'lechuga', 'jamón' ],
          calorias: 322
      },
      
      {
          id: 22229,
          nombre: 'MEAL BURGER',
          ingredientes: [ 'steak', 'tomate', 'lechuga', 'onion' ],
          calorias: 433
      },
    ],   
  },

  getters: {
    allBurgers(state) {
        console.log('getterssss')
      return state.allBurgers;  
    },
    
    getSaludo(){
        try {
            console.log('hola saludos')
            
        } catch (error) {
            console.log(error)
        }
    },
  },

  mutations: {   
    loadBurgers(state, data) {
      console.log(state.allBurgers, data)
      state.allBurgers.push(...data)
    }     
  },

  actions: {
    async getBurgers2({ commit }) {
      let data;
      await axios
              .get('https://hamburguesas-back.elevadev.cl/burger/')
              .then(res => { data = res.data}, err => console.error(err))
    
      commit('loadBurgers', data);
    },
      
    
    getSaludo(){
        try {
            console.log('hola saludos')
            
        } catch (error) {
            console.log(error)
        }
    },
   },

  modules: {

  },

}