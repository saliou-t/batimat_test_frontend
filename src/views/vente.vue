<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <v-container>
     
      <v-toolbar color="#EEEEEE" flat>
        <v-toolbar-title>Liste de mes ventes</v-toolbar-title><v-spacer></v-spacer><span color="grey">Reçents</span>
      </v-toolbar>
      <v-row>
        <v-col cols="8" sm="12" v-for="vente in ventes" v-bind:key="vente.reference">
          <v-card flat class="rounded-lg mx-5 mes_carte">
            <v-list-item three-line>
             <div class="row">
              <div class="col-6">
                <v-list-item-content>
                <v-list-item-title class="text-h6">
                  N°: {{vente.numero}}
                </v-list-item-title>
              </v-list-item-content>
              </div>
              <div class="col-6">
                <v-list-item-content>
                <v-list-item-subtitle class="mt-3">Vente enregistrée le :  {{ $dayjs(vente.created_at).format('YYYY-MM-DD')  }}</v-list-item-subtitle>
                <strong class="mt-3">
                  Total : {{vente.montant_total}} F
                </strong>
              </v-list-item-content>
              </div>
             </div>
             
            </v-list-item>

            <v-card-actions>
              <v-container>
              <v-row class="">
                <div class="col-12 mb-3">

                  <span>Lignes</span>
                </div>
                <div class="row ml-3">
                  
                  <v-col cols="12" sm="12" class="mt-1 " v-for="ligne in vente.lignes" :key="ligne.id">
                    <div class="row">
                      <div class="col-6">

                        <strong class="">Produit ID : {{ligne.produit_id}}</strong><br>

                      </div>
                      <div class="col-6">
                        <strong>Quantite : {{ligne.quantite}}</strong>
                        
                      </div>
                    </div>
                      <hr>
                    </v-col>
                </div>
                  
                </v-row>
              </v-container>

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
