import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNDE4MTgsImV4cCI6MTcwMDI0NTQxOCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFudG9pbmUubG9wZXpAZXBpdGVjaC5kaWdpdGFsIn0.NSlEQtdifNu5HAnkrSbqePgpEozOfNzPlMYOTHFNHhUnIfZRS8_zfi7aHLKbKtzk6gtkN4L13GAM4ghMRewyHKro3Gu-IikKjnjRRHnNGKDMpt1Eg3ui5VCqYuW7olv69MxjEYE62oANslpZZ94969nwQPabzlFCaqr12fPJAZD542x6ZVqlQ4B1z09vrUy2if12qlHVw-U8I7aOJGYM7eEr72cZZ0uOwDFGNzzm3KFSMM9-QFPiL30Tm9i6-prxTyls_zK8PT4Y2LISgEc5JXTx8eNEGEgYfhJb8Zn-0OWPV70-Ftaj30EvTxHNRF9Il4GBS--szqGvzf9R9XhLEQ";

export const useCategories = defineStore("category", {
  state: () => {
    return {
      categories: [],
    };
  },
  getters: {
    getCategories: (state) => state.categories,
  },
  actions: {
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
        console.log(data)
      } catch (error) {
        console.error("Error get categories:", error.message);
      }
    }
  },
});
