// store/biblioteca.js
import { defineStore } from 'pinia'

export const useBibliotecaStore = defineStore({
	id: 'biblioteca',
	state: () => ({
		items: [
			{
				titulo: 'API Portafolio',
				tipo: 'back-end',
				descripcion: 'Api Restful para el portafolio',
				iconos: ['logos:nodejs', 'logos:nextjs-icon'],

				fecha: '2023-09-03',
				image: '/images/backend-nest.png',
				url: 'client-api',
			},
			{
				titulo: 'Portafolio',
				tipo: 'front-end',
				descripcion: 'Portafolio web',
				iconos: [
					'logos:vue',
					'logos:nuxt-icon',
					'logos:tailwindcss-icon',
					'logos:nodejs',
				],
				fecha: '2023-09-03',
				image: '/images/portafolio.png',
				url: '/biblioteca',
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
