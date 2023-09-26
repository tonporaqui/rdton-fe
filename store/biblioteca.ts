// store/biblioteca.js
import { defineStore } from 'pinia'
interface BibliotecaItem {
	titulo: string
	tipo: string
	descripcion: string
	iconos: string[]
	fecha: string
	image: string
	url: string
}

interface BibliotecaState {
	items: BibliotecaItem[]
}

export const useBibliotecaStore = defineStore({
	id: 'biblioteca',
	state: (): BibliotecaState => ({
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
		allBiblioteca(): BibliotecaItem[] {
			return this.items
		},
	},
})
