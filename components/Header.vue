<template>
  <header id="header-inicio"
    class="relative py-4 sm:py-4 md:py-16 max-h-60 sm:max-h-60 md:max-h-64 lg:max-h-72 bg-gradient-to-r from-light-bg300 to-light-bg100 dark:from-dark-bg100 dark:to-dark-bg300 text-light-text100 dark:text-dark-text100">
    <!-- Container for everything -->
    <div class="w-full max-w-screen-xl mx-auto px-4">
      <!-- Container for nav, title and switch -->
      <div
        class="flex items-center justify-between mb-6 fixed top-0 left-0 w-full px-4 md:px-0 bg-gradient-to-r from-light-accent100 to-light-accent100 dark:from-dark-primary100 dark:to-dark-primary200 bg-opacity-40 z-50 shadow-lg">
        <!-- Container for title, nav, and switch -->
        <div class="container mx-auto flex items-center justify-between">
          <!-- Title for larger screens -->
          <h1 class="hidden md:block text-3xl  font-semibold z-10 text-light-accent200 dark:text-dark-accent200">
            {{ title }}
          </h1>
          <!-- Navigation -->
          <nav class="flex space-x-4 z-10 ml-8">
            <NuxtLink :to="{ path: '/', hash: '#header-inicio' }"
              class="transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100">
              Inicio
            </NuxtLink>
            <NuxtLink :to="{ path: '/', hash: '#stack-section' }"
              class="transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100">
              Habilidades
            </NuxtLink>
            <NuxtLink :to="{ path: '/', hash: '#about-me-section' }"
              class="transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100">
              Sobre mí
            </NuxtLink>
            <NuxtLink :to="{ path: '/', hash: '#timeline-section' }"
              class="transition-transform transform font-semibold  text-sm first-letter:hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100">
              Mi línea de tiempo
            </NuxtLink>
          </nav>
          <!-- ButtonSwitch -->
          <div class="flex-grow"></div>
          <ButtonSwitch />
        </div>
      </div>
      <!-- Title for smaller screens -->
      <h1
        class="md:hidden text-3xl font-semibold pt-8 mb-4 z-10 text-center text-light-accent200 dark:text-dark-primary200">
        {{ title }}
      </h1>
      <!-- Profile Info -->
      <figure
        class="md:flex rounded-xl p-8 md:mt-20 md:p-0 mx-auto max-w-3xl shadow-md dark:shadow-dark-bg200 bg-light-bg100 dark:bg-dark-bg300 dark:text-dark-text200 z-20">
        <nuxt-img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/images/foto.jpg"
          alt="Gaston Sepulveda" />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-sm font-medium text-light-text200 dark:text-dark-text100">{{ description }}</p>
          </blockquote>
          <figcaption>
            <div class="font-medium text-light-accent200 dark:text-dark-primary100">{{ nombre }}</div>
            <div class="font-light text-sm text-light-text100 dark:text-dark-text100">
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

<style lang="scss">
/* Estilos css */

</style>
