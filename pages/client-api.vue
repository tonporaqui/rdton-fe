<template>
	<div class="min-h-screen bg-light-bg200 py-8 dark:bg-dark-bg100">
		<div
			v-if="data.length === 0"
			class="py-4 text-center text-light-text100 dark:text-dark-text100">
			Cargando...
		</div>
		<div v-else class="container mx-auto flex justify-center gap-8">
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
						class="text-center text-light-text200 dark:bg-dark-bg300 dark:text-dark-primary100">
						<tr
							v-for="user in data"
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
							<td class="cursor-pointer border p-2" @click="editUser(user.id)">
								<Icon
									name="material-symbols:edit-outline"
									size="27px"
									class="h-6 w-6 font-semibold text-light-accent200 hover:text-light-primary100 dark:text-light-accent100 dark:hover:text-dark-primary200">
								</Icon>
							</td>
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
	</div>
</template>

<script setup lang="ts">
interface User {
	id: string
	name: string
	first_name: string
	last_name: string
	status: string
	date_create: string
}
const data = ref<User[]>([])

onMounted(async () => {
	await $fetch('https://rdton-be.vercel.app/')
		.then((res) => {
			data.value = res as User[]
		})
		.catch((error) => console.error('Error fetching data:', error))
})

const editUser = (id: string) => {
	console.log('Edit user with ID:', id)
	// Aquí puedes agregar la lógica para editar el usuario
}

const deleteUser = (id: string) => {
	console.log('Delete user with ID:', id)
	// Aquí puedes agregar la lógica para borrar el usuario
}
</script>

<style>
/* Aquí puedes agregar estilos adicionales si es necesario */
</style>
