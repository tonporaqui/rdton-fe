<template>
	<div class="content mx-auto text-center h-32">
		<h1
			class="flex justify-center items-center text-3xl pt-5 pb-5 text-light-accent200 dark:text-dark-primary200">
			<div class="font-light italic text-2xl">
				{{ titleNamePage }}
			</div>
			<div class="ml-2 font-bold">{{ titlePage }}</div>
			<div class="mr-5 font-light italic text-xl ml-4">{{ currentYear }}</div>
		</h1>
	</div>
</template>

<script setup lang="ts">
const titleNamePage = titleNameGlobal().value.titleNamePage
const titlePage = titleNameGlobal().value.titlePage
const currentYear: number = new Date().getUTCFullYear()
</script>
