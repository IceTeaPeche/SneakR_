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
                    <a @click="pushproduct" href="#" id="product" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">product</a>
                  </li>
                  <li>
                    <a  @click="pushcollection" href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Collection</a>
                  </li>
                  <li>
                    <a @click="pushwishlist" href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Wishlist</a>
                  </li>
             
          
                </ul>
        </nav>
       <div class="relative group inline-block lg:ml-6 flex lg:mb-0 mb-4 pointer-cursor">
        <button class="flex items-center space-x-2">
            <img src="/Users/ethanledouble/github/SneakR_/sneakersjs/src/assets/login.png" alt="Your avatar" class="w-9 h-9 rounded-full border-1 border-transparent hover:border-blue-600">
        </button>
        <div class="absolute hidden mt-9 py-2 w-48 bg-white rounded-lg shadow-xl group-hover:block left-[-120px]">
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Password reset</a>
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Password forgot</a>
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">   
               <router-link to="/login" >Sign out</router-link> 
            </a>
        </div>
    </div>


     

      </div>

      </header>
      
      




<div class="flex justify-center">
    <div class="w-1/2">
        <input type="text" v-model="search" v-on:change="fetchData()" placeholder="Search..." class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
    </div>
</div>


    



<section>
    <article v-for="data in datas" :key="data.id">
         <div class="w-60 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"  @click="goToProductDetail(data.id)">
            
          <a href="#">
              <img class="p-8 rounded-t-lg" :src="data.smallImage" width="700px" height="700px"  />
          </a>
          <div class="px-3 pb-5">
              <a href="#">
                  <h5 class="text-xl font-semibold trackin g-tight text-gray-900 dark:text-white">{{data.attributes.name}}</h5>
              </a>
        </div>

        
              <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white ml-3">{{data.attributes.retailPrice}} €</span>
                  <div class="flex">
                        <a href="#" @click="addToWishlist(data)">
                                        <img class="w-7 h-7 mr-2" src="../assets/wishlist.png" alt="">
                                    </a>
                        <a href="#" @click="addToCollection(data)">
                                    <img class="w-7 h-7 mr-2" src="../assets/coeur-blanc.png" alt="">
                                </a>
                    </div>
                    

                  
              </div>
          </div>
        </article>
    </section>

      <div class="flex justify-center mt-6">
            <a @click="moreproduct" class="bg-white-500 text-gray-700 Lugrasimo py-2 px- rounded mr-0" style="font-family: 'Your Custom Font', sans-serif;">
              Voir plus
            </a>
          </div>
        






      
