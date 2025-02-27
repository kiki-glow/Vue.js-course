import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user/:id', component: User }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
 
 /* 
 The  createRouter  function creates a new router instance. The  history  option is set to  createWebHistory()  which creates a history instance that uses the HTML5 history API. The  routes  option is an array of route objects. Each route object has a  path  property that specifies the URL path and a  component  property that specifies the component to render when the path matches. 
 The  router  instance is exported so it can be used in the Vue app. 
 The  Home  and  About  components are imported at the top of the file. 
 The  Home  component is a simple component that displays a heading and a paragraph. */