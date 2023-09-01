<template>
	<section
		id="about-me-section"
		class="p-20 sm:p-20 md:p-10 mt-32 sm:mt-32 md:mt-30"
	>
		<h2
			class="text-3xl font-extrabold mb-6 text-center text-light-accent200 dark:text-dark-primary100"
		>
			Sobre mí
		</h2>

		<!-- Contenedor de las tarjetas con diseño de cuadrícula -->
		<div class="flex justify-center">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
				<!-- Iterar sobre el contenido del store para mostrar cada card -->
				<div
					v-for="(info, index) in aboutMeInfo"
					:key="info.id"
					class="transform transition hover:scale-100 p-4 bg-light-bg100 dark:bg-dark-bg300 rounded-lg shadow-md dark:shadow-dark-bg200"
					:data-aos="getAosEffect(index)"
					:data-aos-delay="(index + 1) * 100"
				>
					<NuxtImg
						:src="info.image || 'https://stackdiary.com/140x100.png'"
						alt="image.ref"
						width="300"
						height="169"
						class="w-full h-48 object-cover rounded-t-lg"
					/>
					<h3
						class="text-xl font-semibold text-center mb-4 mt-4 text-light-accent200 dark:text-dark-primary100"
					>
						{{ info.title }}
					</h3>
					<span
						class="pl-2 leading-relaxed text-light-text200 dark:text-dark-text100"
						>{{ info.description }}</span
					>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		aboutMeInfo: {
			type: Array,
			required: true,
		},
	},
	methods: {
		getAosEffect(index) {
			const effects = ["fade-up-right", "fade-up-left", "fade-up", "zoom-in"]
			return effects[index % effects.length]
		},
	},
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si lo necesitas */
</style>
