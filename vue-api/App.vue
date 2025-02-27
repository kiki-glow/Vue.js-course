<template>
    <div>
        <h1>Posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">
                {{ post.title }} <!-- each list item displays the title of a post and uses the :key directive to uniquely identify each item by its id -->
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    // the setup() function is used to define the  component's reactive state and lifecycle hooks
    setup() {
        const posts = ref([]); // posts is a reactive reference initialized as an empty array

        onMounted(async () => { // the onMounted() lifecycle hook is used to fetch the posts data when the component is mounted
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                posts.value = await response.json();
            } catch (error) {
                console.error('Error', error);
            }
        });

        return {
            posts
        };
    }
};
</script>