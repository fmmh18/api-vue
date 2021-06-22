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
                        <label for="date_conclusion"><b>Data Conclusão</b></label>
                        <input type="date" name="date_conclusion" id="date_conclusion" class="form-control rounded-0" v-model="date_conclusion"> 
                    </div>
                    <div class="form-group p-2">
                        <label for="status"><b>Status</b></label>
                        <input type="text" name="status" v-model="status" id="status" placeholder="Status" class="form-control rounded-0">
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
            date_conclusion: '',
            status: ''
        }
    },
    methods : {
        add(){ 

            return axios
            .post(BASE_URL + 'tarefa' ,
                   { name: this.name,
                    date_conclusion: this.date_conclusion,
                    status: this.status
                    },
                    {headers: {"Authorization" : `Bearer ${JWTToken.access_token}`}

            }).then(response => {
                if(response.data != ""){
                    alert('dados inseridos.')
                    
                  this.$router.replace('tarefa') 
                }else{
                    alert('errou ao inserir')
                }
            })
        }
    }
}
</script>
