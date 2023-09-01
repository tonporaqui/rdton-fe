<template>
	<section
		id="timeline-section"
		class="p-20 sm:p-20 md:p-10 mt-32 sm:mt-32 md:mt-30"
	>
		<h2
			class="text-3xl font-extrabold mb-6 text-light-accent200 dark:text-dark-primary100 text-center"
		>
			Mi línea de tiempo
		</h2>
		<div class="flex justify-center">
			<div class="relative wrap overflow-hidden p-10 h-full">
				<div
					class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
					style="left: 50%"
				></div>

				<div
					v-for="(event, index) in timeLineMe"
					:key="index"
					:class="
						event.type === 'Estudios'
							? 'mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline'
							: 'mb-8 flex justify-between items-center w-full right-timeline'
					"
					:data-aos="getAosEffect(event.type)"
					:data-aos-delay="(index + 1) * 100"
				>
					<div class="order-1 w-5/12"></div>
					<div
						class="z-20 flex items-center order-1 bg-gray-800 dark:bg-dark-bg300 shadow-xl w-8 h-8 rounded-full"
					>
						<h1
							class="mx-auto text-white dark:text-dark-text100font-semibold text-lg"
						>
							{{ index + 1 }}
						</h1>
					</div>
					<div
						:class="
							event.type === 'Estudios'
								? 'order-1 bg-light-bg100 dark:bg-dark-bg300 rounded-lg shadow-md w-5/12 px-6 py-4 flex flex-col items-start'
								: 'order-1 bg-light-bg300 dark:bg-dark-bg200 rounded-lg shadow-md w-5/12 px-6 py-4 flex flex-col items-start'
						"
					>
						<!-- Contenedor para el ícono y el tipo -->
						<div class="flex items-center mb-2">
							<Icon
								:name="event.icon"
								size="27px"
								:class="
									event.type === 'Estudios'
										? 'text-light-text100 dark:text-dark-text100 mr-2'
										: 'text-light-text100 dark:text-dark-text100 mr-2'
								"
							>
							</Icon>
							<h2
								class="leading-relaxed"
								:class="
									event.type === 'Estudios'
										? 'text-light-text100 dark:text-dark-text100'
										: 'text-light-text100 dark:text-dark-text100'
								"
							>
								{{ event.type }}
							</h2>
						</div>

						<h3
							class="mb-2 font-bold"
							:class="
								event.type === 'Estudios'
									? 'text-light-accent200 dark:text-dark-primary100'
									: 'text-light-accent200 dark:text-dark-primary100'
							"
						>
							{{ event.title || event.position }}
						</h3>
						<p
							class="text-lg leading-relaxed text-light-accent200 dark:text-dark-accent100"
						>
							{{ event.institution || event.company }}
						</p>
						<p
							class="text-sm"
							:class="
								event.type === 'Estudios'
									? 'text-light-text200 dark:text-dark-text100'
									: 'text-light-text100 dark:text-dark-text100'
							"
						>
							{{ formatDate(event.startDate) }} -
							{{ event.endDate ? formatDate(event.endDate) : "Presente" }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		timeLineMe: {
			type: Array,
			required: true,
		},
	},
	methods: {
		getAosEffect(type) {
			return type === "Estudios" ? "fade-left" : "fade-right"
		},
		formatDate(dateStr) {
			const date = new Date(dateStr + "-01")
			return date.toLocaleString("es-ES", { month: "long", year: "numeric" })
		},
	},
}
</script>

<style scoped>
.dark .dark-bg300 {
	background-color: #1e1e1e;
}

.dark .dark-bg400 {
	background-color: #121212;
}

/* Puedes agregar estilos adicionales aquí si lo necesitas */
</style>
