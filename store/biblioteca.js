// store/biblioteca.js
import { defineStore } from 'pinia'

export const useBibliotecaStore = defineStore({
	id: 'biblioteca',
	state: () => ({
		items: [
			{
				titulo: 'Portafolio',
				tipo: 'front-end',
				descripcion: 'Descripción del recurso',
				icono: 'url_del_icono',
				fecha: '2023-09-03',
				image: 'not image',
			},
			{
				titulo: 'API Portafolio',
				tipo: 'back-end',
				descripcion: 'Descripción del recurso',
				icono: 'url_del_icono',
				fecha: '2023-09-03',
				image: 'not image',
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
