<template>
	<header
		id="header-inicio"
		class="relative py-4 sm:py-4 md:py-16 max-h-60 sm:max-h-60 md:max-h-64 lg:max-h-72 sm:flex sm:justify-between sm:items-center bg-gradient-to-r from-light-accent100 to-light-accent100 dark:from-dark-bg100 dark:to-dark-bg300 text-light-text100 dark:text-dark-text100">
		<!-- Container for everything -->
		<div class="w-full max-w-screen-xl mx-auto px-4">
			<!-- Container for nav, title and switch -->
			<div
				class="flex items-center justify-between mb-6 fixed top-0 left-0 w-full px-4 md:px-0 bg-gradient-to-r from-light-accent100 to-light-accent100 dark:from-dark-primary100 dark:to-dark-primary200 bg-opacity-40 z-50 shadow-lg">
				<!-- Container for title, nav, and switch -->
				<div class="container mx-auto flex items-center justify-between">
					<!-- Title for larger screens -->
					<h1
						class="hidden md:block text-3xl font-semibold z-10 text-light-accent200 dark:text-dark-accent200">
						<span class="font-light italic text-2xl">{{ titleNamePage }}</span>
						<span class="ml-2 font-bold">{{ titlePage }}</span>
					</h1>
					<div class="md:hidden">
						<button
							type="button"
							class="flex px-2 pt-2 pb-4 text-light-accent200 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100 focus:outline-none"
							@click="toggleNav">
							<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
								<path
									v-if="isOpen"
									fill-rule="evenodd"
									d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
								<path
									v-if="!isOpen"
									fill-rule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
							</svg>
						</button>
					</div>
					<!-- Navigation -->
					<nav
						:class="isOpen ? 'block' : 'hidden'"
						class="px-2 pt-2 pb-4 md:flex md:p-0 flex lg:space-x-4 lg:z-10">
						<NuxtLink
							:to="{ path: '/', hash: '#header-inicio' }"
							class="mt-1 block px-2 py-1 transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100">
							Inicio
						</NuxtLink>
						<NuxtLink
							:to="{ path: '/', hash: '#stack-section' }"
							class="mt-1 block px-2 py-1 sm:ml-2 transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100">
							Habilidades
						</NuxtLink>
						<NuxtLink
							:to="{ path: '/', hash: '#about-me-section' }"
							class="mt-1 block px-2 py-1 sm:ml-2 transition-transform transform font-semibold text-sm hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100">
							Sobre mí
						</NuxtLink>
						<NuxtLink
							:to="{ path: '/', hash: '#timeline-section' }"
							class="mt-1 block px-2 py-1 sm:ml-2 transition-transform transform font-semibold text-sm first-letter:hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100">
							Mi línea de tiempo
						</NuxtLink>
						<NuxtLink
							to="/biblioteca"
							class="mt-1 block px-2 py-1 sm:ml-2 transition-transform transform font-semibold text-sm first-letter:hover:scale-105 hover:bg-opacity-50 p-2 rounded text-light-accent200 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100">
							Bibliotecla
						</NuxtLink>
					</nav>
					<!-- ButtonSwitch -->
					<div class="flex"></div>
					<ButtonSwitch />
				</div>
			</div>
			<!-- Title for smaller screens -->
			<h1
				class="md:hidden text-3xl pt-14 mb-4 z-10 text-center text-light-accent200 dark:text-dark-primary200">
				<span class="font-light italic text-2xl">{{ titleNamePage }}</span>
				<span class="ml-2 font-bold">{{ titlePage }}</span>
			</h1>
		</div>
	</header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonSwitch from './ButtonSwitch.vue'

const titleNamePage = 'Rinc@n del'
const titlePage = 'T@n'
const isOpen = ref(false)

const toggleNav = (): void => {
	isOpen.value = !isOpen.value
}
</script>

<style lang="scss">
/* Estilos css */
</style>
