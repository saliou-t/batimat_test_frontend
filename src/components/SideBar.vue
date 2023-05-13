<template>
  <v-navigation-drawer v-model="drawer" app color="white" mini-variant mini-variant-width="90">
      <v-avatar class="d-block text-center mx-auto mt-4" size="40">
          <v-icon color="#ff0000">fas fa-codepen</v-icon>
      </v-avatar>
      <v-list flat class="mt-4">
          <v-list-item-group v-model="selectedItem">
              <v-list-item v-for="(item, i) in items" :key="i" active-class="border" :ripple="false">
                  <v-list-item-content>
                      <v-icon v-text="item.icon"></v-icon>
                      <v-list-item-subtitle align="center" v-text="item.text" class="mt-3 caption"></v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
          </v-list-item-group>
      </v-list>
      <div style="position: absolute; bottom: 20px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;">
          <v-icon>fas fa-sign-out-alt</v-icon><br><span class="caption">Déconnexion</span>
      </div>
  </v-navigation-drawer>
</template>

<script>
export default {
data: () => ({
    selectedItem: 0,
    drawer: null,
    items: [
        {icon: 'fas fa-home', text:'Accueil'},
        {icon: 'fas fa-hamburger', text:'Vente'},
        {icon: 'fas fa-wallet', text:'Paiement'},
        {icon: 'fas fa-history', text:'Stock'},
        // {icon: 'fas fa-percent', text:'Promo'},
        // {icon: 'fas fa-cog', text:'Setting'},
    ],
})
}
</script>

<style>
.border {
    margin-left: 8px;
    margin-right: 8px;
    background: #ff0000;
    /* border-radius: 2px; */
    text-decoration: none;
}
.v-list-item-group .v-list-item--active {
    color: white !important;
}
.theme--light.v-list-item--active .v-list-item__subtitle, .theme--light.v-list-item .v-list-item__action-text {
    color: white !important;
}
</style>