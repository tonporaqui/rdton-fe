<template>
	<div class="min-h-screen py-8">
		<div v-if="data.length === 0" class="py-4 text-center">Cargando...</div>
		<div v-else class="container mx-auto flex justify-center gap-8">
			<div class="w-full overflow-x-auto">
				<table class="min-w-full table-auto border-collapse border">
					<thead>
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
					<tbody>
						<tr v-for="user in data" :key="user.id">
							<td class="border p-2">{{ user.name }}</td>
							<td class="border p-2">{{ user.first_name }}</td>
							<td class="border p-2">{{ user.last_name }}</td>
							<td class="border p-2">{{ user.status }}</td>
							<td class="border p-2">
								{{ new Date(user.date_create).toLocaleDateString() }}
							</td>
							<td
								class="cursor-pointer border p-2 text-blue-500"
								@click="editUser(user.id)">
								editar
							</td>
							<td
								class="cursor-pointer border p-2 text-red-500"
								@click="deleteUser(user.id)">
								borrar
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
	await $fetch('http://localhost:3001/users')
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
