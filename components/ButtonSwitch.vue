<template>
	<div
		role="button"
		aria-label="Toggle Dark Mode"
		style="cursor: pointer"
		class="px-2 pt-2 pb-4 transition-transform transform hover:scale-105"
		@click="toggleDarkMode">
		<Icon
			:name="currentIcon"
			size="27px"
			class="h-6 w-6 font-semibold text-light-accent200 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100"></Icon>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const colorMode = useColorMode()

const toggleDarkMode = (): void => {
	colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

const currentIcon = computed<string>(() => {
	return colorMode.preference === 'dark' ? 'i-carbon-moon' : 'i-carbon:sun'
})
</script>

<style>
/* algun css */
</style>
