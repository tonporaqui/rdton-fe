<script setup lang="ts">
import ModalCrudUser from '@/components/ModalCrudUser.vue'
import { User } from '@/types/User'

const data = ref<User[]>([])
const loading = ref(true)
const searchText = ref('')
const isModalOpen = ref(false)
const modalActionType = ref('')
const modalUserData = ref<User | null>(null)

const filteredData = computed(() => {
	return data.value.filter((user: { name: string }) =>
		user.name.toLowerCase().includes(searchText.value.toLowerCase()),
	)
})

onMounted(async () => {
	getAllData()
})
// const urlLocalHost = 'http://localhost:3001/users'
const urlNubeHost = 'https://rdton-be.vercel.app/users'
const getAllData = async () => {
	await $fetch(urlNubeHost)
		.then((res) => {
			data.value = res as User[]
		})
		.catch((error) => console.error('Error fetching data:', error))
		.finally(() => {
			loading.value = false
		})
}

const closeModal = () => {
	isModalOpen.value = false
}

const openModal = (actionType: string, userData: User | null = null) => {
	modalActionType.value = actionType
	modalUserData.value = userData
	isModalOpen.value = true
}

const confirmModalAction = async (userData: User) => {
	// Preparar el objeto de datos para enviar en la solicitud
	if (modalActionType.value === 'create') {
		const postData = {
			name: userData.name,
			first_name: userData.first_name || '', // Si firstName no está disponible, enviar una cadena vacía
			last_name: userData.last_name || '', // Si lastName no está disponible, enviar una cadena vacía
			status: 'CREATE',
			date_create: new Date().toISOString().slice(0, 19).replace('T', ' '), // Formatear la fecha y hora actual al formato requerido
		}

		fetch(urlNubeHost, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				cors: 'no-cors',
			},
			body: JSON.stringify(postData),
		})
			.then(async (response: Response) => {
				if (response.ok) {
					const responseData = await response.json()
					console.log('User created successfully:', responseData)
					data.value.push(responseData)
				} else {
					console.error('Error creating user:', response.statusText)
				}
			})
			.catch((error) => {
				console.error('Error creating user:', error)
			})
			.finally(() => {
				closeModal()
			})
	} else {
		const pathData = {
			name: userData.name,
			first_name: userData.first_name || '', // Si firstName no está disponible, enviar una cadena vacía
			last_name: userData.last_name || '', // Si lastName no está disponible, enviar una cadena vacía
			status: 'UPDATE',
			date_create: new Date().toISOString().slice(0, 19).replace('T', ' '), // Formatear la fecha y hora actual al formato requerido
		}
		// const urlConIdLocal = urlLocalHost + '/' + userData.id
		const urlConIdNube = urlNubeHost + '/' + userData.id
		fetch(urlConIdNube, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				cors: 'no-cors',
			},
			body: JSON.stringify(pathData),
		})
			.then(async (response: Response) => {
				if (response.ok) {
					const responseData = await response.json()
					console.log('User created successfully:', responseData)
					data.value.push(responseData)
					getAllData()
				} else {
					console.error('Error creating user:', response.statusText)
				}
			})
			.catch((error) => {
				console.error('Error creating user:', error)
			})
			.finally(() => {
				closeModal()
			})
	}
}

const createUser = () => {
	openModal('create')
}

const editUser = (id: string) => {
	const user = data.value.find((user: { id: string }) => user.id === id)
	openModal('edit', user)
}

const deleteUser = (id: string) => {
	const user = data.value.find((user: { id: string }) => user.id === id)
	openModal('delete', user)
}
</script>
<template>
	<section class="min-h-screen bg-light-bg200 py-8 dark:bg-dark-bg100">
		<div class="container mx-auto flex justify-center gap-8">
			<div
				v-if="loading"
				class="py-4 text-center text-light-text100 dark:text-dark-text100">
				Cargando...
			</div>
			<div v-else class="flex flex-col justify-center gap-8">
				<div class="flex items-center justify-between">
					<!-- Icono de búsqueda e Input -->
					<div
						class="relative flex items-center rounded border border-light-accent200 dark:border-dark-accent100">
						<Icon
							name="mdi:magnify"
							size="27px"
							class="ml-2 h-6 w-6 font-semibold text-light-accent200 hover:text-light-accent100 dark:text-dark-primary100 dark:hover:text-dark-text200" />
						<input
							id="buscar-client-api"
							v-model="searchText"
							placeholder="Buscar..."
							class="ml-2 w-full appearance-none rounded border-0 bg-light-bg200 p-2 text-light-bg100 focus:border-light-accent100 focus:bg-light-bg300 focus:text-light-bg100 focus:outline-none dark:bg-dark-bg100 dark:focus:bg-dark-bg200" />
					</div>
					<!-- boton crear -->
					<button
						class="rounded border border-light-accent200 px-4 py-2 text-light-accent200 hover:border-light-accent100 hover:text-light-accent100 dark:border-dark-accent100 dark:bg-dark-bg100 dark:text-dark-primary100 dark:hover:bg-dark-bg200"
						@click="createUser">
						Crear
					</button>
				</div>
				<div class="w-full overflow-x-auto">
					<table
						class="min-w-full table-auto border-collapse border border-light-accent200 dark:border-dark-accent200">
						<thead
							class="bg-light-accent200 text-light-bg100 dark:bg-dark-bg200 dark:text-dark-primary100">
							<tr>
								<th class="border p-2">Nombre</th>
								<th class="border p-2">Apellido Paterno</th>
								<th class="border p-2">Apellido Materno</th>
								<th class="border p-2">Estado</th>
								<th class="border p-2">Fecha de Creacion</th>
								<th class="border p-2">Editar</th>
								<th class="border p-2">Borrar</th>
							</tr>
						</thead>
						<tbody
							class="text-center text-light-text200 dark:bg-dark-bg300 dark:text-dark-text100">
							<tr
								v-for="user in filteredData"
								:key="user.id"
								class="hover:bg-light-accent100 dark:hover:bg-dark-bg200">
								<td class="border p-2">
									{{ user.name }}
								</td>
								<td class="border p-2">
									{{ user.first_name }}
								</td>
								<td class="border p-2">
									{{ user.last_name }}
								</td>
								<td class="border p-2">
									{{ user.status }}
								</td>
								<td class="border p-2">
									{{ new Date(user.date_create).toLocaleDateString() }}
								</td>
								<!-- editar usuario -->
								<td
									class="cursor-pointer border p-2"
									@click="editUser(user.id)">
									<Icon
										name="material-symbols:edit-outline"
										size="27px"
										class="h-6 w-6 font-semibold text-light-accent200 hover:text-light-primary100 dark:text-dark-text200 dark:hover:text-dark-primary200">
									</Icon>
								</td>
								<!-- borrar usuario -->
								<td
									class="cursor-pointer border p-2"
									@click="deleteUser(user.id)">
									<Icon
										name="material-symbols:delete-outline"
										size="27px"
										class="h-6 w-6 font-semibold text-red-500 hover:text-light-primary100 dark:text-red-500 dark:hover:text-dark-primary200">
									</Icon>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!-- Modal Component -->
			<ModalCrudUser
				:is-open="isModalOpen"
				:action-type="modalActionType"
				:user-data="modalUserData"
				@close="closeModal"
				@confirm="confirmModalAction" />
		</div>
	</section>
</template>
