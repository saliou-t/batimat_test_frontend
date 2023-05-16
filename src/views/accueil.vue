<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <v-container>
      <v-toolbar color="rgba(0,0,0,0)" flat>
      
        <v-toolbar-title class="mt-n3">Point de Vente !</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field label="Rechercher produit par référence..."  v-model="search" @input="searchArticles" class="mt-5" color="brown" filled
          append-icon="mdi-magnify" dense solo flat background-color="red lighten-4" ></v-text-field>
      </v-toolbar>
      <v-item-group mandatory class="mt-n1">
        <v-container>
          <v-row justify="center" class="space">
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' : 'borderout'"
                  class="d-flex align-center rounded-lg mx-2" dark height="140" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center ">
                        <v-list-item-content>
                          <div align="center" justify="center">

                            <v-img src="https://via.placeholder.com/80" max-height="110" max-width="110" contain></v-img>

                          </div>
                          <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'"
                            class=" caption mt-4">Tous</v-list-item-subtitle>

                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>

                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' : 'borderout'"
                  class="d-flex align-center rounded-lg mx-2" dark height="140" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center ">
                        <v-list-item-content>
                          <div align="center" justify="center">

                            <v-img src="https://via.placeholder.com/100" max-height="90" max-width="90" contain></v-img>

                          </div>
                          <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'"
                            class=" caption mt-3">Categorie 1</v-list-item-subtitle>

                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>

                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' : 'borderout'"
                  class="d-flex align-center rounded-lg mx-2" dark height="140" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center ">
                        <v-list-item-content>
                          <div align="center" justify="center">

                            <v-img src="https://via.placeholder.com/80" max-height="80" max-width="80" contain></v-img>

                          </div>
                          <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'"
                            class=" caption mt-2">Categorie 2</v-list-item-subtitle>

                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>

                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' : 'borderout'"
                  class="d-flex align-center rounded-lg mx-2" dark height="140" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center ">
                        <v-list-item-content>
                          <div align="center" justify="center">

                            <v-img src="https://via.placeholder.com/80" max-height="80" max-width="80" contain></v-img>

                          </div>
                          <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class=" caption mt-2">Categorie 3</v-list-item-subtitle>

                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>

                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' : 'borderout'"
                  class="d-flex align-center rounded-lg mx-2" dark height="140" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center ">
                        <v-list-item-content>
                          <div align="center" justify="center">

                            <v-img src="https://via.placeholder.com/80" max-height="110" max-width="110" contain></v-img>

                          </div>
                          <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'"
                            class=" caption mt-3">Categorie 4</v-list-item-subtitle>

                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>

                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' : 'borderout'"
                  class="d-flex align-center rounded-lg mx-2" dark height="140" @click="toggle" flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center ">
                        <v-list-item-content>
                          <div align="center" justify="center">

                            <v-img src="https://via.placeholder.com/80" max-height="110" max-width="110" contain></v-img>

                          </div>
                          <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'"
                            class=" caption mt-4">Categorie 5</v-list-item-subtitle>

                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>

                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <v-toolbar color="#EEEEEE" flat>
        <v-toolbar-title>Produits</v-toolbar-title><v-spacer></v-spacer><span color="grey">Reçents</span>
      </v-toolbar>
      <div class="row" v-if="searchResults.length > 0">
          <v-col cols="8" sm="6" v-for="produit in searchResults" v-bind:key="produit.reference">
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
                    <v-item-group mandatory class="mt-n3">
                      <v-text-field v-model=produit.quantite_initiale label="" max="4" append-outer-icon="add" @click:append-outer="increment(produit)" prepend-icon="remove" @click:prepend="decrement(produit)"></v-text-field>
                      
                    </v-item-group>
                  </v-col>

                </v-row>

              </v-card-actions>
              
              <v-card-actions>

                <v-btn color="#ff0000" block dark class="withoutupercase mb-2" @click="addToCart(produit)">Ajouter au panier</v-btn>

              </v-card-actions>
            </v-card>
          </v-col>
        </div>
      <v-row v-else>
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
                  <v-item-group mandatory class="mt-n3">
                    <v-text-field v-model=produit.quantite_initiale label="" max="4" append-outer-icon="add" @click:append-outer="increment(produit)" prepend-icon="remove" @click:prepend="decrement(produit)"></v-text-field>
                    
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

const { default: Api } = require('../services/Api');
export default {
  name: 'Home',
  data () {
     return {
      produit: 0,
      quantite_dispo: 5,
      produits:[],
      search: "",
      searchResults:[]
     }
  },

 
  created() {
    this.getProduits()
  },

  
  methods: {

    searchArticles() {
      // Recherche des articles correspondant à la recherche de l'utilisateur
      this.searchResults = this.produits.filter(produit => {
        return produit.reference.toLowerCase().startsWith(this.search.toLowerCase());
      });

      if(this.searchResults.length <= 0 ){
        this.searchResults = []
      }
    },

    getProduits(){
      let produits = []
      Api()
      .get('/produit')
      .then(response => {
        let data =  response.data;
        for (const item in data) {
          produits.push(data[item])
        }
        
      })

      this.produits = produits
    },

    increment (produit) {
      if (produit.quantite_disponible > produit.quantite_initiale ) {
        produit.quantite_initiale = parseInt(produit.quantite_initiale,10) + 1 
      }
    },

    addToCart(produit_ajoute) {
     
      let produit = {
        'id':produit_ajoute.id,
        'reference': produit_ajoute.reference,
        'quantite_disponible': produit_ajoute.quantite_dispo,
        'sousTotal': produit_ajoute.prix_unitaire * produit_ajoute.quantite_initiale,
        'prix_unitaire': produit_ajoute.prix_unitaire,
        'image': produit_ajoute.image,
        'designation': produit_ajoute.designation,
        'quantite': produit_ajoute.quantite_initiale
      }
      produit_ajoute.quantite_initiale = 1

      this.$store.commit('addToCart', produit)
    },

    decrement (produit) {
      produit.quantite_initiale = parseInt(produit.quantite_initiale,10) - 1 
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
