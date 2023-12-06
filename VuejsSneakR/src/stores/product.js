import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useproductstore = defineStore('product', {

  state : () => {
    return{
      product : []
    }
  },

  getters: {
    getproduct : state => state.product
  },


  actions : {
    async fetchproduct()
    {
      this.product = await axios({url : "http://localhost/api/products", method: "get"})
    }
  }

 
})

