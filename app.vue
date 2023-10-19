<script setup lang="ts">
useHead({
	bodyAttrs: {
		class:
			'dark:to-dark-bg200 scrollbar-thin scrollbar-thumb-light-bg300  scrollbar-track-light-bg200 dark:scrollbar-thumb-dark-primary100 dark:scrollbar-track-dark-bg200',
	},
})
</script>
<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
