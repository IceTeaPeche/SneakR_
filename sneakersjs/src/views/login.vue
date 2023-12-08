<template>

        
         <nav class="bg-white border-gray-200 dark:bg-gray-900 w-screen left-0 right-0">
          <div class="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
            <a class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sneakers</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="/home" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">home</a>
                </li>
                <li>
                  <a href="/product" id="product" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><router-link to="/product">product</router-link></a>
                </li>
                <li>
                  <a href="/collection" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Collection</a>
                </li>
                <li>
                  <a href="/wishlist" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Wishlist</a>
                </li>
                <li>
                  <a href="/User" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">User</a>
                </li>
                <li>
                  <a href="/Les_réseaux" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Les réseaux</a>
                </li>
            
              </ul>
            </div>
          </div>
      
        </nav>



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


