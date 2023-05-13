import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    
    panier: []
  },
  mutations: {
    
    addToCart(state, produit) {
      state.panier.push(produit)
      console.log(state.panier);
    },

      updateCartProductQuantity(state, { produitId, quantite }) {
      const cartProduct = state.cart.find(p => p.id === produitId);
      
      if (cartProduct) {
        cartProduct.quantite = quantite;
      }
    },
    
    removeFromCart(state, index) {
      state.panier.splice(index, 1)
    },
    
    clearCart(state) {
      state.panier = []
    },

    initialiserPanier (state) {
      const panier = JSON.parse(localStorage.getItem('panier'))
      if (panier) {
        state.panier = panier
      }
    },    

  },

  actions: {
    updateCartProductQuantity({ commit }, { produitId, quantite }) {
      commit('updateCartProductQuantity', { produitId, quantite });
    },

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
