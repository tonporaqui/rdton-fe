import { defineStore } from 'pinia'

interface AboutMeInfo {
	id: number
	title: string
	image: string
	description: string
}

interface MainState {
	aboutMeInfo: AboutMeInfo[]
}

export const useMainStore = defineStore({
	id: 'main',
	state: (): MainState => ({
		aboutMeInfo: [
			{
				id: 1,
				title: 'Experto en Arquitectura de Software',
				image: '/images/softwarearchitecture.png',
				description:
					'Ingeniero Informático especializado en Arquitectura de Software, apasionado por la investigación y nuevas tecnologías.',
			},
			{
				id: 2,
				title:
					'Estudiante de Magíster en Gestión de Información y Telecomunicaciones',
				image: '/images/student-boy.png',
				description:
					'Aplicando metodologías ágiles en proyectos de desarrollo. Actualmente cursando un Magíster en Gestión de Información y Telecomunicaciones en la Universidad Andrés Bello, interesado en contribuir al avance tecnológico.',
			},
			{
				id: 3,
				title: 'Entusiasta de la Innovación Tecnológica',
				image: '/images/inovation-technology.png',
				description:
					'Aplicación de metodologías ágiles en proyectos de desarrollo. Persiguiendo un Magíster en Gestión de Información y Telecomunicaciones en la Universidad Andrés Bello, con interés en impulsar el progreso tecnológico.',
			},
			{
				id: 4,
				title:
					'Líder en Ingeniería de Software con Enfoque en Metodologías Ágiles',
				image: '/images/leader.png',
				description:
					'Liderando el logro de objetivos y la gestión de riesgos en proyectos de ingeniería de software. Habilidades sobresalientes en comunicación efectiva y trabajo en equipo. Siempre dispuesto a compartir conocimientos y aprender de otros profesionales.',
			},
			// ... otras tarjetas
		],
	}),
	getters: {
		allAboutMe(): AboutMeInfo[] {
			return this.aboutMeInfo
		},
	},
})
