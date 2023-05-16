<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <v-container>

      <v-toolbar color="#EEEEEE" flat>
        <v-toolbar-title>Liste de toutes mes ventes : payés et non payés</v-toolbar-title><v-spacer></v-spacer><span color="grey">Global : {{ ventes.length }} ventes</span>
      </v-toolbar>
      <v-row>
        <v-col cols="8" sm="12" v-for="vente in ventes" v-bind:key="vente.reference" class="mt-4">
          <v-card flat class="rounded-lg mx-5 mes_carte">
            <v-list-item three-line>
              <div class="row">
                <div class="col-4">
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      N°: {{ vente.numero }}
                    </v-list-item-title>
                  </v-list-item-content>
                </div>
                <div class="col-4">
                  <v-list-item-content>
                    <v-list-item-subtitle class="mt-3">Vente enregistrée le : {{
                      $dayjs(vente.created_at).format('YYYY-MM-DD') }}</v-list-item-subtitle>
                    <strong class="mt-3">
                      Total : {{ vente.montant_total }} 
                    </strong>
                  </v-list-item-content>
                </div>
                <div class="col-4" v-if="vente.paiement.etat == 'Termine'">
                  <v-list-item-content>
                    <v-list-item-subtitle class="mt-3">Paiement validé le : {{$dayjs(vente.paiement.date_enregistrement).format('YYYY-MM-DD') }} </v-list-item-subtitle>
                    <strong class="mt-3">
                      Numéro paiement : {{ vente.paiement.numero }}
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
                        <div class=" col-6 col-md-3">

                          <strong class="">Produit ID : {{ ligne.produit.reference }}</strong><br>

                        </div>
                        <div class=" col-6 col-md-3">
                          <strong>Px unitaire : {{ ligne.produit.prix_unitaire }} </strong>

                        </div>
                        <div class=" col-6 col-md-3">
                          <strong> x {{ ligne.quantite }}</strong>

                        </div>
                        <div class=" col-6 col-md-3">
                          <strong>Sous total : {{ ligne.quantite * ligne.produit.prix_unitaire }} </strong>
                        </div>
                      </div>
                      <hr>
                    </v-col>
                    <div class="row d-flex align">
                      <div class="col-3"></div>
                      <div class="col-3"></div>
                      <div class="col-3"></div>

                      <div class="col-3 my-3">
                        <div class=""><strong>Total : {{ vente.montant_total }} </strong></div>
                      </div>
                    </div>
                  </div>

                </v-row>
              </v-container>

            </v-card-actions>

            <v-card-actions  v-if="vente.paiement.etat == 'Enregistre'">

              <v-btn color="green"  :disabled="loader" :loading="loader" block dark class="withoutupercase mb-2"
                @click="finaliseVente(vente)">Finaliser</v-btn>

              </v-card-actions>
            </v-card>
            <div class="text-center">
              <v-dialog v-model="loader" :scrim="false" persistent width="500">
                <v-card color="#ff0000">
                  <v-card-text class="">
                    <span style="color: white" class="my-4">
                      Enregistrement en cours...
      
                    </span>
                    <v-progress-linear indeterminate color="white" class="my-4"></v-progress-linear>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>
            <v-row justify="center">
              <v-dialog v-model="dialogForm" persistent width="1024">
      
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Informations supplementaires à la vente</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="Nom complet bénéciaire" v-model="beneficiaire_nom_complet" color="#ff0000" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="Numéro téléphone bénéficiaire" v-model="beneficiaire_telephone" color="#ff0000"
                            hint="Téléphone"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="Adresse bénéficiaire " v-model="beneficiaire_adresse"  color="#ff0000" hint="Adresse actuelle du bénéficiaire" persistent-hint
                            required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="Email" v-model="beneficiaire_email" required color="#ff0000"></v-text-field>
                        </v-col>
                        <!-- <v-col cols="12" sm="6">
                          <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Interests" multiple></v-autocomplete>
                        </v-col> -->
                      </v-row>
                    </v-container>
                    <small class="mt-5">*Champs obligatoires</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#ff0000" variant="text" @click="dialogForm = false">
                      Annuler
                    </v-btn>
                    <v-btn color="green" variant="text" @click="save(vente)">
                      Valider
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
        </v-col>

      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { getListeVentesNotPayedByUser, getAllUserVentes, finaliseVente } from '../services/Vente/vente.service';

import { finalisePaiement } from '../services/paiement/paiement.service';

export default {
  name: 'Home',
  data() {
    return {
      foo: 0,
      beneficiaire_nom_complet:'',
      beneficiaire_adresse:'',
      beneficiaire_telephone:'',
      beneficiaire_email:'',
      dialogForm: false,
      loader: false,
      quantite_dispo: 5,
      ventes: [

      ],
      searchInput: "",
      resulat_recherche: []
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
  },

  watch: {
    loader(val) {
      if (!val) return

      setTimeout(() => (
        this.loader = false,
        this.dialogForm = true
      ), 2000)
    },
  },

  methods: {

    // verficationMontantPaiement(vente){
    //   console.log(vente);
    //   // Somme des montants des paiements
    //   let totalPaiements = 0;
    //   for (let paiement of vente.paiement) {
    //     totalPaiements += paiement.montant;
    //   }

    //   // Comparaison avec le montant total de la vente
    //   if (totalPaiements >= vente.montant_total) {
    //     // Le montant total des paiements est égal ou supérieur au montant de la vente
    //     // Code pour imprimer le ticket de caisse et terminer la vente
    //     alert('couverture ok')

    //   } else {
    //     // Le montant total des paiements est inférieur au montant de la vente
    //     // Affichage d'un message d'erreur ou désactivation du bouton d'impression
    //     alert('couverture pas ok')

    //   }

    // },

    save(vente){
      this.dialogForm = false

      let beneficiare = {
        nomComplet : this.beneficiaire_nom_complet,
        adresse: this.beneficiaire_adresse,
        telephone: this.beneficiaire_telephone
      }
      
      finalisePaiement(vente, beneficiare)
      
    },
    getVentes() {
      this.ventes = getAllUserVentes()
    },

    removeVenteInListe(id) {

      const index = ventes.findIndex(v => v.id === id);
      ventes.splice(index, 1);
    },

    finaliseVente(vente) {

      this.loader = true
      // finalisePaiement(vente)
      // this.removeVenteInListe(vente.id)

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
