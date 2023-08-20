<template>
  <header class="relative py-4 sm:py-4 md:py-16 max-h-60 sm:max-h-60 md:max-h-64 lg:max-h-72 bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-gray-700 dark:to-gray-900 text-white">
    <!-- Container for everything -->
    <div class="w-full max-w-screen-xl mx-auto px-4">
      <!-- Container for nav and switch -->
      <div class="flex items-center justify-center mb-6 fixed top-0 left-0 w-full bg-gray-100 bg-opacity-40 z-50 shadow-md">
        <!-- Navigation -->
        <nav class="flex-grow flex justify-center space-x-4 z-10">
          <a href="#" class="transition-colors hover:bg-opacity-50 p-2 rounded text-white hover:bg-white dark:text-white dark:hover:bg-gray-700">Inicio</a>
          <a href="#" class="transition-colors hover:bg-opacity-50 p-2 rounded text-white hover:bg-white dark:text-white dark:hover:bg-gray-700">Stack</a>
          <a href="#" class="transition-colors hover:bg-opacity-50 p-2 rounded text-white hover:bg-white dark:text-white bladarkck:hover:bg-gray-700">Sobre mí</a>
        </nav>
        <!-- Spacer -->
        <div class="flex-grow"></div>
        <!-- ButtonSwitch -->
        <ButtonSwitch />
      </div>
      <!-- Title -->
      <h1 class="text-3xl font-bold mb-4 z-10 text-center  text-orange-100 dark:text-indigo-500">{{ title }}</h1>
      <!-- Profile Info -->
      <figure class="md:flex rounded-xl p-8 md:p-0 mx-auto max-w-3xl shadow-md bg-white text-black  dark:bg-gray-800 dark:text-white z-10">
        <!-- <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/path-to-your-avatar.jpg" alt="Gaston Sepulveda"> -->
        <nuxt-img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/images/foto.jpg" alt="Gaston Sepulveda" />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-sm font-medium">{{ description }}</p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-indigo-500 dark:text-sky-600 ">{{ nombre }}</div>
            <div class="text-sm font-medium text-indigo-300 dark:text-sky-900">{{ tituloUniersitario }}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  </header>
</template>

<script>
import ButtonSwitch from './ButtonSwitch.vue'

export default {
  components: {
    ButtonSwitch
  },
  setup() {
    const title = ref('Rincon del Ton');
    const nombre = 'Gaston Sepulveda'
    const tituloUniersitario= 'Ingeniero Informático'
    const description = 'Apasionado por la tecnología y la innovación /  Especializado en Arquitectura de Software Magíster en Gestión de Información y Telecomunicaciones / Liderazgo orientado a objetivos y proyectos ágiles.'
    return {
      title,
      nombre,
      tituloUniersitario,
      description
    }
  }
}
</script>

<style scoped>
/* Puedes agregar estilos aquí si lo necesitas */
</style>
