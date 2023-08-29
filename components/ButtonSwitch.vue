<template>
    <div 
        @click="toggleDarkMode" 
        role="button" 
        aria-label="Toggle Dark Mode" 
        style="cursor: pointer;" 
        class="transition-transform transform hover:scale-105"
    >
        <Icon :name="currentIcon" size="27px" class="ml-4 h-6 w-6  font-semibold text-light-accent200 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100"></Icon>
    </div>
</template>


<script setup>
const colorMode = useColorMode()

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
