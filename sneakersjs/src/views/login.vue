<template>
      
           
               <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 mt-3 py-2">
            <div class="flex-1 flex justify-between items-center">
              <a class="flex items-center space-x-3 rtl:space-x-reverse">
                      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sneakers</span>
                  </a>
          </div>

           <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
          <input class="hidden" type="checkbox" id="menu-toggle" />

          <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
         <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      <li>
                        <a @click="pushhome" href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">home</a>
                      </li>
                      <li>
                        <a @click="pushproduct" href="#" id="product" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">product</a>
                      </li>
                      <li>
                        <a  @click="pushcollection" href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Collection</a>
                      </li>
                      <li>
                        <a @click="pushwishlist" href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Wishlist</a>
                      </li>
             
          
                    </ul>
            </nav>
          </div>

          </header>

    <div id="taille">
        <form id="login-form">
          <h3>Login</h3>

          <label id="cc" for="identifier">identifier</label>
          <input id="identifier" type="text" placeholder="identifier" />

          <label id="cc" for="password">password</label>
          <input id="password" type="password" placeholder="password" />

          <button class="submit" v-on:click="login"> login </button>
          <div class="creercompte">
            <router-link to="/register">You don't have account ? please <u>create account</u> </router-link>
          </div>
          <div id="erreur"><p id="erreurlogin" class="erreurlogin"> </p></div>

        </form>
    </div>
 
   <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4 flex justify-center">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sneakers</span>

                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    <a class="hover:underline">Sneakers</a>. All Rights Reserved.
                </span>
            </div>
        </footer>


    
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
                    if (status == 200) {
                        const identifier = response.data.user.username; 
                        const userId = response.data.user.id;
                        const userTokens = response.data.jwt; 
                        router.push({
                            path: `/home/${userId}/${identifier}/${userTokens}`
                        });
                    }
                })
                    .catch(error => {
                        if (error.response) {
                            if (error.response.status === 400) {
                                document.querySelector("#erreurlogin").innerHTML = "the password or the email is invalid";
                            }
                            if (error.response.status === 429) {
                                document.querySelector("#erreurlogin").innerHTML = "an error occurred, please try later";
                            }
                        } else {
                            console.error('Error:', error);
                        }
                    })
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

#cc{
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
.creercompte{
  margin-top: 5px;
  margin-left: 3px;

}

a{
    text-decoration:none;
}

.creercompte a {
    color: #000000;
    font-size: 14px;
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

u{
    color: black;
}

div#taille{
    height: 49em;
}

#menu-toggle:checked + #menu {
        display: block;
      }





</style>


