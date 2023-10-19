<script lang="ts" setup>
import { User } from '@/types/User'
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

const props = defineProps({
	isOpen: {
		type: Boolean,
		required: true,
	},
	actionType: {
		type: String,
		required: true,
	},
	userData: {
		type: Object as PropType<User | null>,
		default: null,
	},
})
const editNew = ref<User | null>(null)

watch(
	() => props.userData,
	(newValue) => {
		editNew.value = newValue
	},
	{ deep: true },
)

const emits = defineEmits(['confirm', 'close'])

const validationSchema = object({
	name: string()
		.required('Nombre requerido')
		.min(4, 'Minimo 4 caracteres')
		.matches(/^[a-zA-Z\s]*$/, 'Solo se permiten letras'),
	first_name: string()
		.required('Primer Apellido requerido')
		.min(4, 'Minimo 4 caracteres')
		.matches(/^[a-zA-Z\s]*$/, 'Solo se permiten letras'),
	last_name: string()
		.required('Segundo Apellido requerido')
		.min(4, 'Minimo 4 caracteres')
		.matches(/^[a-zA-Z\s]*$/, 'Solo se permiten letras'),
})

const { handleSubmit, defineInputBinds, errors, resetForm } = useForm({
	validationSchema,
	initialValues: {
		id: '',
		name: '',
		first_name: '',
		last_name: '',
	},
})

watch(
	() => editNew.value,
	(newValue) => {
		resetForm({
			values: newValue
				? {
						id: newValue.id,
						name: newValue.name,
						first_name: newValue.first_name,
						last_name: newValue.last_name,
				  }
				: {
						id: '',
						name: '',
						first_name: '',
						last_name: '',
				  },
		})
	},
	{ deep: true },
)

const id = defineInputBinds('id')
const name = defineInputBinds('name')
const first_name = defineInputBinds('first_name')
const last_name = defineInputBinds('last_name')

const onSubmit = handleSubmit((values) => {
	emits('confirm', values)
	resetForm()
})

const close = () => {
	emits('close')
	resetForm()
}
</script>

<template>
	<transition
		v-show="isOpen"
		enter-active-class="duration-300 ease-out"
		enter-from-class="transform opacity-0"
		enter-to-class="opacity-100"
		leave-active-class="duration-200 ease-in"
		leave-from-class="opacity-100"
		leave-to-class="transform opacity-0">
		<div class="fixed inset-0 z-50 flex items-center justify-center">
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
				<form class="w-full max-w-sm" @submit="onSubmit">
					<div v-if="actionType === 'create' || actionType === 'edit'">
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
									for="first_Name">
									Apellido Paterno
								</label>
							</div>
							<div class="md:w-2/3">
								<input
									id="first_Name"
									v-bind="first_name"
									name="firstName"
									class="w-full appearance-none rounded border-light-accent200 bg-light-bg200 p-2 text-light-bg100 focus:border-light-accent100 focus:bg-light-bg300 focus:text-light-bg100 focus:outline-none dark:border-dark-accent100 dark:bg-dark-bg100 dark:focus:bg-dark-bg200"
									type="text"
									autocomplete="off" />
								<span v-if="errors.first_name" class="text-red-600">
									⛔️{{ errors.first_name }}
								</span>
							</div>
						</div>
						<div class="mb-6 md:flex md:items-center">
							<div class="md:w-1/3">
								<label
									class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
									for="last_Name">
									Apellido Materno
								</label>
							</div>
							<div class="md:w-2/3">
								<input
									id="last_Name"
									v-bind="last_name"
									name="lastName"
									class="w-full appearance-none rounded border-light-accent200 bg-light-bg200 p-2 text-light-bg100 focus:border-light-accent100 focus:bg-light-bg300 focus:text-light-bg100 focus:outline-none dark:border-dark-accent100 dark:bg-dark-bg100 dark:focus:bg-dark-bg200"
									type="text"
									autocomplete="off" />
								<span v-if="errors.last_name" class="text-red-600">
									⛔️{{ errors.last_name }}
								</span>
							</div>
						</div>
					</div>
					<div v-else>
						<div class="my-auto flex items-center justify-between">
							<span
								class="mb-4 text-xl text-light-accent200 dark:text-dark-primary100">
								¿ Esta seguro que desea eliminar ?
							</span>
						</div>
					</div>
					<!-- button -->
					<div class="flex items-center justify-between">
						<button
							class="rounded border border-light-accent200 px-4 py-2 text-light-accent200 hover:border-light-accent100 hover:text-light-accent100 dark:border-dark-accent100 dark:bg-dark-bg100 dark:text-dark-primary100 dark:hover:bg-dark-bg200">
							Aceptar
						</button>
						<button
							type="button"
							class="text-light-accent200 dark:text-dark-accent200"
							@click="close">
							Cancelar
						</button>
						<input type="hidden" v-bind="id" />
					</div>
				</form>
			</div>
		</div>
	</transition>
</template>
