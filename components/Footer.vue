<template>
	<div class="content mx-auto text-center h-40">
		<h1
			class="text-3xl pt-14 sm:pt-56 mb-4 z-10 text-center text-light-accent200 dark:text-dark-primary200">
			<span class="font-light italic text-2xl">{{ titleNamePage }}</span>
			<span class="ml-2 font-bold">{{ titlePage }}</span>
		</h1>
		{{ currentYear }}
	</div>
</template>

<script setup lang="ts">
const titleNamePage = 'Rinc@n del'
const titlePage = 'T@n'
const currentYear: number = new Date().getUTCFullYear()
</script>
