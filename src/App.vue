<template>
  <v-app>
    <SideBar />
    <Panier />
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
  
    //
  }),
};
</script>
