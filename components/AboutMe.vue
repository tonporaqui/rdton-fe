<script setup lang="ts">
interface AboutMeInfo {
	id: string
	image?: string
	title: string
	description: string
}

const props = defineProps({
	aboutMeInfo: {
		type: Array as () => AboutMeInfo[],
		required: true,
	},
})

const getAosEffect = (index: number): string => {
	const effects = ['fade-up-right', 'fade-up-left', 'fade-up', 'zoom-in']
	return effects[index % effects.length]
}
</script>

<template>
	<section
		id="about-me-section"
		class="mt-32 p-20 sm:mt-32 sm:p-20 md:p-10 lg:p-20">
		<h2
			class="mb-6 text-center text-3xl font-extrabold text-light-accent200 dark:text-dark-primary100">
			Sobre mí
		</h2>
		<div class="flex justify-center">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
				<div
					v-for="(info, index) in props.aboutMeInfo"
					:key="info.id"
					class="flex flex-col items-center rounded-lg bg-light-bg100 p-4 shadow-md transition dark:bg-dark-bg300 dark:shadow-dark-bg200"
					:data-aos="getAosEffect(index)"
					:data-aos-delay="(index + 1) * 100">
					<NuxtImg
						:src="info.image || 'https://stackdiary.com/140x100.png'"
						alt="image.ref"
						width="256"
						height="256"
						class="mb-4 rounded-t-lg object-cover" />
					<h3
						class="mb-4 text-center text-xl font-semibold text-light-accent200 dark:text-dark-primary100">
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
<style scoped>
/* Estilos */
</style>
