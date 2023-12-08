<template>


     <nav class="bg-white border-gray-200 dark:bg-gray-900 w-screen left-0 right-0">
      <div class="max-w-screen-s flex flex-wrap items-center justify-between mx-auto p-4">
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




<div class="flex justify-center">
    <div class="w-1/2">
        <input type="text" v-model="search" v-on:change="fetchData()" placeholder="Search..." class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
    </div>
</div>




<section>
    <article v-for="data in datas" :key="data.id">
         <div class="w-60 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <img class="p-8 rounded-t-lg" :src="data.smallImage" />
          </a>
          <div class="px-3 pb-5">
              <a href="#">
                  <h5 class="text-xl font-semibold trackin g-tight text-gray-900 dark:text-white">{{data.attributes.name}}</h5>
              </a>
        </div>

        
              <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white ml-3">{{data.attributes.retailPrice}} €</span>
                  <a class=""><img class="w-7 h-7 mr-2"  src="../assets/heart.png" alt=""></a>
                  
              </div>
          </div>
        </article>
    </section>
      
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
            
        };
    },
   
    methods: {

        async fetchData() {
            try {
                console.log("coucou nathan")
                const response = await fetch(`http://localhost:1337/api/snickers?pagination%5Bpage%5D=${this.currentPage}&_q=${this.search}`);
                const data = await response.json();
                this.datas = data.data;
                // Faire quelque chose avec les données récupérées
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


    },
    async mounted() {
        await this.fetchData();
    },

    
}
</script>

<style scoped>

section{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    padding-left: 1.5%;
    gap: 15px;
    margin-top: 25px;
    
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









</style>