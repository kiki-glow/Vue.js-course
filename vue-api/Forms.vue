<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input v-model="name" id="name" name="name" />
        <span v-if="errors.name">{{ errors.name }}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  import { useForm, useField } from 'vee-validate'; //the useForm and useField functions from the vee-validate library are imported to manage from state and form validation
  import * as yup from 'yup'; // yup is imported to define the validation schema 
  
  export default {
    setup() {
      const schema = yup.object({
        name: yup.string().required('Name is required')
      });
  
      const { handleSubmit, errors } = useForm({
        validationSchema: schema
      });
  
      const { value: name } = useField('name');
  
      const submitForm = handleSubmit(values => {
        console.log('Form submitted:', values);
      });
  
      return {
        name,
        errors,
        submitForm
      };
    }
  };
  </script>