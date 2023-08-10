<template>
  <header class="relative text-orange-100 text-center py-15 bg-gradient-to-r from-sky-500 to-indigo-500">
    <img src="/foto-perfil.png" alt="Foto de perfil" class="profile-image mb-4">
    <h1 class="text-3xl font-bold mb-4 z-10">Gaston Sepulveda</h1>
    <p class="max-w-lg mx-auto mb-6 z-10">
      Ingeniero Informático apasionado por la tecnología y la innovación. Especializado en Arquitectura de Software. Magíster en Gestión de Información y Telecomunicaciones. Liderazgo orientado a objetivos y proyectos ágiles.
    </p>
    <nav class="flex justify-center space-x-4 flex-wrap z-10">
      <a href="#" class="text-white hover:text-gray-300">Inicio</a>
      <a href="#" class="text-white hover:text-gray-300">Sobre mí</a>
      <a href="#" class="text-white hover:text-gray-300">Habilidades</a>
      <a href="#" class="text-white hover:text-gray-300">Proyectos</a>
      <a href="#" class="text-white hover:text-gray-300">Contacto</a>
    </nav>
  </header>
</template>

<style scoped>
.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>
