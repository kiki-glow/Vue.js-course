<template>
    <div>
        <h1>{{ message }}</h1> <!-- displays the value of the message script -->
        <button @click="changeMessage">Click Me!</button> <!-- the button triggers the changeMessage method when clicked -->
    </div>
</template>
 
 <script>
 // the data() function returns an object that holds the component's data. here, message is a piece of data
 // methods object contains functions that can be called from the template. here, changeMessage updates the message
 export default {
    // Data option
     data () {
         return {
             message: 'Hello, Vue 3!'
         };
     },
     // Methods option
     methods: {
         changeMessage() {
             this.message = 'You clicked the button!';
         }
     },
     // Lifecycle hook
     mounted() {
         console.log('Component is mounted!');  
     }
 };
 </script>
 
 <style scoped>
 /* scoped means the styles only apply to this component, not globally */
 h1 {
    color: blue;
 }
 button {
    background-color: green;
    padding: 20px;
    color: #fff;
    text-align: center;
    border-radius: 12px;
 }
 </style>
 