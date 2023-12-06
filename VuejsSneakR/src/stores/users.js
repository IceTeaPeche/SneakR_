import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useUsers = defineStore("user", {
  state: () => {
    return {
      users: [],
    };
  },
  getters: {
    getUsers: (state) => state.users,
  },
  actions: {
    async fetchUsers() {
      this.users = await axios({
        url: "http://localhost/api/users",
        method: "get",
      });
    },
  },
});
