<template>
    <div
          class="grid-container"
          v-if="getUsers.data && getUsers.data['hydra:member']"
        >
    <div class="button">
            <button @click="open_admin()" class="name_category">Product</button>
            <button @click="open_categories()" class="name_category">Categories</button>
            <button @click="open_users()" class="name_category">Users</button>
            <button @click="open()" id="add_user">Add user</button>
        </div>
        <section class="menus">
            <p class="column">User</p>
            <p class="column">email</p>
            <p class="column">ID</p>
            <p class="column">roles</p>
            <p class="column">Actions</p>
        </section>
        <!-- <article  v-for="user in getUsers.data['hydra:member']" :key="users.id" class="colonne"> -->
            <article  v-for="product in getUsers.data" :key="users.id" class="colonne">
        <section class="menuu">
            <p class="column">{{ users.fullName }}</p>
            <p class="column">{{ users.email }}</p>
            <p class="column">{{ users.id }}</p>
            <p class="column">{{ users.roles }}</p>
            <button @click="edit_users(users.fullName, users.email, users.id, users.roles.toString())" id="edit_users">EDIT</button>
            <button @click="delete_user(users.id)">DELETE</button>
        </section>
        </article>
        </div>
</template>

<script>
import { useUsers } from '../stores/users.js';
import { mapActions, mapState } from "pinia";


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNDE4MTgsImV4cCI6MTcwMDI0NTQxOCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFudG9pbmUubG9wZXpAZXBpdGVjaC5kaWdpdGFsIn0.NSlEQtdifNu5HAnkrSbqePgpEozOfNzPlMYOTHFNHhUnIfZRS8_zfi7aHLKbKtzk6gtkN4L13GAM4ghMRewyHKro3Gu-IikKjnjRRHnNGKDMpt1Eg3ui5VCqYuW7olv69MxjEYE62oANslpZZ94969nwQPabzlFCaqr12fPJAZD542x6ZVqlQ4B1z09vrUy2if12qlHVw-U8I7aOJGYM7eEr72cZZ0uOwDFGNzzm3KFSMM9-QFPiL30Tm9i6-prxTyls_zK8PT4Y2LISgEc5JXTx8eNEGEgYfhJb8Zn-0OWPV70-Ftaj30EvTxHNRF9Il4GBS--szqGvzf9R9XhLEQ';

export default {
    data() {
        return {
            users: []
        };
    },
    async mounted() {
        await this.fetchUsers;
    },
    computed: {
        ...mapActions(useUsers, ["fetchUsers"]),
        ...mapState(useUsers, ["getUsers"]),
    },
    methods: {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        async delete_user(id) {
            try {
                const response = await fetch(`http://localhost/api/users/${id}`, {
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
        edit_users(fullName, email, id, roles) {
            this.$router.push({
                name: "edit",
                params: {
                    "fullName": aname,
                    "email": email,
                    "id": id,
                    "roles": roles,
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
.name_category {
    padding: 50px
}
#add_user {
    border: solid 1px rgb(0, 191, 255);
    color: rgb(0, 191, 255);
    background-color: white;
}
.menus {
    display: flex;
    padding-top: 40px;
}

.column {
    width: 200px;
    border: solid 1px black;
}
</style>
