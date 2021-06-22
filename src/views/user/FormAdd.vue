<template>
    <div class="user">
        <div class="container">
            <div class="row">
                <div class="col-12"><h1>Formulário</h1></div>
                <div class="col-12 text-start">
                    <div class="form-group p-2">
                        <label for="name"><b>Nome</b></label>
                        <input type="text" name="name" v-model="name" id="name" placeholder="Nome" class="form-control rounded-0">
                    </div>
                    <div class="form-group p-2">
                        <label for="email"><b>E-mail</b></label>
                        <input type="email" name="email" v-model="email" id="email" placeholder="E-mail" class="form-control rounded-0">
                    </div>
                    <div class="form-group p-2">
                        <label for="password"><b>Senha</b></label>
                        <input type="password" name="password" v-model="password" id="password" placeholder="Senha" class="form-control rounded-0">
                    </div>
                    <div class="form-group p-2"> 
                        <button class="btn w-100 btn-success rounded-0" @click="add"><i class="far fa-save"></i> Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    const BASE_URL = 'http://localhost:8000/api/'
    const JWTToken = JSON.parse(localStorage.getItem('user'));

export default {

    
    name: 'Form',
    data () {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods : {
        add(){ 

            return axios
            .post(BASE_URL + 'usuario' ,
                   { name: this.name,
                    email: this.email,
                    password: this.password
                    },
                    {headers: {"Authorization" : `Bearer ${JWTToken.access_token}`}

            }).then(response => {
                if(response.data != ""){
                    alert('dados inseridos.')
                    
                  this.$router.replace('usuario') 
                }else{
                    alert('errou ao inserir')
                }
            })
        }
    }
}
</script>
