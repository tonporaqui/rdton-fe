<template>
  <ClientOnly>
    <UToggle v-model="selected" />
    <component :is="currentIconComponent" class="ml-1 h-6 w-6"/>
    <template #fallback>
      <div class="w-2 h-2" />
    </template>
  </ClientOnly>
</template>

<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
import { watch } from 'vue';
const colorMode = useColorMode()

const selected = ref(colorMode.value === 'dark')

watch(selected, (newValue) => {
  colorMode.value = newValue ? 'dark' : 'light';
});

const currentIconComponent = computed(() => selected.value ? MoonIcon : SunIcon);
</script>

<style scoped>
/* Puedes agregar estilos aquí si lo necesitas */
</style>
