<template>
	<div class="container mx-auto overflow-x-hidden">
		<SkillCard :skills="stack.allSkills" />
		<AboutMe :about-me-info="info.allAboutMe" />
		<TimeLine :time-line-me="timeLine.sortedTimeLine" />
	</div>
</template>

<script setup lang="ts">
import { useStackStore } from '~/store/stack'
import { useMainStore } from '~/store/aboutMeInfo'
import { useTimeLineStore } from '~/store/timeLineMe'
import SkillCard from '~/components/SkillCard.vue'
import AboutMe from '~/components/AboutMe.vue'
import TimeLine from '~/components/TimeLine.vue'

const stack = useStackStore()
const info = useMainStore()
const timeLine = useTimeLineStore()
</script>
