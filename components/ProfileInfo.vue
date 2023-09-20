<template lang="">
	<div>
		<!-- Profile Info -->
		<figure
			class="z-20 mx-auto my-12 max-w-3xl rounded-xl bg-light-bg100 py-2 shadow-md dark:bg-dark-bg300 dark:text-dark-text200 dark:shadow-dark-bg200 md:mt-32 md:flex md:p-0 lg:mt-40">
			<nuxt-img
				class="mx-auto h-28 w-28 rounded-full md:h-auto md:w-48 md:rounded-none"
				src="/images/foto.jpg"
				alt="Gaston Sepulveda" />

			<div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
				<blockquote>
					<p
						ref="descriptionParagraph"
						class="text-sm font-medium text-light-text200 dark:text-dark-text100">
						<!-- El contenido de 'description' se añadirá aquí a través de JavaScript -->
					</p>
				</blockquote>
				<figcaption>
					<div
						class="font-semibold text-light-accent200 dark:text-dark-primary100">
						{{ nombre }}
					</div>
					<div
						class="text-sm font-light text-light-text100 dark:text-dark-text100">
						{{ tituloUniersitario }}
					</div>
				</figcaption>
			</div>
		</figure>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const nombre = titleNameGlobal().value.miNombre
const tituloUniersitario = titleNameGlobal().value.miTituloUniversitario
const description = titleNameGlobal().value.miDescripcion

const descriptionParagraph = ref<HTMLElement | null>(null)
onMounted(() => {
	const content = description
	const ele = content
		.split('')
		.map((char) => `<span style="display: inline; opacity: 0;">${char}</span>`)
		.join('')

	if (descriptionParagraph.value) {
		descriptionParagraph.value.innerHTML = ele

		const spans = descriptionParagraph.value.querySelectorAll('span')
		spans.forEach((span, i) => {
			setTimeout(() => {
				span.style.opacity = '1'
			}, 70 * i)
		})
	}
})
</script>

<style lang="css">
/* Aquí puedes añadir estilos adicionales si es necesario */
</style>
