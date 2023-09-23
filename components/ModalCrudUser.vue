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
				@submit="onSubmit">
				<div class="mb-6 md:flex md:items-center">
					<div class="md:w-1/3">
						<label
							class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
							for="name">
							Nombre
						</label>
					</div>
					<div class="md:w-2/3">
						<input
							id="name"
							name="name"
							class="w-full appearance-none rounded border-light-accent200 bg-light-bg200 p-2 text-light-bg100 focus:border-light-accent100 focus:bg-light-bg300 focus:text-light-bg100 focus:outline-none dark:border-dark-accent100 dark:bg-dark-bg100 dark:focus:bg-dark-bg200"
							type="text"
							v-bind="name"
							autocomplete="off" />
						<span v-if="errors.name" class="text-red-600"
							>⛔️{{ errors.name }}</span
						>
					</div>
				</div>
				<div class="mb-6 md:flex md:items-center">
					<div class="md:w-1/3">
						<label
							class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
							for="firstName">
							Apellido Paterno
						</label>
					</div>
					<div class="md:w-2/3">
						<input
							id="firstName"
							name="firstName"
							class="w-full appearance-none rounded border-light-accent200 bg-light-bg200 p-2 text-light-bg100 focus:border-light-accent100 focus:bg-light-bg300 focus:text-light-bg100 focus:outline-none dark:border-dark-accent100 dark:bg-dark-bg100 dark:focus:bg-dark-bg200"
							type="text"
							v-bind="firstName"
							autocomplete="off" />
						<span>{{ errors.firstName }}</span>
					</div>
				</div>
				<div class="mb-6 md:flex md:items-center">
					<div class="md:w-1/3">
						<label
							class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
							for="lastName">
							Apellido Materno
						</label>
					</div>
					<div class="md:w-2/3">
						<input
							id="lastName"
							name="lastName"
							class="w-full appearance-none rounded border-light-accent200 bg-light-bg200 p-2 text-light-bg100 focus:border-light-accent100 focus:bg-light-bg300 focus:text-light-bg100 focus:outline-none dark:border-dark-accent100 dark:bg-dark-bg100 dark:focus:bg-dark-bg200"
							type="text"
							v-bind="lastName"
							autocomplete="off" />
						<span>{{ errors.lastName }}</span>
					</div>
				</div>
				<div class="flex items-center justify-between">
					<button
						class="rounded border border-light-accent200 px-4 py-2 text-light-accent200 hover:border-light-accent100 hover:text-light-accent100 dark:border-dark-accent100 dark:bg-dark-bg100 dark:text-dark-primary100 dark:hover:bg-dark-bg200">
						Aceptar
					</button>
					<div
						v-if="actionType === 'delete'"
						class="text-light-text200 dark:text-dark-text100">
						<p>¿Estás seguro de que deseas eliminar a este usuario?</p>
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
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

interface Props {
	isOpen: boolean
	actionType: string
	userData: User | null
}

const isAnimatingOut = ref(false)

const { isOpen, actionType } = defineProps<Props>()

const emits = defineEmits(['confirm', 'close'])

// Create the form
const { defineInputBinds, handleSubmit, errors, resetForm } = useForm({
	validationSchema: object({
		name: string()
			.required('Nombre requerido')
			.min(3, 'Minimo 3 caracteres')
			.matches(/^[a-zA-Z\s]*$/, 'Solo se permiten letras'),
		firstName: string(),
		lastName: string(),
	}),
})

// Define fields
const name = defineInputBinds('name')
const firstName = defineInputBinds('firstName')
const lastName = defineInputBinds('lastName')

// Submit handler
const onSubmit = handleSubmit((userData) => {
	// Submit to API
	isAnimatingOut.value = true
	setTimeout(() => {
		emits('confirm', userData)
		isAnimatingOut.value = false
		resetForm()
	}, 1000)
})

const closeWithAnimation = () => {
	isAnimatingOut.value = true
	setTimeout(() => {
		emits('close')
		isAnimatingOut.value = false
		resetForm()
	}, 1000) // Ajusta este valor al tiempo de duración de la animación de salida
}
</script>
