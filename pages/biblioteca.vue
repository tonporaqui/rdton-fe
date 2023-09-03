<template>
  <section class="py-8">
    <h2 class="text-3xl font-extrabold mb-6 text-center text-light-accent200 dark:text-dark-primary100">Biblioteca</h2>
    <div class="flex justify-center container mx-auto gap-8"> 
        <!-- Left Panel -->
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-2p-4 ml-5 bg-light-bg200 dark:bg-dark-bg200 rounded-lg shadow-md text-center">
            <ul>
                <li @click="resetFilters" class="m-5 cursor-pointer transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200">Mostrar todo</li>
                <li @click="setFilter('back-end')" class=" ml-5 mr-5 cursor-pointer transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200">Back-end</li>
                <li @click="setFilter('front-end')" class="ml-5 mr-5 cursor-pointer transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200">Front-end</li>
                <li @click="setFilter('librerias')" class="ml-5 mr-5 cursor-pointer transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200">Librerías</li>
            </ul>
        </div>

        <!-- Right Panel -->
        <div class="w-3/4 p-4 bg-light-bg200 dark:bg-dark-bg200 rounded-lg shadow-md">
            <!-- Search Bar -->
            <input v-model="search" placeholder="Buscar..." class="mb-4 p-2 rounded border border-light-accent100 dark:border-dark-accent100" />

            <!-- Sort Dropdown -->
            <select v-model="sortOrder" class="mb-4 p-2 rounded border border-light-accent100 dark:border-dark-accent100">
                <option value="desc">Fecha Mayor a Menor</option>
                <option value="asc">Fecha Menor a Mayor</option>
            </select>

            <!-- Results -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="item in filteredItems" :key="item.titulo" class="card p-4 bg-light-bg100 dark:bg-dark-bg100 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <img :src="item.icono" alt="Icono" class="mb-2 w-full h-32 object-cover rounded" />
                    <h2 class="text-lg font-semibold text-light-text100 dark:text-dark-text100">{{ item.titulo }}</h2>
                    <p class="text-sm text-light-text200 dark:text-dark-text200">{{ item.descripcion }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>



<script setup lang="ts">
import { ref, computed } from 'vue'
import { useBibliotecaStore } from '~/store/biblioteca'

definePageMeta({
	layout: 'custom',
})

const store = useBibliotecaStore()
const search = ref('')
const filter = ref('')
const sortOrder = ref('desc')

interface BibliotecaItem {
  titulo: string
  tipo: string
  descripcion: string
  icono: string
  fecha: string
}

const filteredItems = computed(() => {
  let items: BibliotecaItem[] = store.allBiblioteca
  if (filter.value) {
    items = items.filter(item => item.tipo === filter.value)
  }

  if (search.value) {
    items = items.filter(item => item.titulo.includes(search.value))
  }

  return sortOrder.value === 'desc'
    ? items.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    : items.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime())
})

const setFilter = (tipo: string) => {
  filter.value = tipo
}

const resetFilters = () => {
  search.value = ''
  filter.value = ''
}
</script>

<style scoped>
/* You can add specific styles here with Tailwind or pure CSS */
</style>
