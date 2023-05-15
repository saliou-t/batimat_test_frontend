<template>
    <v-navigation-drawer app color="white" right width="290">
        <v-list subheader two-line class="mt-1">
            <v-list-item>
                <v-list-item-avatar rounded>
                    <v-img src="https://via.placeholder.com/100"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-subtitle>{{user.name}}</v-list-item-subtitle>
                    <v-list-item-title>user</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-badge bordered overlap color="red" dot>
                        <v-icon>far fa-bell</v-icon>
                    </v-badge>
                </v-list-item-action>
            </v-list-item>
        </v-list>
        <strong class="ml-3">Panier</strong>
        <v-list subheader two-line class="mt-1" v-for="produit in panier" :key="produit.id">
            <v-list-item>
                <v-list-item-avatar rounded color="grey lighten-4">
                    <v-img src="2.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="subtitle-2">{{ produit.reference }}</v-list-item-title>
                    <v-list-item-subtitle>x{{ produit.quantite }}
                        <v-btn plain color="red" small>
                            <v-icon right @click="supprimerDuPanier(produit)">mdi-trash-can</v-icon>
                        </v-btn>
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action class="caption">{{ produit.prix_unitaire }} F</v-list-item-action>
            </v-list-item>
            <v-toolbar color="rgba(0,0,0,0)" flat>
                <strong>Sous total</strong><v-spacer></v-spacer><strong>{{produit.sousTotal}} F</strong>
            </v-toolbar>
            <hr>
        </v-list>
        <v-toolbar color="rgba(0,0,0,0)" flat class="mt-1">
            <span>Nombre produit(s)</span><v-spacer></v-spacer><span>{{ panier.length }}</span>
        </v-toolbar>
        <v-divider class="mx-4"></v-divider>
        <v-toolbar color="rgba(0,0,0,0)" flat>
            <strong>Total</strong><v-spacer></v-spacer><strong>{{sousTotal}} F</strong>
        </v-toolbar>
        <div class="div">
            <div class="col">
                <strong class="">Paiement</strong>
                <v-item-group mandatory class="mt-4">
                    <v-container>
                        <v-row justify="center">
                            <v-col cols="4" md="4" v-for="moyen in moyensDePaiement" :key="moyen.id">
                                <v-item v-slot="{ active, toggle }">
                                    <v-card color="#F6EFEF" :class="active ? 'borderme' : ''"
                                        class="d-flex align-center rounded-lg" dark height="70" @click="toggle" flat>
                                        <v-row @click="selectMoyen(moyen)">
                                            <v-col cols="12" md="12">
                                                <v-list-item three-line class="text-center mt-1">
                                                    <v-list-item-content>
                                                        <div>
                                                            <v-icon :color="active ? '#ff0000' : 'black'">{{moyen.icon}}</v-icon>
                                                        </div>
                                                        <v-list-item-subtitle
                                                            :class="active ? 'brown--text' : 'black--text'"
                                                            class="mt-n2 caption">{{moyen.libelle}}</v-list-item-subtitle>
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
            </div>
        </div>
        <div class="div">
            <div class="col">
                <strong class="">Enregistrer la vente</strong>
                <v-item-group mandatory class="mt-4">
                    <div class="row mt-4">
                        <div class="col">
                            <div class="mx-3 mt-4">
                                <v-btn color="#ff0000" block dark class="widthoutupercase" @click="Enregister()">Enregister</v-btn>
                            </div>
                        </div>
                    </div>
                </v-item-group>
            </div>
        </div>

        <!-- <div class="row mt-4">
            <div class="col">
                <div class="mx-3 mt-4">
                    <v-btn color="#ff0000" block dark class="widthoutupercase">Imprimer ticket</v-btn>
                </div>

            </div>
        </div> -->
    </v-navigation-drawer>
</template>

<script>
import { saveVente } from '../services/Vente/vente.service';

export default {
    data() {
        return {
            sousTotal :0,
            user: JSON.parse(localStorage.getItem('user')),
            moyensDePaiement:[
                {id:1, libelle: "Espece", key : "ESPECE",icon:"fas fa-money-bill-wave"},
                {id:2, libelle: "Carte Bancaire", key:"CARTE_BANCAIRE", icon:"fas fa-credit-card"},
                {id:3, libelle: "Chèque", key:"CHEQUE", icon:"fas fa-qrcode"}
            ],

            selectedMoyenPaiement:"ESPECE",
        }
    },
    computed: {
        panier() {
            let panier = this.$store.state.panier
            for (const item in panier) {
                this.sousTotal+= panier[item].prix_unitaire
            }
            return this.$store.state.panier
        }
    },
    methods: {
        supprimerDuPanier(produit) {
            this.$store.commit('removeFromCart', produit)
        },

        Enregister(){
            let panier = this.$store.state.panier
             saveVente(panier, this.selectedMoyenPaiement)
            
        },

        selectMoyen(moyen){
            
            this.selectedMoyenPaiement = moyen.key
        }
    }
}
</script>

<style>
.v-card.borderme {
    border: 2px solid #704232 !important;
}

.col-12 {
    padding: 5px !important;
}

.v-btn.widthoutupercase {
    text-transform: none !important;
}
</style>