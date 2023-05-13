import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    
    panier: []
  },
  mutations: {
    
    addToCart(state, product) {
      state.panier.push(product)
      console.log(state.panier);
    },
    
    removeFromCart(state, index) {
      state.panier.splice(index, 1)
    },
    
    clearCart(state) {
      state.panier = []
    }
  },

  actions: {
    ajouterProduitAuPanier ({ commit }, produit) {
      commit('ajouterProduitAuPanier', produit)
    },
    
    supprimerProduitDuPanier ({ commit }, produit) {
      commit('supprimerProduitDuPanier', produit)
    }
  },

  getters: {
    
    cartTotal(state) {
      return state.panier.length
    }
  }
})

export default store
