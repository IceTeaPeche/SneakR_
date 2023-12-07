<template>

<section>
    <article v-for="data in datas" :key="data.id">
         <div class="w-60 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <img class="p-8 rounded-t-lg" :src="data.smallImage" alt="product image" />
          </a>
          <div class="px-3 pb-5">
              <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{data.attributes.name}}</h5>
              </a>
                  <!-- <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">39</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">40</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">41</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">42</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">43</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">44</span> -->
              </div>
              <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white ml-3">{{data.attributes.retailPrice}} €</span>
                  <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                  <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
              </div>
          </div>
        </article>
    </section>
      
  <div class="pagination">
                <button @click="previousPage" :disabled="currentPage === 1">Previous /</button>
                <span>{{ currentPage }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages"> \ Next</button>
            </div>
  
</template>

<script>
export default {
    name: 'Home1',

    data() {
        return {
            datas: [],
            currentPage: 1,
            totalPages: 1950,
        };
    },
   
    methods: {

        async fetchData() {
            try {
                console.log("coucou nathan")
                const response = await fetch(`http://localhost:1337/api/snickers?pagination%5Bpage%5D=${this.currentPage}`);
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
    }
}
</script>

<style>

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