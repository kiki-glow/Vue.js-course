import { defineStore } from "pinia";

export const useUserStore = defineStore({
    state: () => ({
        name: ''
    }),
    actions: {
        setName(newName) {
            this.name = newName;
        }
    }
});