import {
	createUser,
	deleteUser,
	fetchUsers,
	updateUser,
} from '@/server/api/users'
import { User } from '~/types/User'

export function useUsers() {
	const data = ref<User[]>([])
	const loading = ref(true)

	async function loadUsers(apiEndpoint: string) {
		try {
			loading.value = true
			data.value = await fetchUsers(apiEndpoint)
		} catch (error) {
			console.error('Error fetching users:', error)
		} finally {
			loading.value = false
		}
	}

	return {
		data,
		loading,
		loadUsers,
		createUser,
		updateUser,
		deleteUser,
	}
}
