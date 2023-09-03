<template>
	<div class="flex">
		<!-- Panel Izquierdo -->
		<div class="w-1/4 p-4">
			<ul>
				<li @click="setFilter('back-end')">Back-end</li>
				<li @click="setFilter('front-end')">Front-end</li>
				<li @click="setFilter('librerias')">Librerías</li>
			</ul>
		</div>

		<!-- Panel Derecho -->
		<div class="w-3/4 p-4">
			<!-- Buscador -->
			<input v-model="search" placeholder="Buscar..." />

			<!-- Filtro -->
			<select v-model="sortOrder">
				<option value="desc">Fecha Mayor a Menor</option>
				<option value="asc">Fecha Menor a Mayor</option>
			</select>

			<!-- Resultados -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div v-for="item in filteredItems" :key="item.titulo" class="card">
					<img :src="item.icono" alt="Icono" />
					<h2>{{ item.titulo }}</h2>
					<p>{{ item.descripcion }}</p>
				</div>
			</div>
		</div>
	</div>
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
		items = items.filter((item: BibliotecaItem) => item.tipo === filter.value)
	}

	if (search.value) {
		items = items.filter((item: BibliotecaItem) =>
			item.titulo.includes(search.value),
		)
	}

	return sortOrder.value === 'desc'
		? items.sort(
				(a: BibliotecaItem, b: BibliotecaItem) =>
					new Date(b.fecha).getTime() - new Date(a.fecha).getTime(),
		  )
		: items.sort(
				(a: BibliotecaItem, b: BibliotecaItem) =>
					new Date(a.fecha).getTime() - new Date(b.fecha).getTime(),
		  )
})

const setFilter = (tipo: string) => {
	filter.value = tipo
}
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos con Tailwind o CSS puro */
</style>
