
import axios from 'axios'

const BASE_URL = 'http://localhost:8001/api/'

class auth{
    login(user) {
        return axios
        .post(BASE_URL + 'login',{
          email: user.email,
          password: user.password
        })
        .then(response => {
    
          console.log(response.data)
    
          if(response.data.access_token){
            localStorage.setItem('user', JSON.stringify(response.data));  
          }
          
           return response.data;
        })
    }
    logout() {
      localStorage.removeItem('user');
    }

}

export default new auth();