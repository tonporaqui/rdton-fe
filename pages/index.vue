<template>
    <div>
        <AboutMe />
        <section class="card-container">
            <SkillCard title="Frontend" :skills="stack.allSkills.frontend" />
            <SkillCard title="Backend" :skills="stack.allSkills.backend" />
            <SkillCard title="Bases de Datos" :skills="stack.allSkills.databases" />
            <SkillCard title="Cloud Services" :skills="stack.allSkills.cloud" />
        </section>
        <Skills />
        <Projects />
        <Contact />
    </div>
</template>
  
<script>
import { useStackStore } from '~/store/stack'
import SkillCard from '~/components/SkillCard.vue'
import AboutMe from '~/components/AboutMe.vue'
import Skills from '~/components/Skills.vue'
import Projects from '~/components/Projects.vue'
import Contact from '~/components/Contact.vue'

export default {
    components: {
        AboutMe,
        SkillCard,
        Skills,
        Projects,
        Contact
    },
    setup() {
        const stack = useStackStore()

        return {
            stack
        }
    }
}
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;  /* Esto permitirá que las tarjetas se envuelvan si no hay suficiente espacio */
  justify-content: space-between;
}
</style>
  