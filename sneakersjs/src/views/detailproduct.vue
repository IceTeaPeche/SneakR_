<template>
    <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 mt-3 py-2">
        <div class="flex-1 flex justify-between items-center">
           
                <span class="flex items-center space-x-3 rtl:space-x-reverse self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sneakers</span>
           
        </div>

        <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg></label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a @click="pushhome" href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            aria-current="page">home</a>
                    </li>
                    <li>
                        <a @click="pushproduct" href="#" id="product"
                            class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">product</a>
                    </li>
                    <li>
                        <a @click="pushcollection" href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Collection</a>
                    </li>
                    <li>
                        <a @click="pushwishlist" href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Wishlist</a>
                    </li>


                </ul>
            </nav>
            <div class="relative group inline-block lg:ml-6 flex lg:mb-0 mb-4 pointer-cursor">
                <button class="flex items-center space-x-2">
                    <img src="../assets/login.png" alt="Your avatar"
                        class="w-9 h-9 rounded-full border-1 border-transparent hover:border-blue-600">
                </button>
                <div class="absolute hidden mt-9 py-2 w-48 bg-white rounded-lg shadow-xl group-hover:block left-[-120px]">
                    <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Password reset</a>
                    <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Password forgot</a>
                    <a href="/login" class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">
                    Sign out
                    </a>
                </div>
            </div>




        </div>

    </header>

    <section class="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800 " v-if="datas && datas.attributes">
            <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full px-4 md:w-1/2 ">
                        <div class="sticky top-0 z-50 overflow-hidden ">
                            <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt="image of product sneaker"
                                    class="object-cover w-full lg:h-full ">
                            </div>
            
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 ">
                        <div class="lg:pl-20">
                            <div class="mb-8 ">
                                <span class="text-lg font-medium text-rose-500 dark:text-rose-200">{{ datas.attributes.gender }}</span>
                                <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                    {{datas.attributes.name}}</h2>
                                <div class="flex items-center mb-6">
                                    <ul class="flex mr-2">
                                       {{ datas.attributes.brand  }}
                                    </ul>
                                   
                                </div>
                                <p class="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                    {{datas.attributes.strory}}
                                </p>
                                <p class="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                    <span>{{ datas.attributes.retailPrice }}$</span>
                                
                                </p>
                                <p class=" ">Silhouette : {{datas.attributes.silhouette}}</p>
                            </div>
                            <div class="flex items-center mb-8">
                                <h2 class="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                                    Colors:</h2>
                                <div class="flex flex-wrap -mx-2 ">
                                    {{ datas.attributes.colorway  }}
                                </div>
                            </div>
                            <div class="flex items-center mb-8">
                                <h2 class="w-16 text-xl font-bold dark:text-gray-400">
                                    Size:</h2>
                                <div class="flex flex-wrap -mx-2 -mb-2">
                                    <button
                                        class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">39
                                    </button>
                                    <button
                                        class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">40
                                    </button>
                                    <button
                                        class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">41
                                    </button>
                                    <button
                                        class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">42
                                    </button>
                                     <button
                                            class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">43
                                        </button>
                                         <button
                                            class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">44
                                        </button>
                                </div>
                            </div>
                            <div class="w-550 mb-8 ">
                                <label for=""
                                    class="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">link </label>
                                <div class="">
                                   {{ datas.attributes.links   }}
                                </div>
                            </div>
                            <div class="flex flex-wrap items-center -mx-4 ">
                                <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                    <button
                                        class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                        Add to Collection
                                    </button>
                                </div>
                                <div class="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                    <button
                                        class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                        Add to wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>








   <section v-if="datas && datas.attributes">
        <article>
             <div class="w-60 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
              <a href="#">
                  <img class="p-8 rounded-t-lg" :src="datas.smallImage" width="700px" height="700px"  />
              </a>
              <div class="px-3 pb-5">
                  <a href="#">
                      <h5 class="text-xl font-semibold trackin g-tight text-gray-900 dark:text-white">{{ datas.attributes.name }}</h5>
                  </a>
            </div>

        
                  <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white ml-3">{{ datas.attributes.retailPrice }} €</span>
                      <div class="flex">
                            <a href="#" @click="addToWishlist(datas)">
                                            <img class="w-7 h-7 mr-2" src="../assets/wishlist.png" alt="icone for go in the wishlist">
                                        </a>
                            <a href="#" @click="addToCollection(datas)">
                                        <img class="w-7 h-7 mr-2" src="../assets/coeur-blanc.png" alt="icone for go in the collection">
                                    </a>
                        </div>
                    

                  
                  </div>
              </div>
            </article>
        </section>







 







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
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> 
                    Sneakers. All Rights Reserved.</span>
        </div>
    </footer>

