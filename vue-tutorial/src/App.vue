<script setup>
// Composition API
import { ref, onMounted } from 'vue';
// ref is a function in Vue's Composition API that creates a reactive reference to a value.

    const name = ref('John Doe');
    const status = ref('active');
    const tasks = ref(['Task One', 'Task Two', 'Task Three']);
    const newTask = ref('');

    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'pending';
      } else if (status.value === 'pending') {
        status.value = 'inactive';
      } else {
        status.value = 'active';
      }
    };

    const addTask = () => {
      if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value);
        newTask.value = '';
      }
    };

    const deleTask = (index) => {
      tasks.value.splice(index, 1); // Remove the task at the specified index from the tasks array
    };

    onMounted(async () => { // Lifecycle hook that runs when the component is mounted
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // Fetch data from the API
        const data = await response.json();
        tasks.value = data.map((task) => task.title); /* Map the fetched data to extract task titles and assign to tasks */
      } catch (error) {
        console.error('Error fetching data'); // Log an error message if the fetch fails
      }
    });

</script>
<template>
  <div>
    <h1>{{ name }}</h1> <!--interpolation-->
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is inactive</p>

    <form @submit.prevent="addTask">
      <label for="newTask">Add Task</label>
      <input type="text" id="newTask" name="newTask" v-model="newTask">
      <button type="submit">Add</button>
    </form>

    <h3>Tasks:</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        <span>
          {{ task }}
        </span>
        <button @click="deleteTask(index)">x</button>
      </li>
    </ul>

    <button @click="toggleStatus">Change Status</button>
  </div>
</template>
