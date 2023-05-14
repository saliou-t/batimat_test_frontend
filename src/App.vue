<template>
  <v-app>
    <SideBar v-if="isAuthicate"/>
    <Panier v-if="isAuthicate" />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import SideBar from './components/SideBar'
  import Panier from './components/Panier'
  
  
  export default {
    components: {
        SideBar,
        Panier
    },
    
  name: 'App',

  data: () => ({
  
    isAuthicate:false,
  }),

  methods: {
    checkIsAuthenticate(){
      let user = localStorage.getItem('user')
      if (user) {
        this.isAuthicate = true
      }
    }
  },
  mounted() {
    this.checkIsAuthenticate();
  },
};
</script>
