<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <v-container>

      <v-toolbar color="#EEEEEE" flat>
        <v-toolbar-title>Liste de mes paiements</v-toolbar-title><v-spacer></v-spacer><span color="grey">Globle : {{ paiement.length }}</span>
      </v-toolbar>
      <v-row>
        <v-col cols="8" sm="12" v-for="paiement in paiement" v-bind:key="paiement.reference">
          <v-card flat class="rounded-lg mx-5 mes_carte">
            <v-list-item three-line>
              <div class="row">
                <div class="col-4">
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      N°: {{ paiement.numero }}
                    </v-list-item-title>
                  </v-list-item-content>
                </div>
                <div class="col-4">
                  <v-list-item-content>
                    <v-list-item-subtitle class="mt-3">Vente enregistrée le : {{
                      $dayjs(paiement.created_at).format('YYYY-MM-DD') }}</v-list-item-subtitle>
                    <strong class="mt-3">
                      Total : {{ paiement.montant_total }} F
                    </strong>
                  </v-list-item-content>
                </div>
                <div class="col-4">
                  <v-list-item-content>
                    <v-list-item-subtitle class="mt-3">Paiement enregistré le : {{ paiement.paiement.numero
                    }}</v-list-item-subtitle>
                    <strong class="mt-3">
                      <!-- Total : {{paiement.montant_to
                            tal}} F -->
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

                    <v-col cols="12" sm="12" class="mt-1 " v-for="ligne in paiement.lignes" :key="ligne.id">
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
                        <div class=""><strong>Total : {{ paiement.montant_total }} </strong></div>
                      </div>
                    </div>
                  </div>

                </v-row>
              </v-container>

            </v-card-actions>
            <div class="row d-flex justify-content-end">
              <div class="col">

              </div>
            </div>
            <v-card-actions>

              <v-btn color="green" block dark class=" withoutupercase mb-2" @click="Imprimer(paiement, paiement.lignes)">Cliquez pour
                imprimer</v-btn>

            </v-card-actions>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </v-app>
</template>
  
<script>
import { getListeVentesPayedByUser } from '../services/Vente/vente.service';
import { finalisePaiement } from '../services/paiement/paiement.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


export default {
  name: 'Home',
  data() {
    return {
      foo: 0,
      quantite_dispo: 5,
      paiement: [

      ],
      searchInput: "",
      resulat_recherche: []
    }
  },

  created() {
    this.getVentes()
  },

  methods: {

    getVentes() {
      this.paiement = getListeVentesPayedByUser()
    },

    removeVenteInListe(id) {

      const index = paiement.findIndex(v => v.id === id);
      paiement.splice(index, 1);

    },
    Imprimer(paiement, lignes) {
      console.log(lignes);
      pdfMake.vfs = pdfFonts.pdfMake.vfs;

      const linesTable = [];
      linesTable.push(["Référence produit", "Quantité","Px unitaire"])

        // Parcourir les lignes de produits et les ajouter à la table des lignes
        lignes.forEach((ligne) => {
          linesTable.push([
            ligne.produit.reference,
            ligne.quantite,
            ligne.produit.prix_unitaire
          ]);
        });

       
      const docDefinition = {
        content: [
          { text: 'Informations de paiement', style: 'header' , alignment:"center"},
          { text: `Méthode de paiement : WAVE`, style: 'subheader' },
          { text: `Total : ${paiement.montant_total}`, style: 'subheader' },

          { text: 'Information de la paiement', style: 'subheader' },
         
          {
            table: {
              headerRows: 1,
              body: [
                ['Méthode de paiement', 'Montant'],
                ['WAVE', paiement.montant_total],
              ],
              alignment: 'center'
            }
          },
          { text: 'Lignes de produits', style: 'subheader' },
            {
              table: {
                body: linesTable
              },
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10] 
          },
          subheader: {
            fontSize: 14,
            bold: true,
            margin: [0, 5, 0, 5] // Marge inférieure pour séparer les sous-titres
          }
        }
      };

      const pdfDocGenerator = pdfMake.createPdf(docDefinition);
      pdfDocGenerator.download('myDocument.pdf');

    },

    finaliseVente(paiement) {
      finalisePaiement(paiement)
      this.removeVenteInListe(paiement.id)

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
  