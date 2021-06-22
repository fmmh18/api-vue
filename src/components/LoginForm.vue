<template>
  <div class="hello">
    <div class="container">
      <div class="col-4 offset-4">
        <div class="card card-body  rounded-0"> 
            <div class="form-group p-2 text-start">
              <label for="email"><b>E-mail</b></label>
              <input type="email" name="email" v-model="email" placeholder="Digite seu E-mail" class="form-control mt-2 rounded-0" />
            </div>
            <div class="form-group p-2 text-start">
              <label for="password"><b>Senha</b></label>
              <input type="password" name="password" v-model="password" placeholder="Digite sua senha" class="form-control mt-2 rounded-0" />
            </div>
            <div class="form-group p-2 text-end">
              <button class="btn btn-success rounded-0" @click="login">Acessar</button>
            </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/'

export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/home");
    }
  },
  methods: {
    login: function() {
      
      return axios
              .post(BASE_URL + 'login',{
                email: this.email,
                password: this.password
              })
              .then(response => {
 
                if(response.data.access_token){
                  localStorage.setItem('user', JSON.stringify(response.data)); 
                  this.$router.replace('home') 
                }
              })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
