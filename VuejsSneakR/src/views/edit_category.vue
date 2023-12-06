<template>
    <div>
        <form class="add">
            <h3>Modification de catégorie</h3>
            <label for="aname">Nom</label>
            <input v-model="aname" id="aname" type="text" />
            <button type="button" class="click" @click="editCategorie()">Modifier</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            aname: this.$route.params.name,
        }
    },
    methods: {
        async editCategorie() {
            const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAzMTc1NzIsImV4cCI6MTcwMDMyMTE3Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImxlZG91YmxlZXRoYW5AZ21haWwuY29tIn0.YJhBcHb_dnRTfiPQrn-NFbvvbH6SFmsuuYsrjJjQRp-cS9gcSJ4aohKxsDQ583q_T1G38ezKTAV2f9EhBeTdbDylEsYft6xhhfl9njg85ERzVtKbK5m6FXPILFpXRyahD4aVIGLdtM_swlZsH3i_THgTWrnpHNSjSoZEv_QNZVD3RWAfEYIDQRFuTPR8bKZkwZ6laEvc9wsE7uYKRUI_N7b6vxwPaQoHITzDqA5_dYIub91KClduW9GzfbS8uCO8LgzD3uKy47AA7P6pk3_G43lzKPbqnzo4ryvftkDjqvgAOcO11BMP3FBRJxIM4jYOwmZSXns4mjrudqNjx4HCGw';

            axios.put(`http://localhost/api/categories/${this.$route.params.id}`, {
                "name": document.getElementById('aname').value,
            },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    console.log(response.data);

                })
                .catch(error => {
                    console.error(error);
                });
            this.open_admin();
        },
        open_admin() {
            const url_window = 'http://localhost:5173/admin';
            window.open(url_window, '_blank');
        },
    }
}
</script>

<style>
form {
    height: 600px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 35px;
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

label {
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
    color: #080710;
}

input#aname,
input#description,
input#price,
input#categorie {
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

.click {
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
    color: #000000;
}
</style>