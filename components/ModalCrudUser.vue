<template>
	<div
		v-show="isOpen"
		class="fixed inset-0 z-50 flex items-center justify-center">
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
				v-if="actionType === 'create'"
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
							v-bind="name"
							autocomplete="off"
							name="name"
							class="w-full appearance-none rounded border-light-accent200 bg-light-bg200 p-2 text-light-bg100 focus:border-light-accent100 focus:bg-light-bg300 focus:text-light-bg100 focus:outline-none dark:border-dark-accent100 dark:bg-dark-bg100 dark:focus:bg-dark-bg200"
							type="text" />
						<span v-if="errors.name" class="text-red-600">
							⛔️{{ errors.name }}
						</span>
					</div>
				</div>
				<div class="mb-6 md:flex md:items-center">
					<div class="md:w-1/3">
						<label
							class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
							for="first-name">
							Apellido Paterno
						</label>
					</div>
					<div class="md:w-2/3">
						<input
							id="first-name"
							v-bind="firstName"
							name="firstName"
							class="w-full appearance-none rounded border-light-accent200 bg-light-bg200 p-2 text-light-bg100 focus:border-light-accent100 focus:bg-light-bg300 focus:text-light-bg100 focus:outline-none dark:border-dark-accent100 dark:bg-dark-bg100 dark:focus:bg-dark-bg200"
							type="text"
							autocomplete="off" />
						<span v-if="errors.firstName" class="text-red-600">
							⛔️{{ errors.firstName }}
						</span>
					</div>
				</div>
				<div class="mb-6 md:flex md:items-center">
					<div class="md:w-1/3">
						<label
							class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
							for="last-name">
							Apellido Materno
						</label>
					</div>
					<div class="md:w-2/3">
						<input
							id="last-name"
							v-bind="lastName"
							name="lastName"
							class="w-full appearance-none rounded border-light-accent200 bg-light-bg200 p-2 text-light-bg100 focus:border-light-accent100 focus:bg-light-bg300 focus:text-light-bg100 focus:outline-none dark:border-dark-accent100 dark:bg-dark-bg100 dark:focus:bg-dark-bg200"
							type="text"
							autocomplete="off" />
						<span v-if="errors.lastName" class="text-red-600">
							⛔️{{ errors.lastName }}
						</span>
					</div>
				</div>
				<div class="flex items-center justify-between">
					<button
						class="rounded border border-light-accent200 px-4 py-2 text-light-accent200 hover:border-light-accent100 hover:text-light-accent100 dark:border-dark-accent100 dark:bg-dark-bg100 dark:text-dark-primary100 dark:hover:bg-dark-bg200">
						Aceptar
					</button>
					<button
						class="text-light-accent200 dark:text-dark-accent200"
						@click="close">
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
import { defineEmits, defineProps } from 'vue'
import { object, string } from 'yup'

interface Props {
	isOpen: boolean
	actionType: string
	userData?: User | null
}

const props = defineProps<Props>()
console.log(props.userData)
const emits = defineEmits(['confirm', 'close'])

const validationSchema = object({
	name: string()
		.required('Nombre requerido')
		.min(4, 'Minimo 4 caracteres')
		.matches(/^[a-zA-Z\s]*$/, 'Solo se permiten letras'),
	firstName: string()
		.required('Primer Apellido requerido')
		.min(4, 'Minimo 4 caracteres')
		.matches(/^[a-zA-Z\s]*$/, 'Solo se permiten letras'),
	lastName: string()
		.required('Segundo Apellido requerido')
		.min(4, 'Minimo 4 caracteres')
		.matches(/^[a-zA-Z\s]*$/, 'Solo se permiten letras'),
})

const { handleSubmit, defineInputBinds, errors, resetForm } = useForm({
	validationSchema,
})
const name = defineInputBinds('name')
const firstName = defineInputBinds('firstName')
const lastName = defineInputBinds('lastName')

const onSubmit = handleSubmit((values) => {
	console.log(values)
	// emits('confirm', values)
	resetForm()
})

const close = () => {
	emits('close')
}
</script>
