<template>
    <div>
        <NavBar />
        <router-view></router-view> // it displays the current page based on the URL

        <p>User Name: {{ userName }}</p>
        <input v-model="newName" placeholder="Enter your name" />
        <button @click="updateName">Update Name</button>
    </div>
</template>

<script>
import { useUserStore } from './stores/userStore';

import { ref } from 'vue';
import NavBar from './components/NavBar.vue';


export default {
    components: {
        NavBar
    },
    setup() { // the setup() is used to define the component's state and methods
        const userStore = useUserStore(); // the user store instance obtained from useUserStore()
        const newName = ref(''); // a reactive reference initialized to an empty string

        const updateName = () => {
            userStore.updateName(newName.value);

        };

        return {
            userName: userStore.userName,

            newName,
            updateName
        };
    }
};
</script>

<style>
/* Global Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  color: #333;
}

h1, h2, h3 {
  color: #2c3e50;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3aa876;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
}

nav {
  background-color: #2c3e50;
  padding: 10px;
  margin-bottom: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

nav a:hover {
  text-decoration: underline;
}

.router-link-active {
  font-weight: bold;
}
</style>
