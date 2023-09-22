<template>
	<div
		v-show="isOpen || isAnimatingOut"
		class="fixed inset-0 z-50 flex items-center justify-center"
		:class="{
			'animate-jump-out opacity-0 delay-300 ease-out': isAnimatingOut,
			'animate-jump-in opacity-100 ease-in': isOpen,
		}">
		<div class="rounded bg-white p-4 shadow-lg dark:bg-dark-bg200">
			<h2 class="mb-4 text-xl text-light-text200 dark:text-dark-text100">
				{{
					actionType === 'create'
						? 'Crear Usuario'
						: actionType === 'edit'
						? 'Editar Usuario'
						: 'Eliminar Usuario'
				}}
			</h2>
			<form
				v-if="actionType !== 'delete'"
				class="w-full max-w-sm"
				@submit.prevent="confirmAction">
				<div class="mb-6 md:flex md:items-center">
					<div class="md:w-1/3">
						<label
							class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
							for="inline-full-name">
							Nombre
						</label>
					</div>
					<div class="md:w-2/3">
						<input
							id="inline-full-name"
							class="w-full appearance-none rounded bg-light-bg200 p-2 text-light-bg100 focus:border-light-accent100 focus:bg-light-bg300 focus:text-light-bg100 focus:outline-none dark:bg-dark-bg100 dark:focus:bg-dark-bg200"
							type="text" />
					</div>
				</div>
				<div class="mb-6 md:flex md:items-center">
					<div class="md:w-1/3">
						<label
							class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
							for="inline-full-name">
							Apellido Paterno
						</label>
					</div>
					<div class="md:w-2/3">
						<input
							id="inline-full-name"
							class="w-full appearance-none rounded bg-light-bg200 p-2 text-light-bg100 focus:border-light-accent100 focus:bg-light-bg300 focus:text-light-bg100 focus:outline-none dark:bg-dark-bg100 dark:focus:bg-dark-bg200"
							type="text" />
					</div>
				</div>
				<div class="mb-6 md:flex md:items-center">
					<div class="md:w-1/3">
						<label
							class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
							for="inline-full-name">
							Apellido Materno
						</label>
					</div>
					<div class="md:w-2/3">
						<input
							id="inline-full-name"
							class="w-full appearance-none rounded bg-light-bg200 p-2 text-light-bg100 focus:border-light-accent100 focus:bg-light-bg300 focus:text-light-bg100 focus:outline-none dark:bg-dark-bg100 dark:focus:bg-dark-bg200"
							type="text" />
					</div>
				</div>
				<div class="flex items-center justify-between">
					<button
						class="rounded border border-light-accent200 px-4 py-2 text-light-accent200 hover:border-light-accent100 hover:text-light-accent100 dark:border-dark-accent100 dark:bg-dark-bg100 dark:text-dark-primary100 dark:hover:bg-dark-bg200"
						type="submit">
						Aceptar
					</button>
					<div
						v-if="actionType === 'delete'"
						class="text-light-text200 dark:text-dark-text100">
						<p>¿Estás seguro de que deseas eliminar a este usuario?</p>
						<button
							class="text-light-accent200 dark:text-dark-accent200"
							@click="confirmAction">
							Aceptar
						</button>
					</div>
					<button
						class="text-light-accent200 dark:text-dark-accent200"
						@click="closeWithAnimation">
						Cancelar
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { User } from '@/types/User'
import { defineEmits, defineProps } from 'vue'

interface Props {
	isOpen: boolean
	actionType: string
	userData: User | null
}

const isAnimatingOut = ref(false)

const { isOpen, actionType, userData } = defineProps<Props>()

const emits = defineEmits(['confirm', 'close'])

const confirmAction = () => {
	// Aquí puedes agregar validación de formulario para las acciones de crear y editar

	isAnimatingOut.value = true
	setTimeout(() => {
		emits('confirm', userData)
		isAnimatingOut.value = false
	}, 1000)
}

const closeWithAnimation = () => {
	isAnimatingOut.value = true
	setTimeout(() => {
		emits('close')
		isAnimatingOut.value = false
	}, 1000) // Ajusta este valor al tiempo de duración de la animación de salida
}
</script>

<style>
/* Estilos para el modal */
</style>
