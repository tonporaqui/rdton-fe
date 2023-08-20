<template>
  <ClientOnly>
    <UToggle v-model="selected" :class="[selected.value ? 'bg-yellow-500' : 'bg-indigo-400']" />
    <component :is="currentIconComponent" class="ml-4 h-6 w-6 text-yellow-500 dark:text-white " />
    <template #fallback>
      <div class="w-2 h-2" />
    </template>
  </ClientOnly>
</template>

<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
import { watch, onMounted } from 'vue'

const colorMode = useColorMode()
const selected = ref(colorMode.value === 'dark')

// Verifica la preferencia del usuario en localStorage al montar el componente
onMounted(() => {
  const darkModeSetting = localStorage.getItem('darkMode');
  if (darkModeSetting === 'enabled') {
    selected.value = true
  } else if (darkModeSetting === 'disabled') {
    selected.value = false
  }
})

watch(selected, (newValue) => {
  colorMode.value = newValue ? 'dark' : 'light';
  // Guarda la preferencia del usuario en localStorage
  localStorage.setItem('darkMode', newValue ? 'enabled' : 'disabled')
})

const currentIconComponent = computed(() => selected.value ? MoonIcon : SunIcon)
</script>

<style scoped>
/* Puedes agregar estilos aquí si lo necesitas */
</style>
