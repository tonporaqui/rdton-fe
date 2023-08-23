<template>
    <div @click="toggleDarkMode">
        <component :is="currentIcon" class="ml-4 h-6 w-6 text-yellow-500 dark:text-white" />
    </div>
</template>

<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
const colorMode = useColorMode()

console.log(colorMode.preference)

const toggleDarkMode = () => {
    if (colorMode.preference === 'dark') {
        colorMode.preference = 'light'
    } else {
        colorMode.preference = 'dark'
    }
}

const currentIcon = computed(() => {
    return colorMode.preference === 'dark' ? MoonIcon : SunIcon
})
</script>

<style>
/* algun css */
</style>
