<template>
	<section
		id="about-me-section"
		class="p-20 sm:p-20 md:p-10 lg:p-20 mt-32 sm:mt-32 md:mt-30">
		<h2
			class="text-3xl font-extrabold mb-6 text-center text-light-accent200 dark:text-dark-primary100">
			Sobre mí
		</h2>
		<div class="flex justify-center">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
				<div
					v-for="(info, index) in aboutMeInfo"
					:key="info.id"
					class="transform transition p-4 bg-light-bg100 dark:bg-dark-bg300 rounded-lg shadow-md dark:shadow-dark-bg200 flex flex-col items-center"
					:data-aos="getAosEffect(index)"
					:data-aos-delay="(index + 1) * 100">
					<NuxtImg
						:src="info.image || 'https://stackdiary.com/140x100.png'"
						alt="image.ref"
						width="256"
						height="256"
						class="object-cover rounded-t-lg mb-4" />
					<h3
						class="text-xl font-semibold text-center mb-4 text-light-accent200 dark:text-dark-primary100">
						{{ info.title }}
					</h3>
					<span
						class="pl-2 leading-relaxed text-light-text200 dark:text-dark-text100">
						{{ info.description }}
					</span>
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
			const effects = ['fade-up-right', 'fade-up-left', 'fade-up', 'zoom-in']
			return effects[index % effects.length]
		},
	},
}
</script>

<style scoped>
/* Estilos */
</style>
