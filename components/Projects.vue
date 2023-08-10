<template>
    <section>
      <h2>Proyectos</h2>
      <div v-for="project in projects" :key="project.name">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { name: 'Proyecto 1', description: 'Descripción del proyecto 1' },
          // ... otros proyectos
        ]
      }
    }
  }
  </script>
  