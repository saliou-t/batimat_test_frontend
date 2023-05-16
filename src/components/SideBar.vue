<template>
  <v-navigation-drawer v-model="drawer" app color="white" mini-variant mini-variant-width="90">
      <v-avatar class="d-block text-center mx-auto mt-4" size="40">
          <v-icon color="#ff0000">fas fa-codepen</v-icon>
      </v-avatar>
      <v-list flat class="mt-4">
          <v-list-item-group v-model="selectedItem">
              <v-list-item v-for="(item, i) in items" :key="i" active-class="border" :ripple="false" @click="goto(item)">
                  <v-list-item-content>
                      <v-icon >{{ item.icon }}</v-icon>
                      <v-list-item-subtitle align="center"  class="mt-3 caption">{{ item.text }}</v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
          </v-list-item-group>
      </v-list>
      <div style="position: absolute; cursor: pointer; bottom: 20px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;" @click="deconnexion()">
          <v-icon>fas fa-sign-out-alt</v-icon><br><span class="caption" >Déconnexion</span>
      </div>
  </v-navigation-drawer>
</template>

<script>
export default {
    
    data: () => ({
        selectedItem: 0,
        drawer: null,
        items: [
            {icon: 'fas fa-home', text:'Accueil', path_name:'Home', path:'/'},
            {icon: 'fas fa-hamburger', text:'Vente', path_name:'Vente', path:'/vente'},
            {icon: 'fas fa-wallet', text:'Paiement',path_name:'Paiement',path: '/paiement'},
        ],
    }),
    methods: {
        goto(item){
            if (this.$route.path !== item.path){
                this.$router.push({ name: item.path_name })
            }
        },

        deconnexion(){
            localStorage.removeItem('user')
            localStorage.removeItem('user_token')
            router.go('/login')
        }
    },
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