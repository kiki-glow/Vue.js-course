<template>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user/1">User 1</router-link> |
      <router-link to="/user/2">User 2</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  };
  </script>
  
  <style scoped>
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
    transition: transform 0.3s ease;
  }
  
  .router-link-active {
    font-weight: bold;
  }
  </style>