<div class="pagination flex items-center justify-center mt-4">
    <button @click="previousPage" :disabled="currentPage === 1" class="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:focus:border-gray-700 dark:hover:text-gray-300">Previous</button>
    <span class="mx-2 text-sm font-medium text-gray-500 dark:text-gray-400">{{ currentPage }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:focus:border-gray-700 dark:hover:text-gray-300">Next</button>
</div>

  






    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
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
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a class="hover:underline">Sneakers</a>. All Rights Reserved.</span>
        </div>
    </footer>











</template>

<script>




export default {
    name: 'Home1',

    data() {
        return {
            datas: [],
            currentPage: 1,
            totalPages: 1950,
            search: '',
            nombredeproduct: '25',
            filter1: '',
            
         
        
           
            
            
        };
    },
   
    methods: {

         goToProductDetail(id) {
            this.$router.push(`/detailproduct/${id}`);
        },


        async fetchData() {
            try {
                console.log("coucou nathan")
                const response = await fetch(`http://localhost:1337/api/snickers?pagination%5Bpage%5D=${this.currentPage}&_q=${this.search}&pagination%5BpageSize%5D=${this.nombredeproduct}`);

                const data = await response.json();

                this.datas = data.data;

                console.log(data, "les données ont été récupérées avec succès");
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            }
            await Promise.all(
                this.datas.map(async (item) => {
                    item.smallImage = await this.getSmallImage(item);
                })
            );
        },
       async getSmallImage(item) {
            const imageObject = JSON.parse(item.attributes.image.replace(/'/g, '"'));
            const smallImage = imageObject.original;

            // Create a promise to handle the image loading
            return new Promise((resolve) => {
                const image = new Image();
                image.src = smallImage;
                image.onload = () => {
                    // Resolve the promise once the image is loaded
                    resolve(smallImage);
                };

            });
        },

     

        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.fetchData();
            }
        },

        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.fetchData();
            }
        },

        async moreproduct() {
            this.nombredeproduct = '100';
            this.fetchData();
        },

        async addToCollection(data) {
            try {
                
                const path = window.location.pathname;
               
                const match = path.match(/\/product\/([^\/]+)\/([^\/]+)\/([^\/]+)/);

                if (!match || match.length < 4) {
                    console.error('Unable to extract userId, identifier, or userTokens from the URL');
                    return;
                }

                const userId = match[1];
                const identifier = match[2];
                const userTokens = match[3];

                console.log('userId:', userId);
                console.log('userTokens:', userTokens);

                const requestBody = {
                    data: {
                        collection: {
                            id: userId
                        }
                    }
                };

                const response = await fetch(`http://localhost:1337/api/snickers/${data.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userTokens}`
                    },
                    body: JSON.stringify(requestBody)
                });

                if (response.ok) {
                    console.log('Product added to collection successfully');
                    
                } else {
                    console.error('Failed to add product to collection');
                }
            } catch (error) {
                console.error('An error occurred while adding product to collection:', error);
            }
        },

        async addToWishlist(data) {
            try {
                const path = window.location.pathname;

                const match = path.match(/\/product\/([^\/]+)\/([^\/]+)\/([^\/]+)/);

                if (!match || match.length < 4) {
                    console.error('Unable to extract userId, identifier, or userTokens from the URL');
                    return;
                }

                const userId = match[1];
                const identifier = match[2];
                const userTokens = match[3];

                console.log('userId:', userId);
                console.log('userTokens:', userTokens);

                const requestBody = {
                    data: {
                        wishlist: {
                            id: userId
                        }
                    }
                };

                const response = await fetch(`http://localhost:1337/api/snickers/${data.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userTokens}`
                    },
                    body: JSON.stringify(requestBody)
                });

                if (response.ok) {
                    console.log('Product added to wishlist successfully');
                } else {
                    console.error('Failed to add product to wishlist');
                }
            } catch (error) {
                console.error('An error occurred while adding product to wishlist:', error);
            }
        },






        pushcollection() {
            console.log("frere tes dan la merde, tes dans la merde")
    
            const path = window.location.pathname;
            const match = path.match(/\/product\/([^\/]+)\/([^\/]+)\/([^\/]+)/);

            if (!match || match.length < 4) {
                console.error('Unable to extract userId, identifier, or userTokens from the URL');
                return;
            }

            const userId = match[1];
             const identifier = match[2];
            const userTokens = match[3];
            this.$router.push(`/collection/${userId}/${identifier}/${userTokens}`);
            console.log(userId)
        },

        pushproduct() {
             const path = window.location.pathname;
            const match = path.match(/\/product\/([^\/]+)\/([^\/]+)\/([^\/]+)/);

            if (!match || match.length < 4) {
                console.error('Unable to extract userId, identifier, or userTokens from the URL');
                return;
            }
            const Id = match[1];
            const name = match[2];
            const jwt = match[3];

            this.$router.push(`/product/${Id}/${name}/${jwt}`);
        },

        pushhome() {
            const path = window.location.pathname;
            const match = path.match(/\/product\/([^\/]+)\/([^\/]+)\/([^\/]+)/);

            if (!match || match.length < 4) {
                console.error('Unable to extract userId, identifier, or userTokens from the URL');
                return;
            }
            const Id = match[1];
            const name = match[2];
            const jwt = match[3];

            this.$router.push(`/home/${Id}/${name}/${jwt}`);
        },

        pushwishlist() {
            const path = window.location.pathname;
            const match = path.match(/\/product\/([^\/]+)\/([^\/]+)\/([^\/]+)/);

            if (!match || match.length < 4) {
                console.error('Unable to extract userId, identifier, or userTokens from the URL');
                return;
            }
            const Id = match[1];
            const name = match[2];
            const jwt = match[3];

            this.$router.push(`/wishlist/${Id}/${name}/${jwt}`);
        },
        


    },
    async mounted() {
        await this.fetchData();
    },

    
}
</script>

<style scoped>

article{
    padding-top: 20px;

}

section{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(235px,1fr));
    padding-left: 1.5%;
    gap: 20px;
    margin-top: 35px;
    padding-top: 40px;
}

h5{
     white-space: nowrap;
  overflow: auto;
}

span{
    white-space: nowrap;
  overflow: auto;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
}

#menu-toggle:checked + #menu {
        display: block;
      }


@media (max-width: 1023px) {

.lg\:ml-6 {
   float: right;
   
}






}


@media (max-width: 767px) {



.lg\:ml-6 {
   float: right;
   margin-right: 55px;
   margin-top: -244px;
}



}




</style>