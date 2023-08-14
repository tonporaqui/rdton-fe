// store/stack.js
import { defineStore } from "pinia";

export const useStackStore = defineStore({
  id: "stack",
  state: () => ({
    skills: [
      {
        id: 1,
        title: "frontend",
        description: ["vue.js", "nuxt.js", "php", "javascript"],
      },
      {
        id: 2,
        title: "backend",
        description: ["node.js", "express.js", "Python", "java", "c#"],
      },
      {
        id: 3,
        title: "databases",
        description: ["Mysql", "MongoDB", "SQL Server", "Oracle DocumentDB"],
      },
      {
        id: 4,
        title: "cloud",
        description: ["AWS", "Azure"],
      },
    ],
  }),
  getters: {
    allSkills() {
      return this.skills;
    },
  },
});
