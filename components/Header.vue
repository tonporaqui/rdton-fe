<template>
	<header
		id="header-inicio"
		class="relative max-h-60 bg-gradient-to-r from-light-accent100 to-light-accent100 py-4 text-light-text100 dark:from-dark-bg100 dark:to-dark-bg300 dark:text-dark-text100 sm:flex sm:max-h-60 sm:items-center sm:justify-between sm:py-4 md:max-h-64 md:py-16 lg:max-h-72">
		<!-- Container for everything -->
		<div class="mx-auto w-full max-w-screen-xl px-4">
			<!-- Container for nav, title and switch -->
			<div
				class="fixed left-0 top-0 z-50 mb-6 flex w-full items-center justify-between bg-opacity-40 bg-gradient-to-r from-light-accent100 to-light-accent100 px-4 shadow-lg dark:from-dark-primary100 dark:to-dark-primary200 md:px-0">
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
				<!-- Container for title, nav, and switch -->
				<div class="container mx-auto flex items-center justify-between">
					<!-- Title for larger screens -->
					<div
						class="flex items-center justify-between text-light-accent200 dark:text-dark-accent200">
						<div class="ml-2 block">
							<span class="">
								{{ titleNamePage }}
							</span>
							<span class="ml-1 text-2xl font-bold">
								{{ titlePage }}
							</span>
						</div>

						<!-- Navigation -->
						<nav
							:class="isOpen ? 'flex flex-col' : 'hidden'"
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
			</div>
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
							class="text-sm font-medium text-light-text200 dark:text-dark-text100">
							{{ description }}
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
	</header>
</template>

<script setup lang="ts">
import ButtonSwitch from './ButtonSwitch.vue'

const titleNamePage = titleNameGlobal().value.titleNamePage
const titlePage = titleNameGlobal().value.titlePage
const nombre = 'Gaston Sepulveda'
const tituloUniersitario = 'Ingeniero Informático'
const description =
	'Apasionado por la tecnología y la innovación, especializado en Arquitectura de Software, cursando Magíster en Gestión de Información y Telecomunicaciones, y con un claro enfoque al liderazgo orientado a objetivos y proyectos ágiles.'
const isOpen = ref(false)

const toggleNav = (): void => {
	isOpen.value = !isOpen.value
}
</script>

<style lang="scss">
/* Estilos css */
</style>
