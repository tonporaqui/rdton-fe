<template>
	<div
		role="button"
		aria-label="Toggle Dark Mode"
		style="cursor: pointer"
		class="hover:animate-bounce"
		@click="toggleDarkMode">
		<Icon
			:name="currentIcon"
			size="27px"
			class="h-6 w-6 font-semibold text-light-accent200 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100">
		</Icon>
	</div>
</template>

<script setup lang="ts">
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
