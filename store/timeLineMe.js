// store/timeLineMe.js
import { defineStore } from "pinia";

export const useTimeLineStore = defineStore({
  id: "timeLine",
  state: () => ({
    events: [
      {
        type: "Estudios",
        icon: "solar:square-academic-cap-2-outline",
        institution: "Universidad de Ciencias de la Informática",
        title: "Analista Programador",
        startDate: "2012-01",
        endDate: "2014-12",
      },
      {
        type: "Estudios",
        icon: "solar:square-academic-cap-2-outline",
        institution: "Universidad Gabriela Mistral",
        title: "Ingeniería en Informática",
        startDate: "2016-01",
        endDate: "2018-12",
      },
      {
        type: "Estudios",
        icon: "solar:square-academic-cap-2-outline",
        institution: "Universidad Andres Bello",
        title: "Diplomado en Gestión de Tecnologías de Información",
        startDate: "2022-01",
        endDate: "2022-01",
      },
      {
        type: "Estudios",
        icon: "solar:square-academic-cap-2-outline",
        institution: "Universidad Andres Bello",
        title: "Diplomado en Capital Humano Avanzado",
        startDate: "2022-10",
        endDate: "2022-10",
      },
      {
        type: "Estudios",
        icon: "solar:square-academic-cap-2-outline",
        institution: "Universidad Andres Bello",
        title: "Diplomado en Innovación y Emprendimiento",
        startDate: "2022-10",
        endDate: "2022-10",
      },
      {
        type: "Estudios",
        icon: "solar:square-academic-cap-2-outline",
        institution: "Universidad Andres Bello",
        title:
          "Magíster en Gestión de Tecnologías de la Información y Telecomunicaciones",
        startDate: "2022-03",
        endDate: null,
      },
      {
        type: "Trabajo",
        icon: "material-symbols:assignment-ind",
        position: "Asistente Técnico",
        company: "Correos Chile",
        startDate: "2005-01",
        endDate: "2008-12",
      },
      {
        type: "Trabajo",
        icon: "material-symbols:assignment-ind",
        position: "Capacitador y Programación",
        company: "Goldex",
        startDate: "2009-07",
        endDate: "2010-10",
      },
      {
        type: "Trabajo",
        icon: "material-symbols:assignment-ind",
        position: "Analista Programador",
        company: "Ichita y Ploter",
        startDate: "2010-11",
        endDate: "2013-10",
      },
      {
        type: "Trabajo",
        icon: "material-symbols:assignment-ind",
        position: "Analista Programador",
        company: "CiCliCa.cl",
        startDate: "2014-04",
        endDate: "2014-06",
      },
      {
        type: "Trabajo",
        icon: "material-symbols:assignment-ind",
        position: "Analista de Sistema",
        company: "Social Information Technology",
        startDate: "2015-09",
        endDate: "2016-08",
      },
      {
        type: "Trabajo",
        icon: "material-symbols:assignment-ind",
        position: "Líder Departamento de Desarrollo e Investigación",
        company: "Social Information Technology",
        startDate: "2016-09",
        endDate: "2023-08",
      },
    ],
  }),
  getters: {
    meTimeLine() {
      return this.events;
    },
    sortedTimeLine() {
      return this.events.sort((a, b) => {
        const endDateA = a.endDate ? new Date(a.endDate) : new Date();
        const endDateB = b.endDate ? new Date(b.endDate) : new Date();
        return endDateB - endDateA;
      });
    },
  },
});
