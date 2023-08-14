<template>
    <UContainer>
        <SkillCard :skills="stack.allSkills" />
        <AboutMe :aboutMeInfo="info.allAboutMe" />
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
        const info = useMainStore()

        return {
            stack,
            info
        }
    }
}
</script>
