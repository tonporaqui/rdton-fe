<template>
	<div class="mx-auto h-32 text-center">
		<h1
			class="flex items-center justify-center py-5 text-3xl text-light-accent200 dark:text-dark-primary200">
			<div class="text-2xl font-light italic">
				{{ titleNamePage }}
			</div>
			<div class="ml-2 font-bold">{{ titlePage }}</div>
			<div class="ml-4 mr-5 text-xl font-light italic">{{ currentYear }}</div>
		</h1>
	</div>
</template>

<script setup lang="ts">
const titleNamePage = titleNameGlobal().value.titleNamePage
const titlePage = titleNameGlobal().value.titlePage
const currentYear: number = new Date().getUTCFullYear()
</script>
