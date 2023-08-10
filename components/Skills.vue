<template>
    <section>
      <h2>Habilidades</h2>
      <ul>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        skills: ['JavaScript', 'Vue.js', 'Nuxt.js', 'Otras habilidades...']
      }
    }
  }
  </script>
  