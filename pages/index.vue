<template>
    <UContainer>
        <AboutMe :aboutMeInfo="info.allAboutMe"/>
        <section class="card-container">
            <SkillCard title="Frontend" :skills="stack.allSkills.frontend" />
            <SkillCard title="Backend" :skills="stack.allSkills.backend" />
            <SkillCard title="Bases de Datos" :skills="stack.allSkills.databases" />
            <SkillCard title="Cloud Services" :skills="stack.allSkills.cloud" />
        </section>
    </UContainer>
</template>
  
<script>
import { useStackStore } from '~/store/stack'
import { useMainStore } from '~/store/aboutMeInfo'
import SkillCard from '~/components/SkillCard.vue'
import AboutMe from '~/components/AboutMe.vue'
export default {
    components: {
        AboutMe,
        SkillCard
    },
    setup() {
        const stack = useStackStore()
        const info  = useMainStore()

        return {
            stack,
            info
        }
    }
}
</script>

<style>
.card-container {
    display: flex;
    flex-wrap: wrap;
    /* Esto permitirá que las tarjetas se envuelvan si no hay suficiente espacio */
    justify-content: space-between;
}
</style>
  