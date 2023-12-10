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
             
              
            
              </ul>
            </div>
          </div>
      
        </nav>




    <div id="taille">
        <form>
            <h3>Créer un compte</h3>

            <label class="label" for="email">Email</label>
            
            <input id="email" type="email" placeholder="email" v-model="email" @input="validateEmail" required/><p v-if="emailError">{{ emailError }}</p>
            <label class="label" for="username">username</label>
            <input id="username" class="input" type="text" placeholder="username" required />
            <label class="label" for="password">Password</label>
            <input id="password" placeholder="password" type="password" v-model="password" @input="validatePassword" required/> <p v-if="passwordError">{{ passwordError }}</p>
            <button type="button" class="submit" v-on:click="registerUser">Create account</button>
            <div class="seconnecter">
                <router-link to="/login">You have already account ? please <u>login</u></router-link>
            </div>
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
export default {
     data() {
        return {
            password: '',
            passwordError: '',
            email: '',
            emailError: '',
        };
    },

    methods: {

        validatePassword() {
            this.passwordError = '';
            if (this.password.length < 6) {
                this.passwordError = 'Le mot de passe doit contenir au moins 6 caractères.';
            } else if (!/\d/.test(this.password)) {
                this.passwordError = 'Le mot de passe doit contenir au moins un chiffre.';
            } else if (!/[a-z]/.test(this.password)) {
                this.passwordError = 'Le mot de passe doit contenir au moins une lettre minuscule.';
            } else if (!/[A-Z]/.test(this.password)) {
                this.passwordError = 'Le mot de passe doit contenir au moins une lettre majuscule.';
            }
        },

            validateEmail() {
            this.emailError = '';
            const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!check.test(this.email.toLowerCase())) {
                this.emailError = 'Veuillez entrer une adresse email valide.';
            }
        },


        registerUser() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const username = document.getElementById('username').value;
            fetch('http://localhost:1337/api/auth/local/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    this.$router.push('/login');;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }
}
</script>


<style scoped>
* {
    margin: 0;
    box-sizing: border-box;
}

div#taille{
    height: 49em;
}

body {
    background-color: #ffffff;
}

form {
    height: 600px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
}

form * {
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

form h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
    color: #000000;

}

.label {
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
    color: #080710;
}

input#username,
input#password,
input#email {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 8px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    color: #080710;
    border: 2px solid rgba(0, 0, 0, 0.1);

}

::placeholder {
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

.seconnecter {
    margin-top: 30px;
    display: flex;
    padding-left: 110px;

}

a {
    text-decoration: none;
}

.seconnecter a {
    color: #3d3d3d;
    margin-left: -84px;
    margin-top: -22px;
    font-size: 14px;
}

u{
    color: black;
}


#creer {
    color: green;
    margin-left: 90px;
    margin-top: 10px;
    font-size: 20px;
}


p {
    color: rgb(0, 0, 0);
    font-size: 10px;
    margin: 0px;
    padding-left: 6px;
}

</style>