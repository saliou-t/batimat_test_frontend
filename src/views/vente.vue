<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <v-container>
     
      <v-toolbar color="#EEEEEE" flat>
        <v-toolbar-title>Liste de mes ventes</v-toolbar-title><v-spacer></v-spacer><span color="grey">Reçents</span>
      </v-toolbar>
      <v-row>
        <v-col cols="8" sm="6" v-for="produit in produits" v-bind:key="produit.reference">
          <v-card flat class="rounded-lg mx-5 mes_carte">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img :src=produit.image></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Ref: {{produit.reference}}
                </v-list-item-title>
                <v-list-item-subtitle class="mt-1">Designation : <br> {{ produit.designation }}</v-list-item-subtitle>
                <strong class="mt-3">
                  Unité : {{produit.prix_unitaire}} F
                </strong>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-row>
                <v-col cols="12" sm="6" class="mt-1 ">
                  <strong class="ml-3">Quantité disponible</strong><br>
                  <v-item-group mandatory class="mt-n1 ">
                    <v-container>
                      <v-row class="">
                        <v-col cols="4" md="4">
                          <strong>{{produit.quantite_disponible}}</strong>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>
                <v-col cols="8" sm="5" class=" ">
                  <strong class="ml-3">Quantité souhaitée</strong><br>
                  <v-item-group mandatory class="mt-n1">
                    <v-text-field v-model=produit.quantite_initiale label="" max="4" append-outer-icon="add" @click:append-outer="increment(produit)" prepend-icon="remove" @click:prepend="decrement"></v-text-field>
                    
                  </v-item-group>
                </v-col>

              </v-row>

            </v-card-actions>
            
            <v-card-actions>

              <v-btn color="#ff0000" block dark class="withoutupercase mb-2" @click="addToCart(produit)">Ajouter au panier</v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
        
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'Home',
  data () {
     return {
       foo: 0,
       quantite_dispo: 5,
       produits: [
        {
          reference: 'PROD001',
          quantite_disponible: 10,
          prix_unitaire: 20,
          image:"https://via.placeholder.com/150",
          designation: 'Produit 1',
          quantite_initiale:0
        },
        {
          reference: 'PROD002',
          quantite_disponible: 5,
          image:"https://via.placeholder.com/150",
          prix_unitaire: 30,
          designation: 'Produit 2',
          quantite_initiale:0
        },
        {
          reference: 'PROD003',
          quantite_disponible: 8,
          image:"https://via.placeholder.com/150",
          prix_unitaire: 15,
          designation: 'Produit 3',
          quantite_initiale:0
        },
        {
          reference: 'PROD004',
          quantite_disponible: 20,
          image:"https://via.placeholder.com/150",
          prix_unitaire: 10,
          designation: 'Produit 4',
          quantite_initiale:0
        }
      ],
      searchInput: "",
      resulat_recherche:[]
     }
  },

  computed: {
    searchResults() {
      
      if (!this.searchInput) {
        return [];
      }
      return this.produits.filter(produit => produit.reference.toLowerCase() == this.searchInput.toLowerCase());
    },
  },

  methods: {

    increment (produit) {
      if (produit.quantite_disponible > produit.quantite_initiale ) {
        produit.quantite_initiale = parseInt(produit.quantite_initiale,10) + 1 
      }
    },

    addToCart(produit_ajoute) {

      let produit = {
        'reference': produit_ajoute.reference,
        'quantite_disponible': produit_ajoute.quantite_dispo,
        'prix_unitaire': produit_ajoute.prix_unitaire,
        'image': produit_ajoute.image,
        'designation': produit_ajoute.designation,
        'quantite': produit_ajoute.quantite_initiale
      }

      this.$store.commit('addToCart', produit)
    },

    decrement () {
      this.foo = parseInt(this.foo,10) - 1
    }
  }
}
</script>
<style>


.v-card.borderme {
  border: 2px solid #ff0000 !important;
}

.v-card.borderout {
  border: 1px solid gray !important;
}
</style>
