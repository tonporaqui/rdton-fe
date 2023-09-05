<template>
	<header
		id="header-inicio"
		class="relative max-h-60 bg-gradient-to-r from-light-accent100 to-light-accent100 py-4 text-light-text100 dark:from-dark-bg100 dark:to-dark-bg300 dark:text-dark-text100 sm:flex sm:max-h-60 sm:items-center sm:justify-between sm:py-4 md:max-h-64 md:py-16 lg:max-h-72">
		<!-- Container for everything -->
		<div class="mx-auto w-full max-w-screen-xl px-4">
			<!-- Container for nav, title and switch -->
			<div
				class="fixed left-0 top-0 z-50 mb-6 flex w-full items-center justify-between bg-opacity-40 bg-gradient-to-r from-light-accent100 to-light-accent100 px-4 shadow-lg dark:from-dark-primary100 dark:to-dark-primary200 md:px-0">
				<!-- Container for title, nav, and switch -->
				<div class="container mx-auto flex items-center justify-between">
					<!-- Title for larger screens -->
					<h1
						class="z-10 hidden text-3xl font-semibold text-light-accent200 dark:text-dark-accent200 md:block">
						<span class="text-2xl font-light italic">{{ titleNamePage }}</span>
						<span class="ml-2 font-bold">{{ titlePage }}</span>
					</h1>
					<div class="md:hidden">
						<button
							type="button"
							class="flex px-2 pb-4 pt-2 text-light-accent200 hover:text-light-primary100 focus:outline-none dark:text-dark-accent200 dark:hover:text-dark-primary100"
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
						class="flex px-2 pb-4 pt-2 md:flex md:p-0 lg:z-10 lg:space-x-4">
						<NuxtLink
							:to="{ path: '/', hash: '#header-inicio' }"
							class="mt-1 block rounded p-2 py-1 text-sm font-semibold text-light-accent200 transition-transform hover:scale-105 hover:bg-opacity-50 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100">
							Inicio
						</NuxtLink>
						<NuxtLink
							:to="{ path: '/', hash: '#stack-section' }"
							class="mt-1 block rounded p-2 py-1 text-sm font-semibold text-light-accent200 transition-transform hover:scale-105 hover:bg-opacity-50 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100 sm:ml-2">
							Habilidades
						</NuxtLink>
						<NuxtLink
							:to="{ path: '/', hash: '#about-me-section' }"
							class="mt-1 block rounded p-2 py-1 text-sm font-semibold text-light-accent200 transition-transform hover:scale-105 hover:bg-opacity-50 hover:text-light-primary100 dark:text-dark-accent200 dark:hover:text-dark-primary100 sm:ml-2">
							Sobre mí
						</NuxtLink>
						<NuxtLink
							:to="{ path: '/', hash: '#timeline-section' }"
							class="mt-1 block rounded p-2 py-1 text-sm font-semibold text-light-accent200 transition-transform hover:bg-opacity-50 hover:text-light-primary100 first-letter:hover:scale-105 dark:text-dark-accent200 dark:hover:text-dark-primary100 sm:ml-2">
							Mi línea de tiempo
						</NuxtLink>
						<NuxtLink
							to="/biblioteca"
							class="mt-1 block rounded p-2 py-1 text-sm font-semibold text-light-accent200 transition-transform hover:bg-opacity-50 hover:text-light-primary100 first-letter:hover:scale-105 dark:text-dark-accent200 dark:hover:text-dark-primary100 sm:ml-2">
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
				class="z-10 mb-4 pt-14 text-center text-3xl text-light-accent200 dark:text-dark-primary200 md:hidden">
				<span class="text-2xl font-light italic">{{ titleNamePage }}</span>
				<span class="ml-2 font-bold">{{ titlePage }}</span>
			</h1>
		</div>
	</header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonSwitch from './ButtonSwitch.vue'

const titleNamePage = titleNameGlobal().value.titleNamePage
const titlePage = titleNameGlobal().value.titlePage
const isOpen = ref(false)

const toggleNav = (): void => {
	isOpen.value = !isOpen.value
}
</script>

<style lang="scss">
/* Estilos css */
</style>
