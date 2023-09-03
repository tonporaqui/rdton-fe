<template>
	<div class="content mx-auto text-center h-48">
		Rincon del Ton. {{ currentYear }}
	</div>
</template>

<script setup lang="ts">
const currentYear: number = new Date().getUTCFullYear()
</script>
