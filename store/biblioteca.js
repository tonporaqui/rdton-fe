// store/biblioteca.js
import { defineStore } from 'pinia'

export const useBibliotecaStore = defineStore({
	id: 'biblioteca',
	state: () => ({
		items: [
			{
				titulo: 'Nombre del recurso',
				tipo: 'back-end',
				descripcion: 'Descripción del recurso',
				icono: 'url_del_icono',
				fecha: '2023-09-03',
			},
			{
				titulo: 'Nombre del recurso',
				tipo: 'back-end',
				descripcion: 'Descripción del recurso',
				icono: 'url_del_icono',
				fecha: '2023-09-03',
			},
			// ... otros recursos
		],
	}),
	getters: {
		allBiblioteca() {
			return this.items
		},
	},
})
