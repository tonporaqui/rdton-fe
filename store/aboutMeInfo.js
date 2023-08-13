import { defineStore } from 'pinia';

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    aboutMeInfo: [
      { 
        id: 1, 
        title: 'Experto en Arquitectura de Software',
        description: 'Ingeniero Informático especializado en Arquitectura de Software, apasionado por la investigación y nuevas tecnologías.'
      },
      { 
        id: 2, 
        title: 'Estudiante de Magíster en Gestión de Información y Telecomunicaciones',
        description: 'Aplicando metodologías ágiles en proyectos de desarrollo. Actualmente cursando un Magíster en Gestión de Información y Telecomunicaciones en la Universidad Andrés Bello, interesado en contribuir al avance tecnológico.'
      },
      { 
        id: 3, 
        title: 'Entusiasta de la Innovación Tecnológica',
        description: 'Aplicación de metodologías ágiles en proyectos de desarrollo. Persiguiendo un Magíster en Gestión de Información y Telecomunicaciones en la Universidad Andrés Bello, con interés en impulsar el progreso tecnológico.'
      },
      { 
        id: 4, 
        title: 'Líder en Ingeniería de Software con Enfoque en Metodologías Ágiles',
        description: 'Liderando el logro de objetivos y la gestión de riesgos en proyectos de ingeniería de software. Habilidades sobresalientes en comunicación efectiva y trabajo en equipo. Siempre dispuesto a compartir conocimientos y aprender de otros profesionales.'
      },
      // ... otras tarjetas
    ]
  }),
  getters: {
    allAboutMe() {
      return this.aboutMeInfo
    }
  }
});