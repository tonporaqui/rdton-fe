<script setup lang="ts">
interface TimeLineEvent {
	type: string
	icon: string
	title?: string
	position?: string
	institution?: string
	company?: string
	startDate: string
	endDate?: string
}

const props = defineProps({
	timeLineMe: {
		type: Array as () => TimeLineEvent[],
		required: true,
	},
})

const getAosEffect = (type: string): string => {
	return type === 'Estudios' ? 'fade-left' : 'fade-right'
}

const formatDate = (dateStr: string): string => {
	const date = new Date(dateStr + '-01')
	return date.toLocaleString('es-ES', { month: 'long', year: 'numeric' })
}
</script>

<template>
	<section
		id="timeline-section"
		class="mt-32 p-20 sm:mt-32 sm:p-20 md:p-10 lg:p-20">
		<h2
			class="mb-6 text-center text-3xl font-extrabold text-light-accent200 dark:text-dark-primary100">
			Mi línea de tiempo
		</h2>
		<div class="flex justify-center">
			<div class="relative h-full overflow-hidden p-10">
				<div
					class="absolute h-full border border-gray-700"
					style="left: 50%"></div>

				<div
					v-for="(event, index) in props.timeLineMe"
					:key="index"
					:class="
						event.type === 'Estudios'
							? 'left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between'
							: 'right-timeline mb-8 flex w-full items-center justify-between'
					"
					:data-aos="getAosEffect(event.type)"
					:data-aos-delay="(index + 1) * 100">
					<div class="order-1 w-5/12"></div>
					<div
						class="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl dark:bg-dark-bg300">
						<h1
							class="mx-auto text-lg font-semibold text-white dark:text-dark-text100">
							{{ index + 1 }}
						</h1>
					</div>
					<div
						:class="
							event.type === 'Estudios'
								? 'order-1 flex w-5/12 flex-col items-start rounded-lg bg-light-bg100 px-6 py-4 shadow-md dark:bg-dark-bg300'
								: 'order-1 flex w-5/12 flex-col items-start rounded-lg bg-light-bg300 px-6 py-4 shadow-md dark:bg-dark-bg200'
						">
						<!-- Contenedor para el ícono y el tipo -->
						<div class="mb-2 flex items-center">
							<Icon
								:name="event.icon"
								size="27px"
								:class="
									event.type === 'Estudios'
										? 'mr-2 text-light-text100 dark:text-dark-text100'
										: 'mr-2 text-light-text100 dark:text-dark-text100'
								">
							</Icon>
							<h2
								class="leading-relaxed"
								:class="
									event.type === 'Estudios'
										? 'text-light-text100 dark:text-dark-text100'
										: 'text-light-text100 dark:text-dark-text100'
								">
								{{ event.type }}
							</h2>
						</div>

						<h3
							class="mb-2 font-bold"
							:class="
								event.type === 'Estudios'
									? 'text-light-accent200 dark:text-dark-primary100'
									: 'text-light-accent200 dark:text-dark-primary100'
							">
							{{ event.title || event.position }}
						</h3>
						<p
							class="text-lg leading-relaxed text-light-accent200 dark:text-dark-accent100">
							{{ event.institution || event.company }}
						</p>
						<p
							class="text-sm"
							:class="
								event.type === 'Estudios'
									? 'text-light-text200 dark:text-dark-text100'
									: 'text-light-text100 dark:text-dark-text100'
							">
							{{ formatDate(event.startDate) }} -
							{{ event.endDate ? formatDate(event.endDate) : 'Presente' }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<style scoped>
.dark .dark-bg300 {
	background-color: #1e1e1e;
}

.dark .dark-bg400 {
	background-color: #121212;
}

/* Puedes agregar estilos adicionales aquí si lo necesitas */
</style>
