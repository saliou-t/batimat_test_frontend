<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <v-container>
     
      <v-toolbar color="#EEEEEE" flat>
        <v-toolbar-title>Liste de mes ventes</v-toolbar-title><v-spacer></v-spacer><span color="grey">Reçents</span>
      </v-toolbar>
      <v-row>
        <v-col cols="8" sm="6" v-for="vente in ventes" v-bind:key="vente.reference">
          <v-card flat class="rounded-lg mx-5 mes_carte">
            <v-list-item three-line>
              <!-- <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img :src=vente.image></v-img>
              </v-list-item-avatar> -->
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  N°: {{vente.numero}}
                </v-list-item-title>
                <v-list-item-subtitle class="mt-1">Enregistrée le :  {{ $dayjs(vente.created_at).format('YYYY-MM-DD')  }}</v-list-item-subtitle>
                <strong class="mt-3">
                  Unité : {{vente.prix_unitaire}} F
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
                          <strong>{{vente.montant_total}}</strong>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </v-col>

              </v-row>

            </v-card-actions>
            
            <v-card-actions>

              <v-btn color="green" block dark class="withoutupercase mb-2" @click="finaliseVente(vente)">Finaliser</v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
        
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { getListeVentesByUser, finaliseVente } from '../services/Vente/vente.service';


export default {
  name: 'Home',
  data () {
     return {
       foo: 0,
       quantite_dispo: 5,
       ventes: [
        
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
      return this.ventes.filter(vente => vente.reference.toLowerCase() == this.searchInput.toLowerCase());
    },
  },
  created() {
    this.getVentes()
    console.log("ventes : "+getListeVentesByUser());
  },

  methods: {

    getVentes(){
      this.ventes = getListeVentesByUser()  
    },

    finaliseVente(produit_ajoute) {
      finaliseVente()
    },
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