</template>

<script>




export default {
    name: 'detailproduct',

    data() {
        return {
            datas: {},
            currentPage: 1,
            totalPages: 1950,
            search: '',
            nombredeproduct: '25',
            filter1: '',
            id : this.$route.params.id,
        };
    },

    

    methods: {
 

  async fetchData() {
            try {
                
                console.log("coucou guillaume")
                const response = await fetch(`http://localhost:1337/api/snickers/${this.id}`);

                const data = await response.json();

                this.datas = data.data;

          

                console.log(this.datas, "les données ont été récupérées avec succès");
                console.log(this.datas.attributes.image, "les données ont été récupérées avec succès");

                await Promise.all(
                    this.datas.map(async (item) => {
                        item.smallImage = await this.getSmallImage(item);
                    })
                );
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            }
        },
      async getSmallImage(item) {
            const imageProxy = JSON.parse(item.attributes.image.replace(/'/g, '"'));
            const smallImage = imageProxy.small; // Change this line

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
            const path = window.location.pathname;
            const match = path.match(/\/detailproduct\/(\d+)\/(\d+)\/(\w+)\/(.+)/);

            if (!match || match.length < 5) {
                console.error('Unable to extract userId, identifier, or userTokens from the URL');
                return;
            }

            const id = match[1];
            const userId = match[2];
            const identifier = match[3];
            const userTokens = match[4];
            this.$router.push(`/collection/${userId}/${identifier}/${userTokens}`);
            console.log(userId)
        },

        pushproduct() {
              const path = window.location.pathname;
            const match = path.match(/\/detailproduct\/(\d+)\/(\d+)\/(\w+)\/(.+)/);

            if (!match || match.length < 5) {
                console.error('Unable to extract userId, identifier, or userTokens from the URL');
                return;
            }

            const id = match[1];
            const userId = match[2];
            const identifier = match[3];
            const userTokens = match[4];
            this.$router.push(`/product/${userId}/${identifier}/${userTokens}`);
            console.log(userId)
        },

        pushhome() {
            const path = window.location.pathname;
            const match = path.match(/\/detailproduct\/(\d+)\/(\d+)\/(\w+)\/(.+)/);

            if (!match || match.length < 5) {
                console.error('Unable to extract userId, identifier, or userTokens from the URL');
                return;
            }

            const id = match[1];
            const userId = match[2];
            const identifier = match[3];
            const userTokens = match[4];
            this.$router.push(`/home/${userId}/${identifier}/${userTokens}`);
            console.log(userId)
        },

        pushwishlist() {
            const path = window.location.pathname;
            const match = path.match(/\/detailproduct\/(\d+)\/(\d+)\/(\w+)\/(.+)/);

            if (!match || match.length < 5) {
                console.error('Unable to extract userId, identifier, or userTokens from the URL');
                return;
            }

            const id = match[1];
            const userId = match[2];
            const identifier = match[3];
            const userTokens = match[4];
            this.$router.push(`/wishlist/${userId}/${identifier}/${userTokens}`);
            console.log(userId)
        },



    },
    async mounted() {
        await this.fetchData();
    },


}
</script>

<style scoped>


article {
    padding-top: 20px;

}


h5 {
    white-space: nowrap;
    overflow: auto;
}

span {
    white-space: nowrap;
    overflow: auto;
}



#menu-toggle:checked+#menu {
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