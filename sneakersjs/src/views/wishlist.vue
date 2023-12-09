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
                <li>
                  <a @click="pushuser" href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">User</a>
                </li>
          
              </ul>
            </div>
          </div>
      
        </nav>

        wishlist



</template>

<script>

export default {
  name: 'wishlist',

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

      const userId = this.$route.params.userId; // Récupérer l'userId de l'URL
      console.log(userId)
      try {


        console.log("coucou nathan");
        const response = await fetch(`http://localhost:1337/api/snickers?populate[0]=collection`);
        const data = await response.json();
        this.datas = data.data.filter(item => item.attributes.collection.data.some(collectionItem => collectionItem.id == userId));
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

    pushproduct() {
      const path = window.location.pathname;
      const match = path.match(/\/wishlist\/([^\/]+)\/([^\/]+)\/([^\/]+)/);

      if (!match || match.length < 4) {
        console.error('Unable to extract userId, identifier, or userTokens from the URL');
        return;
      }
      const Id = match[1];
      const name = match[2];
      const jwt = match[3];

      this.$router.push(`/product/${Id}/${name}/${jwt}`);
    },

    pushcollection() {
      const path = window.location.pathname;
      const match = path.match(/\/wishlist\/([^\/]+)\/([^\/]+)\/([^\/]+)/);

      if (!match || match.length < 4) {
        console.error('Unable to extract userId, identifier, or userTokens from the URL');
        return;
      }
      const Id = match[1];
      const name = match[2];
      const jwt = match[3];

      this.$router.push(`/collection/${Id}/${name}/${jwt}`);
    },

    pushhome() {
      const path = window.location.pathname;
      const match = path.match(/\/wishlist\/([^\/]+)\/([^\/]+)\/([^\/]+)/);

      if (!match || match.length < 4) {
        console.error('Unable to extract userId, identifier, or userTokens from the URL');
        return;
      }
      const Id = match[1];
      const name = match[2];
      const jwt = match[3];

      this.$router.push(`/home/${Id}/${name}/${jwt}`);
    },

    pushuser() {
      const path = window.location.pathname;
      const match = path.match(/\/wishlist\/([^\/]+)\/([^\/]+)\/([^\/]+)/);

      if (!match || match.length < 4) {
        console.error('Unable to extract userId, identifier, or userTokens from the URL');
        return;
      }
      const Id = match[1];
      const name = match[2];
      const jwt = match[3];

      this.$router.push(`/user/${Id}/${name}/${jwt}`);
    },

    pushwishlist() {
      const path = window.location.pathname;
      const match = path.match(/\/wishlist\/([^\/]+)\/([^\/]+)\/([^\/]+)/);

      if (!match || match.length < 4) {
        console.error('Unable to extract userId, identifier, or userTokens from the URL');
        return;
      }
      const Id = match[1];
      const name = match[2];
      const jwt = match[3];

      this.$router.push(`/wishlist/${Id}/${name}/${jwt}`);
    },


    

    
  
  async mounted() {
    await this.fetchData();
  },


  }
};
</script>





<style scoped> 

</style>