<template>
    <div>
      <form>
        <h3>Créer un compte</h3>

        <label class="label" for="email">Email</label>
             <input id="email" v-model="email" type="text" placeholder="email" required/>
          <label class="label" for="name">name</label>
          <input id="name" v-model="name" class="input" type="text" placeholder="name" required/>
          <label class="label" for="username">username</label>
            <input id="username" v-model="username" class="input" type="text" placeholder="username" required/>
          <label class="label" for="password">Password</label>
          <input id="password" v-model="password" type="password" placeholder="password" required/>
          <button type="button" class="submit" @click="registerUser">Créer compte</button>
          <div class="seconnecter">
            <router-link to="/login">Se connecter</router-link>
          </div>
        </form>
      </div>
  </template>

<script>

export default {
  name: 'creercompte',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      username: '',
      error: false,
      errorMsg: `An Error occurred, please try again`
    }
  },
  methods: {
    async register(e) {
      try {
        e.preventDefault()
        await this.axios.post(`http://localhost:1337/api/auth/local/register`, {
          name: this.name,
          password: this.password,
          email: this.email,
          username: this.username
        })
        this.$router.push('login')
      } catch (e) {
        this.error = true
        this.email = ''
      }
    }
  }
}
</script>

<style>
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
input#username, input#password, input#email, input#name.input {
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