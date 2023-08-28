<template>
  <header
    id="header-inicio"
    class="relative py-4 sm:py-4 md:py-16 max-h-60 sm:max-h-60 md:max-h-64 lg:max-h-72 bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-yellow-500 dark:to-black text-indigo-950 dark:text-white"
  >
    <!-- Container for everything -->
    <div class="w-full max-w-screen-xl mx-auto px-4">
      <!-- Container for nav and switch -->
      <div
        class="flex items-center justify-center mb-6 fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-yellow-500 dark:to-black bg-opacity-40 z-50 shadow-lg"
      >
        <!-- Navigation -->
        <nav class="flex-grow flex justify-center space-x-4 z-10">
          <NuxtLink
            :to="{ path: '/', hash: '#header-inicio' }"
            class="transition-colors hover:bg-opacity-50 p-2 rounded text-indigo-200 hover:text-blue-800 dark:text-yellow-300 dark:hover:text-yellow-500"
            >Inicio</NuxtLink
          >
          <NuxtLink
            :to="{ path: '/', hash: '#stack-section' }"
            class="transition-colors hover:bg-opacity-50 p-2 rounded text-indigo-200 hover:text-indigo-800 dark:text-yellow-300 dark:hover:text-yellow-500"
            >Stack</NuxtLink
          >
          <NuxtLink
            :to="{ path: '/', hash: '#about-me-section' }"
            class="transition-colors hover:bg-opacity-50 p-2 rounded text-indigo-200 hover:text-indigo-800 dark:text-yellow-300 dark:hover:text-yellow-500"
            >Sobre mí</NuxtLink
          >
          <NuxtLink
            :to="{ path: '/', hash: '#timeline-section' }"
            class="transition-colors hover:bg-opacity-50 p-2 rounded text-indigo-200 hover:text-indigo-800 dark:text-yellow-300 dark:hover:text-yellow-500"
            >Mí Time Line</NuxtLink
          >
        </nav>
        <!-- Spacer -->
        <div class="flex-grow"></div>
        <!-- ButtonSwitch -->
        <ButtonSwitch />
      </div>
      <!-- Title -->
      <h1
        class="text-3xl font-bold pt-8 mb-4 z-10 text-center text-indigo-200 dark:text-yellow-500"
      >
        {{ title }}
      </h1>
      <!-- Profile Info -->
      <figure
        class="md:flex rounded-xl p-8 md:p-0 mx-auto max-w-3xl shadow-md dark: shadow-gray-700 bg-white dark:bg-gray-800 dark:text-yellow-200 z-10"
      >
        <nuxt-img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/images/foto.jpg"
          alt="Gaston Sepulveda"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-sm font-medium text-dark-text200 dark:text-light-text200">{{ description }}</p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-indigo-800 dark:text-yellow-400">{{ nombre }}</div>
            <div class="text-sm font-medium dark:text-yellow-200">
              {{ tituloUniersitario }}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  </header>
</template>

<script>
import ButtonSwitch from "./ButtonSwitch.vue";

export default {
  components: {
    ButtonSwitch,
  },
  setup() {
    const title = ref("Rincon del Ton");
    const nombre = "Gaston Sepulveda";
    const tituloUniersitario = "Ingeniero Informático";
    const description =
      "Apasionado por la tecnología y la innovación, especializado en Arquitectura de Software, cursando Magíster en Gestión de Información y Telecomunicaciones, y con un claro enfoque al liderazgo orientado a objetivos y proyectos ágiles.";
    return {
      title,
      nombre,
      tituloUniersitario,
      description,
    };
  },
};
</script>

<style scoped>
/* Puedes agregar estilos aquí si lo necesitas */
</style>
