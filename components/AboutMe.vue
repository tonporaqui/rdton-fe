<template>
  <section id="about-me-section" class="p-20 sm:p-20 md:p-10 lg:p-8 text-indigo-950 dark:text-yellow-500">
    <h2 class="text-3xl font-extrabold mb-6 text-center">Sobre mí</h2>

    <!-- Contenedor de las tarjetas con diseño de cuadrícula -->
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <!-- Iterar sobre el contenido del store para mostrar cada card -->
        <div v-for="(info, index) in aboutMeInfo" :key="info.id"
          class="transition transform hover:scale-105 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md dark: shadow-gray-800"
          :data-aos="getAosEffect(index)" :data-aos-delay="(index + 1) * 100">
          <img :src="info.image || 'https://stackdiary.com/140x100.png'" alt="image.ref"
            class="w-full h-48 object-cover rounded-t-lg">
          <h3 class="text-xl font-semibold mb-2 text-indigo-800 dark:text-yellow-400">{{ info.title }}</h3>
          <p class="text-lg leading-relaxed dark:text-yellow-200">{{ info.description }}</p>
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
  },
  methods: {
    getAosEffect(index) {
      const effects = ["fade-up-right", "fade-up-left", "fade-up", "zoom-in"];
      return effects[index % effects.length];
    }
  }
}
</script>

<style scoped>
/* Tu CSS aquí */
</style>
