<template>
    <div @click="toggleDarkMode" role="button" aria-label="Toggle Dark Mode" style="cursor: pointer;">
        <Icon :name="currentIcon" size="27px" class="ml-4 h-6 w-6 text-light-primary100 dark:text-dark-accent100"></Icon>
        <!-- <component :is="currentIcon" class="ml-4 h-6 w-6 text-yellow-500 dark:text-white" /> -->
    </div>
</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)
const toggleDarkMode = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

const currentIcon = computed(() => {
    return colorMode.preference === 'dark' ? 'i-carbon-moon' : 'i-carbon:sun'
})
</script>

<style>
/* algun css */
</style>
