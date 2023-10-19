<script setup lang="ts">
import AboutMe from '~/components/AboutMe.vue'
import SkillCard from '~/components/SkillCard.vue'
import TimeLine from '~/components/TimeLine.vue'
import { useMainStore } from '~/store/aboutMeInfo'
import { useStackStore } from '~/store/stack'
import { useTimeLineStore } from '~/store/timeLineMe'

const stack = useStackStore()
const info = useMainStore()
const timeLine = useTimeLineStore()
</script>

<template>
	<div class="container mx-auto overflow-x-hidden">
		<SkillCard :skills="stack.allSkills" />
		<AboutMe :about-me-info="info.allAboutMe" />
		<TimeLine :time-line-me="timeLine.sortedTimeLine" />
	</div>
</template>
