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
			<form v-if="actionType !== 'delete'" @submit.prevent="confirmAction">
				<!-- Campos del formulario para crear/editar (v-model con userData) -->
				<!-- ... -->
				<button
					type="submit"
					class="text-light-accent200 dark:text-dark-accent200">
					Aceptar
				</button>
			</form>
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
