import { apiRequest, apiRequestDelete } from '~/server/utils/request'
import { DeleteResponse, User, UserRequest } from '~/types/User'

export async function fetchUsers(apiEndpoint: string): Promise<User[]> {
	const response = await apiRequest(apiEndpoint)
	return response
}

export async function createUser(
	userData: UserRequest,
	apiEndpoint: string,
): Promise<User[]> {
	const response = await apiRequest(apiEndpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(userData),
	})
	return response
}

export async function updateUser(
	id: string,
	userData: UserRequest,
	apiEndpoint: string,
): Promise<User[]> {
	const url = `${apiEndpoint}/${id}`
	const response = await apiRequest(url, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(userData),
	})
	return response
}

export async function deleteUser(
	id: string,
	apiEndpoint: string,
): Promise<DeleteResponse> {
	const url = `${apiEndpoint}/${id}`
	const response = await apiRequestDelete<DeleteResponse>(url, {
		method: 'DELETE',
	})
	return response
}
