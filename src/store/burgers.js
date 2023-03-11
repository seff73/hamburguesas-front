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

    modals: {
      saveModal: false,
    },
  },
  
  getters: {
    allBurgers(state) {
        console.log('getterssss')
      return state.allBurgers;  
    },

    getCurrent(state) {
      return state.current
    }
    
  },

  mutations: {   
    loadBurgers(state, data) {
      if(state.allBurgers.length > data.length ) {
        return
      }else {
        state.allBurgers = (data)
      }
    },
    updateBurgers(state, data) {
      state.current[0].id = data.id

    },
    
    setCurrent(state, payload) {
      const { id, nombre, ingredientes, calorias } = payload.data
      state.current[0] = { id, nombre, ingredientes, calorias }
      
    },

    changeShowModal(state, target){
      state.modals[target] = !state.modals[target]
    }


  },

  actions: {
    async getBurgers({ commit }) {
      let data;
      await axios
              .get('https://hamburguesas-back.elevadev.cl/burger/')
              .then(res => { data = res.data}, err => console.error(err))
    
      commit('loadBurgers', data);
    },
    
    setCurrentBurger({ commit }, data) {
      commit('setCurrent', data);
    },

    async postNewBurger({ commit }, payload) {
      const newData = { 
        nombre: payload.data.nombre, 
        ingredientes: [payload.data.ingredientes],
        calorias: payload.data.calorias 
      }

      let newBurger;
      await axios
              .post('https://hamburguesas-back.elevadev.cl/burger/', newData)
              .then(res => { newBurger = res.data }, err => console.log(err))
      if(newBurger) {
        commit('updateBurgers', newBurger)
      }
      
    },

    toggleShowModal({ commit }, payload) {
      commit('changeShowModal', payload.target)
    },

    
    
   },

  modules: {

  },

}