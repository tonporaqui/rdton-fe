<template>
	<section class="py-8">
		<h2
			class="text-3xl font-extrabold mb-6 text-center text-light-accent200 dark:text-dark-primary100">
			Biblioteca
		</h2>
		<div class="flex justify-center container mx-auto gap-8">
			<!-- Left Panel -->
			<div
				class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-2p-4 ml-5 bg-light-bg200 dark:bg-dark-bg200 rounded-lg shadow-md text-center">
				<ul>
					<li
						class="m-5 cursor-pointer transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200"
						@click="resetFilters">
						Mostrar todo
					</li>
					<li
						class="ml-5 mr-5 cursor-pointer transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200"
						@click="setFilter('back-end')">
						Back-end
					</li>
					<li
						class="ml-5 mr-5 cursor-pointer transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200"
						@click="setFilter('front-end')">
						Front-end
					</li>
					<li
						class="ml-5 mr-5 cursor-pointer transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200"
						@click="setFilter('librerias')">
						Librerías
					</li>
				</ul>
			</div>

			<!-- Right Panel -->
			<div
				class="w-3/4 p-4 bg-light-bg200 dark:bg-dark-bg200 rounded-lg shadow-md">
				<!-- Search Bar and Dropdown -->
				<div class="flex items-center mb-4">
					<input
						v-model="search"
						placeholder="Buscar..."
						class="bg-light-bg200 p-2 appearance-none border rounded border-light-accent200 dark:border-dark-accent100 focus:outline-none focus:bg-white focus:border-light-accent100" />

					<!-- Custom Dropdown -->
					<div class="relative ml-2">
						<Icon
							:name="dropdownIcon"
							size="27px"
							class="h-6 w-6 font-semibold text-light-accent200 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200"
							@click="isDropdownOpen = !isDropdownOpen" />

						<div
							v-if="isDropdownOpen"
							class="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-bg100 rounded-md shadow-lg z-10">
							<button
								class="block w-full px-4 py-2 text-left hover:bg-light-accent100 dark:hover:bg-dark-accent100"
								@click="setOrder('desc')">
								Fecha Mayor a Menor
							</button>
							<button
								class="block w-full px-4 py-2 text-left hover:bg-light-accent100 dark:hover:bg-dark-accent100"
								@click="setOrder('asc')">
								Fecha Menor a Mayor
							</button>
						</div>
					</div>
				</div>

				<!-- Results -->
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<div
						v-for="item in filteredItems"
						:key="item.titulo"
						class="card p-4 bg-light-bg100 dark:bg-dark-bg100 rounded-lg shadow-md transition-transform transform hover:scale-105">
						<img
							:src="item.image"
							alt="Image"
							class="mb-2 w-full h-32 object-cover rounded" />
						<h2
							class="text-lg font-semibold text-light-text100 dark:text-dark-text100">
							{{ item.titulo }}
						</h2>
						<p class="text-sm text-light-text200 dark:text-dark-text200">
							{{ item.descripcion }}
						</p>
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
const isDropdownOpen = ref(false)

interface BibliotecaItem {
	titulo: string
	tipo: string
	descripcion: string
	icono: string
	fecha: string
	image: string
}

const filteredItems = computed(() => {
	let items: BibliotecaItem[] = store.allBiblioteca
	if (filter.value) {
		items = items.filter((item) => item.tipo === filter.value)
	}

	if (search.value) {
		items = items.filter((item) => item.titulo.includes(search.value))
	}

	return sortOrder.value === 'desc'
		? items.sort(
				(a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime(),
		  )
		: items.sort(
				(a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime(),
		  )
})

const setFilter = (tipo: string) => {
	filter.value = tipo
}

const resetFilters = () => {
	search.value = ''
	filter.value = ''
}
const setOrder = (order: string) => {
	sortOrder.value = order
	isDropdownOpen.value = false
}

const dropdownIcon = computed(() => {
	return isDropdownOpen.value
		? 'mdi:arrow-up-drop-circle-outline'
		: 'mdi:arrow-down-drop-circle-outline'
})
</script>

<style scoped>
/* You can add specific styles here with Tailwind or pure CSS */
</style>
