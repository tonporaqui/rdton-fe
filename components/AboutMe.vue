<template>
  <section class="p-8">
    <h2 class="text-3xl font-extrabold mb-6 dark:text-white">Sobre mí</h2>

    <!-- Contenedor de las tarjetas con diseño de cuadrícula -->
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <!-- Iterar sobre el contenido del store para mostrar cada card -->
        <div v-for="info in aboutMeInfo" :key="info.id"
          class="transition transform hover:scale-105 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md" data-aos="fade-up-right">
          
          <h3 class="text-xl font-semibold mb-2 dark:text-white">{{ info.title }}</h3>
          <p class="text-lg leading-relaxed dark:text-gray-300">{{ info.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
export default {
  props: {
    aboutMeInfo: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
/* Tu CSS aquí */
</style>

  