<template>
    <div>
      <section>

   <article v-for="product in products" :key="product.id">
         
            <img :src="product.attributes.image" alt="">
            <div class="nomprix">
              <h5>{{ product.attributes.name }}</h5>
            
              
            </div>
            <p class="brand">{{ product.attributes.brand }}</p>
      
            <p class="color">Color : {{ product.attributes.colorway }}</p>
            <div class="etoilepanier">
              <p class="prix">{{ product.attributes.retailPrice }}$</p>
              <img class="ajouter-au-panier" src="../components/shopping-cart-1.png" alt="Ajouter au panier">
            </div>
          </article>
        </section>
      </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'compoproduit',
    data() {
      return {
        products: []
      };
    },
    mounted() {
      const token = '877b620d2a1dd7a3ce31c01971261087d2d0cf94d1f65109824f7be1b13cf3ff87c124402279daa695ded21ae7ed8995a94015341212443d26c510b51c508cf6d6c5fbeb4feab8d27d0a038859534be3eaca0ef2679f75b670120aaa6e5db27609f3a91898127704280d0016bc101f67d98be42fe4740b616f705447dda9b683'; // Remplacez YOUR_TOKEN_HERE par votre token
      axios.get('http://localhost:1337/api/snickers/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          this.products = response.data['data'];
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des produits:', error);
        });
    }
  };
  </script>






  <style scoped>

  



 /*conteneur du shop*/
section{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px,1fr));
    padding-left: 5vh;
    gap: 50px;
    margin-top: 25px;
    
}

/*box qui contient chaque image/text/prix...*/
article{
    height:350px;
    width: 340px;
    margin-top: 50px;
    
}

/*l'image de l'article*/
article img {
    height: 300px;
    width: 340px;

}

/*l'image du caddie dans l'article*/
article li img {
    height: 15px;
    width: 15px;
    margin-left: 24.5vh;

}

/*nom du de l'objet*/
article h4{
    margin-left: 15px;
    margin-top: 14px;

}

/*conteneur de nom et de prix pour les mettre sur la meme ligne*/
.nomprix {
    display: flex;
    height: 40px;
    justify-content: space-between;

}

/*text prix et genre de l'objet*/
article p {
    margin-left: 15px;
    font-size: 11px;
    color: rgb(124, 124, 124);

}

/*regroupement des genres d'objet*/
.brand{
    margin-bottom: 0px;
    width: 100px;

}

/*regroupement des prix d'objet*/
.prix {
    margin-top: 12px;
    font-size: 15px;
    color: #000000;
    font-family: "indivisible", sans-serif;
        font-weight: 400;
        font-style: normal;
        margin-left: 211px;

}



/*image des étoiles*/
.prix {
    
    margin-left: 15px;
    margin-bottom: 12px;
    

}
.ajouter-au-panier {
    height: 30px;
    width: 30px;
    float: right;
    margin-top: -38px;

}

.color{
    margin-top: 10px;
}




 </style>
 







