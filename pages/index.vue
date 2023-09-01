<template>
	<div class="container mx-auto">
		<SkillCard :skills="stack.allSkills" />
		<AboutMe :aboutMeInfo="info.allAboutMe" />
		<TimeLine :timeLineMe="timeLine.sortedTimeLine" />
	</div>
</template>

<script>
import { useStackStore } from "~/store/stack"
import { useMainStore } from "~/store/aboutMeInfo"
import { useTimeLineStore } from "~/store/timeLineMe"
import SkillCard from "~/components/SkillCard.vue"
import AboutMe from "~/components/AboutMe.vue"
import TimeLine from "~/components/TimeLine.vue"

export default {
	components: {
		AboutMe,
		SkillCard,
		TimeLine,
	},
	setup() {
		const stack = useStackStore()
		const info = useMainStore()
		const timeLine = useTimeLineStore()
		useHead({
			bodyAttrs: {
				class: "dark:to-dark-bg200",
			},
		})

		return {
			stack,
			info,
			timeLine,
		}
	},
}
</script>
