fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
 
 /*
 In the above code, we are fetching data from the  https://jsonplaceholder.typicode.com/posts  URL and then converting the response to JSON format. If the request is successful, we are logging the data to the console. If the request fails, we are logging the error to the console. 
 */

 /*
using axios:

import axios from 'axios'
import Vue from 'vue'

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(reponse => console.log(reponse.data))
.catch(error => console.error('Error', error));
 */ 