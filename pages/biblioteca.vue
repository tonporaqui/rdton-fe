<template>
	<section class="py-8">
		<h3
			class="mb-6 text-center text-3xl font-extrabold text-light-accent200 dark:text-dark-primary100">
			{{ titleNamePage }}
		</h3>
		<h2
			class="mb-6 text-center font-semibold text-light-text100 dark:text-dark-text100">
			{{ subtitlePage }}
		</h2>
		<h1
			class="mx-4 mb-6 text-center font-light text-light-text200 dark:text-dark-text100 md:mx-auto md:max-w-lg">
			{{ descriptionPage }}
		</h1>
		<div class="container mx-auto flex justify-center gap-8">
			<!-- Left Panel -->
			<div
				class="ml-5 grid grid-cols-1 gap-2 rounded-lg bg-light-bg200 p-4 text-center shadow-md dark:bg-dark-bg200 sm:grid-cols-1 md:grid-cols-1">
				<ul>
					<li
						class="m-5 cursor-pointer rounded p-2 text-sm font-semibold text-light-accent200 transition-transform hover:scale-105 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200"
						@click="resetFilters">
						Mostrar todo
					</li>
					<li
						class="mx-5 cursor-pointer rounded p-2 text-sm font-semibold text-light-accent200 transition-transform hover:scale-105 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200"
						@click="setFilter('back-end')">
						Back-end
					</li>
					<li
						class="mx-5 cursor-pointer rounded p-2 text-sm font-semibold text-light-accent200 transition-transform hover:scale-105 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200"
						@click="setFilter('front-end')">
						Front-end
					</li>
					<li
						class="mx-5 cursor-pointer rounded p-2 text-sm font-semibold text-light-accent200 transition-transform hover:scale-105 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200"
						@click="setFilter('librerias')">
						Librerías
					</li>
				</ul>
			</div>

			<!-- Right Panel -->
			<div
				class="w-3/4 rounded-lg bg-light-bg200 p-4 shadow-md dark:bg-dark-bg200">
				<!-- Search Bar and Dropdown -->
				<div class="mb-4 flex items-center">
					<!-- Icono de búsqueda e Input -->
					<div
						class="relative ml-2 flex items-center rounded border border-light-accent200 dark:border-dark-accent100">
						<Icon
							name="mdi:magnify"
							size="27px"
							class="ml-2 h-6 w-6 font-semibold text-light-accent200 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200" />
						<input
							v-model="search"
							placeholder="Buscar..."
							class="ml-2 mr-1 w-full appearance-none bg-light-bg200 p-2 focus:border-light-accent100 focus:bg-light-bg100 focus:outline-none dark:bg-dark-bg200 dark:focus:bg-dark-bg100" />
					</div>
					<!-- Icono desplegable -->
					<div class="relative ml-2 flex items-center">
						<Icon
							:name="dropdownIcon"
							size="27px"
							class="h-6 w-6 font-semibold text-light-accent200 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200"
							@click="isDropdownOpen = !isDropdownOpen" />
						<div
							v-if="isDropdownOpen"
							class="absolute right-0 z-10 mt-2 w-48 rounded-md bg-light-bg200 shadow-lg dark:bg-dark-bg200">
							<button
								class="block w-full rounded p-2 px-4 text-left text-light-accent200 hover:scale-105 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200"
								@click="setOrder('desc')">
								Por Fecha Mayor
							</button>
							<button
								class="block w-full rounded p-2 px-4 text-left text-light-accent200 hover:scale-105 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200"
								@click="setOrder('asc')">
								Por Fecha Menor
							</button>
						</div>
					</div>
				</div>

				<!-- Results -->
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					<div
						v-for="item in filteredItems"
						:key="item.titulo"
						class="rounded-lg bg-light-bg100 p-4 shadow-md transition-transform hover:scale-105 dark:bg-dark-bg100">
						<img
							:src="item.image"
							alt="Image"
							class="mb-2 h-32 w-full rounded object-cover" />
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
import { useBibliotecaStore } from '~/store/biblioteca'

const store = useBibliotecaStore()
const search = ref('')
const filter = ref('')
const sortOrder = ref('desc')
const isDropdownOpen = ref(false)
const titleNamePage = titleNameGlobal().value.titleBiblioteca
const subtitlePage = titleNameGlobal().value.subTitleBiblioteca
const descriptionPage = titleNameGlobal().value.descriptionBibliotecaTitle

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
