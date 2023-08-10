// store/stack.js
import { defineStore } from 'pinia'

export const useStackStore = defineStore({
  id: 'stack',
  state: () => ({
    skills: {
      frontend: ['vue.js', 'nuxt.js', 'php', 'javascript'],
      backend: ['node.js', 'express.js', 'Python', 'java', 'c#'],
      databases: ['Mysql', 'MongoDB', 'SQL Server', 'Oracle DocumentDB'],
      cloud: ['AWS', 'Azure']
    }
  }),
  getters: {
    allSkills() {
      return this.skills
    }
  }
})
