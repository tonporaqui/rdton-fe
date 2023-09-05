<template>
	<section
		id="stack-section"
		class="md:mt-30 mt-32 p-20 sm:mt-32 sm:p-20 md:p-10 lg:p-20">
		<h2
			class="mb-6 text-center text-3xl font-extrabold text-light-accent200 dark:text-dark-primary100">
			Habilidades
		</h2>
		<!-- Contenedor de las tarjetas con diseño de cuadrícula -->
		<div class="flex justify-center">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				<!-- Iterar sobre las habilidades para mostrar cada item -->
				<div
					v-for="(skill, index) in props.skills"
					:key="index"
					class="rounded-lg bg-light-bg100 p-4 shadow-md transition dark:bg-dark-bg300 dark:shadow-dark-bg200"
					:data-aos="getAosEffect(index)"
					:data-aos-delay="(index + 1) * 100">
					<img
						:src="skill.image || 'https://stackdiary.com/140x100.png'"
						alt="image ref"
						class="h-48 w-full rounded-t-lg object-cover" />
					<h3
						class="my-4 text-center text-xl font-semibold text-light-accent200 dark:text-dark-primary100">
						{{ skill.title }}
					</h3>

					<ul>
						<li
							v-for="(description, descIndex) in skill.description"
							:key="descIndex">
							<!-- Mostrar icono y descripción -->
							<Icon :name="description.icon" size="27px"></Icon>
							<span
								class="pl-2 leading-relaxed text-light-text200 dark:text-dark-text100"
								>{{ description.title }}</span
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
interface Skill {
	id: string
	image?: string
	title: string
	description: { icon: string; title: string }[]
}

const props = defineProps({
	skills: {
		type: Array as () => Skill[],
		required: true,
	},
})

const getAosEffect = (index: number): string => {
	const effects = ['fade-up-right', 'fade-up-left', 'fade-up', 'zoom-in']
	return effects[index % effects.length]
}
</script>

<style scoped>
/* Puedes agregar estilos aquí si lo necesitas */
</style>
