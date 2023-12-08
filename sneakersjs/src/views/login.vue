<template>

        


        <form id="login-form">
          <h3>Login</h3>

          <label for="identifier">identifier</label>
          <input id="identifier" type="text" placeholder="identifier" />

          <label for="password">password</label>
          <input id="password" type="password" placeholder="password" />

          <button class="submit" v-on:click="login"> login </button>
          <div class="creercompte">
            <router-link to="/register">Créer un compte</router-link>
          </div>
          <div id="erreur"><p id="erreurlogin" class="erreurlogin"> </p></div>

        </form>
 



    
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
    data() {
        return {
            identifier: '',
            password: '',
            error: ''
        }
    },
    methods: {
    
      login() {
            const loginForm = document.getElementById('login-form');
            loginForm.addEventListener('submit', event => {
                event.preventDefault();
                const identifier = document.getElementById('identifier').value;
                const password = document.getElementById('password').value;
                axios.post('http://localhost:1337/api/auth/local', {
                    identifier: identifier,
                    password: password,
                })
                    .then(response => {

                        const status = response.status;
                        console.log(status)
                        if (status == 200) { // Si le status est 200 alors ça veut dire que les informations rentré par l'utilisateur sont correctes
                            router.push('/product');
                        }
                    }
                    )
                    .catch(error => {
                        if (error.response.status === 400) {
                            document.querySelector("#erreurlogin").innerHTML = "the password or the email is invalid";
                        } if (error.response.status === 429) {
                            document.querySelector("#erreurlogin").innerHTML = "an error occurred, please try later";
                        }



                        else {
                            console.log(error);
                        }
                    });
            });
        },
    }
}
</script>






<style scoped>
* {
    margin: 0;
    box-sizing: border-box;
}
body{
    background-color: #ffffff;
}

form{
    height: 600px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
}
form *{
    font-family: 'Poppins',sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}
form h3{
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
    color: #000000;

}

.label{
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
    color: #080710;
}
input#identifier, input#password {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 8px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    color: #080710;
    border: 2px solid rgba(0, 0, 0, 0.1);

}
::placeholder{
    color: #535353;
}
.submit {
    margin-top: 50px;
    width: 100%;
    background-color: #434343;
    color: #ffffff;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
.seconnecter{
  margin-top: 30px;
  display: flex;
  padding-left: 110px;

}

a{
    text-decoration:none;
}

.seconnecter a {
    color: #000000;
}


#creer {
    color: green;
    margin-left: 90px;
    margin-top: 10px;
    font-size: 20px;
}

#erreur p{
    color: #ff2121;
    margin-left: 28px;
    margin-top: 47px;
}


</style>


