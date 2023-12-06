<template>
    <div
          class="grid-container"
          v-if="categories"
        >
    <div class="button">
            <button @click="open_admin()" class="categories">Product</button>
            <button @click="open_categories()" class="categories">Categories</button>
            <button @click="open_users()" class="categories">Users</button>
            <button @click="open_add_category()" id="add_category">Add Category</button>
        </div>
        <section class="menuu">
            <p class="colum">Categorie</p>
            <p class="colum">id</p>
            <p class="colum">Products</p>
            <p class="colum">Actions</p>
        </section>
        <article  v-for="category in categories" :key="category.id" class="colonne">
        <section class="menuu">
            <p class="colum">{{ category.name }}</p>
            <p class="colum">{{ category.id }}</p>
            <p class="colum">{{ category.products }}</p>
            <button @click="edit_category(category.name, category.id)" id="edit_categorie">EDIT</button>
            <button @click="delete_category(category.id)">DELETE</button>
        </section>
        </article>
        </div>
</template>

<script>
import { useCategories } from '../stores/categories.js';
import { mapActions, mapState } from "pinia";
import edit_category from './edit_category.vue';


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAzMTc1NzIsImV4cCI6MTcwMDMyMTE3Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImxlZG91YmxlZXRoYW5AZ21haWwuY29tIn0.YJhBcHb_dnRTfiPQrn-NFbvvbH6SFmsuuYsrjJjQRp-cS9gcSJ4aohKxsDQ583q_T1G38ezKTAV2f9EhBeTdbDylEsYft6xhhfl9njg85ERzVtKbK5m6FXPILFpXRyahD4aVIGLdtM_swlZsH3i_THgTWrnpHNSjSoZEv_QNZVD3RWAfEYIDQRFuTPR8bKZkwZ6laEvc9wsE7uYKRUI_N7b6vxwPaQoHITzDqA5_dYIub91KClduW9GzfbS8uCO8LgzD3uKy47AA7P6pk3_G43lzKPbqnzo4ryvftkDjqvgAOcO11BMP3FBRJxIM4jYOwmZSXns4mjrudqNjx4HCGw';

export default {
    data() {
        return {
            categories: []
        };
    },
    async mounted() {
        await this.fetchCategories();
    },
    // computed: {
    //     ...mapActions(useCategories, ["fetchCategories"]),
    //     ...mapState(useCategories, ["getCategories"]),
    // },
    methods: {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        async fetchCategories() {
            try {
                const response = await fetch(`http://localhost/api/categories`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                const data = await response.json()
                this.categories = data['hydra:member']
                console.log(data)
            } catch (error) {
                console.error("Error get categories:", error.message);
            }
        },
        async delete_category(id) {
            try {
                const response = await fetch(`http://localhost/api/categories/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                location.reload();
            } catch (error) {
                console.error('Error deleting product:', error.message);
            }
        },
        open_users() {
            const url_window = 'http://localhost:5173/users';
            window.open(url_window, '_blank');
        },
        open_categories() {
            const url_window = 'http://localhost:5173/categories';
            window.open(url_window, '_blank');
        },
        open() {
            const url_window = 'http://localhost:5173/add';
            window.open(url_window, '_blank');
        },
        open_admin() {
            const url_window = 'http://localhost:5173/admin';
            window.open(url_window, '_blank');
        },
        open_add_category() {
            const url_window = 'http://localhost:5173/add_category';
            window.open(url_window, '_blank');
        },
         open_edit_category() {
            const url_window = 'http://localhost:5173/edit_category';
            window.open(url_window, '_blank');
        },
        edit_category(aname, id) {
            this.$router.push({
                name: "edit_category",
                params: {
                    "name": aname,
                    "id": id,
                }
            })
        }
    }
}
</script>

<style>
.button {
    padding-top: 100px;
    padding-left: 35%;
}
.category {
    padding: 50px
}
#add {
    border: solid 1px rgb(0, 191, 255);
    color: rgb(0, 191, 255);
    background-color: white;
}
.menuu {
    display: flex;
    padding-top: 40px;
}

.colum {
    width: 200px;
    border: solid 1px black;
}
</style>