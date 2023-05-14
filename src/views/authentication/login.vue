<template>
  <section >
    <div class="backgruond"></div>
    <v-main class="d-flex justify-center align-center ">
      <v-col cols="10" lg="4" class="mx-auto ">
        <v-card class="pa-4 blog">
          <div class="text-center">
            <v-avatar size="150" color="white">
                <img src="https://via.placeholder.com/100" alt="">
            </v-avatar>
            <h1 class="texte my-5">SDV Authentification</h1>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Email"
                color="#458133"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="passwordShow?'text':'password'"
                label="Password"
                color="#458133"
                placeholder="Password"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
              />
              <v-switch label="Se souvenir de moi" color="#ff0000"></v-switch>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="#ff0000">
                <span class="white--text px-8">connexion</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
    
  </section>
</template>

<script>
import Api from '../../services/Api';
import store from '../../store';


export default {
  name: 'App',

  data: () => ({
    message: '',
    
    
    passwordShow:false,
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'Champ requis',
      v => /.+@.+\..+/.test(v) || 'Email non valide',
    ],
    passwordRules: [
      v => !!v || 'Champ requis',
      v => (v && v.length >= 8) || 'Mot de passe minimum 8 caratères',
    ],
  }),

  methods:{
    submitHandler(){
      if (this.$refs.form.validate()){
        this.loading = true
        this.login(this.email, this.password)
       
      }
    },

    setUser(user){
      localStorage.setItem('user',JSON.stringify(user))
      localStorage.setItem('id',user.id)
      
      store.commit('setUser', user)
      store.commit('setUsername', user.username)

      this.isAuthicate = true
      this.loading = false
    },

    goto(to) {
      this.$router.go(this.$router.push(to));
		},

    showAlert(msg, color){
      this.snackbarColor = color
      this.message = msg
      this.loading = false
      this.snackbar = true
    },

    login (userLogin, userPassword){
      Api()
        .post('/login', {
          email: userLogin,
          password: userPassword,
        })
        .then(response => {
          this.setUser(response.data.user)
          this.goto("/")
        })
        .catch(error => {
          console.log(error);
          this.showAlert("Login et/ou mot de passe incorrect !", "red")
          setTimeout(()=> {
            this.loading = false
            this.snackbarColor='red'
          }, 900)
      })
    },
  }
};
</script>
<style>
  .backgruond{
    /* background-image: url(../assets/imgs/sidebar/mbay.jpeg) !important; */
    background-position: right;
    /* height: 300px; */
    padding: 0px 0px;
    background-size: cover;
    width: 100%;
    display: block;
    position: absolute;
    /* top: -10px; */

    background-size: cover;
  }
  .texte{
    color: #ff0000;
    font-size: 30px;

  }
  .blog{
    border-left: 6px solid #ff0000 !important;
    border-radius: 0% !important;
  }
  
</style>