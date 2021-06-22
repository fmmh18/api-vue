<template>
<div class="user"> 
    <div class="container">
        <div class="row">
              <div class="col-12"><h1>Usuário</h1></div>
              <div class="col-12 text-end"><router-link class="btn btn-primary rounded-0" to="/usuario-adicionar">Adicionar</router-link>
              <div class="col-12 pt-3 text-start">
                    <table class="table table-striped table-bordered">
                        <thead class="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th colspan="2" class="text-center">Ações</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr v-for="user in users" :key="user.id">
                                    <td>{{user.id}}</td>
                                    <td>{{user.name}}</td>
                                    <td>{{user.email}}</td>
                                    <td class="text-center"> 
                                        <a :href="'#/usuario-editar/'+ user.id " class="btn btn-info"><i class="fas fa-edit"></i></a>
                                    </td>
                                    <td class="text-center">
                                        <a href="#" @click="deleteUser(user.id)" class="btn btn-danger"><i class="far fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
              </div>
              </div>
        </div>
    </div>
</div>
</template>
<script> 

import axios from 'axios'

const JWTToken = JSON.parse(localStorage.getItem('user'));
const BASE_URL = 'http://localhost:8001/api/' 

export default {
    name: "Usuário",
    data () {
        return { 
             users: [],
        }
    },
    computed: {
        loggedIn() {
        return this.$store.state.auth.status.loggedIn;
        },
    }, 
    mounted () { 
        
            axios
            .get(BASE_URL + 'usuario',{ headers: {"Authorization" : `Bearer ${JWTToken.access_token}`} })
            .then(response => {
                this.users = response.data
            }) 
    },
    methods: {
        deleteUser(id)
        {
             return axios
            .delete(BASE_URL + 'usuario/'+id,{ headers: {"Authorization" : `Bearer ${JWTToken.access_token}`} })
            .then(response => { 
                if(response.data.id != ""){
                    alert('usuário deletado.')
                }else{
                    alert('erro ao deletar.')
                }

            }) 
        }
    }
}
</script>
