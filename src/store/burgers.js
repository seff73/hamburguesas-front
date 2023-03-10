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
    
    current: [
      {
        id: '',
        nombre: '',
        ingredientes: "",
        calorias: '',
      },
    ],
  },

  getters: {
    allBurgers(state) {
        console.log('getterssss')
      return state.allBurgers;  
    },
    
  },

  mutations: {   
    loadBurgers(state, data) {
      if(state.allBurgers.length > data.length ) {
        return
      }else {
        state.allBurgers.push(...data)
      }
    },
    
    setCurrent(state, payload) {
      const { id, nombre, ingredientes, calorias } = payload.data
      state.current[0] = { id, nombre, ingredientes, calorias }
      
    },


  },

  actions: {
    async getBurgers2({ commit }) {
      let data;
      await axios
              .get('https://hamburguesas-back.elevadev.cl/burger/')
              .then(res => { data = res.data}, err => console.error(err))
    
      commit('loadBurgers', data);
    },
    
    setCurrentBurger({ commit }, data) {
      commit('setCurrent', data);
    },
    
   },

  modules: {

  },

}