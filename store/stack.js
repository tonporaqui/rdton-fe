// store/stack.js
import { defineStore } from "pinia";

export const useStackStore = defineStore({
  id: "stack",
  state: () => ({
    skills: [
      {
        id: 1,
        title: "frontend",
        description: [
          { title: "Vue.js", icon: "logos:vue" },
          { title: "Nuxt.js", icon: "logos:nuxt-icon" },
          { title: "PHP", icon: "logos:php" },
          { title: "Javascript", icon: "logos:javascript" },
        ],
      },
      {
        id: 2,
        title: "backend",
        description: [
          { title: "Node.js", icon: "logos:nodejs" },
          { title: "Python", icon: "logos:python" },
          { title: "Java", icon: "logos:java" },
          { title: "c#", icon: "logos:c-sharp" },
        ],
      },
      {
        id: 3,
        title: "databases",
        description: [
          { title: "Mysql", icon: "logos:mysql" },
          { title: "MongoDB", icon: "logos:mongodb-icon" },
          { title: "Oracle", icon: "logos:oracle" },
          { title: " DocumentDB", icon: "logos:aws-documentdb" },
        ],
      },
      {
        id: 4,
        title: "cloud",
        description: [
          { title: "AWS", icon: "logos:aws" },
          { title: "Azure", icon: "logos:azure-icon" },
        ],
      },
    ],
  }),
  getters: {
    allSkills() {
      return this.skills;
    },
  },
});
