<template>
  <header class="relative py-15"
    :class="isDark ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white' : 'bg-gradient-to-r from-sky-500 to-indigo-500 text-orange-100'">

    <!-- Container for everything -->
    <div class="w-full max-w-screen-xl mx-auto px-4">
      <!-- Container for nav and switch -->
      <div class="flex items-center justify-center mb-6">
        <!-- Navigation -->
        <nav class="flex-grow flex justify-center space-x-4 z-10">
          <a href="#" class="transition-colors hover:bg-opacity-50 p-2 rounded"
            :class="isDark ? 'text-white hover:bg-white' : 'text-white hover:bg-gray-700'">Inicio</a>
          <a href="#" class="transition-colors hover:bg-opacity-50 p-2 rounded"
            :class="isDark ? 'text-white hover:bg-white' : 'text-white hover:bg-gray-700'">Sobre mí</a>
          <a href="#" class="transition-colors hover:bg-opacity-50 p-2 rounded"
            :class="isDark ? 'text-white hover:bg-white' : 'text-white hover:bg-gray-700'">Stack</a>
        </nav>
        <!-- Spacer -->
        <div class="flex-grow"></div>
        <!-- ButtonSwitch -->
        <ButtonSwitch />
      </div>


      <!-- Title -->
      <h1 class="text-3xl font-bold mb-4 z-10 text-center">{{ title }}</h1>

      <!-- Profile Info -->
      <div class="flex items-center justify-center mt-4 p-6 rounded-lg shadow-md mx-auto max-w-3xl"
        :class="isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'" data-aos="fade-up" data-aos-delay="200">
        <img src="/path-to-your-avatar.jpg" alt="Gaston Sepulveda" class="w-24 h-24 rounded-full mr-4">
        <div>
          <h2 class="text-2xl font-semibold">{{ nombre }}</h2>
          <p class="mt-2 text-sm max-w-md">
            {{ description }}
          </p>
        </div>
      </div>

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
    const colorMode = useColorMode()

    const isDark = computed(() => {
      return colorMode.value === 'dark'
    })
    const nombre = 'Gaston Sepulveda'
    const description = 'Ingeniero Informático / apasionado por la tecnología y la innovación /  Especializado en Arquitectura de Software Magíster en Gestión de Información y Telecomunicaciones / Liderazgo orientado a objetivos y proyectos ágiles.'
    return {
      title,
      isDark,
      nombre,
      description
    }
  }
}
</script>

<style scoped>
/* Puedes agregar estilos aquí si lo necesitas */
</style>
