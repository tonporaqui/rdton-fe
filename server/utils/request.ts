import { User } from '~/types/User'
type ApiResponse = User[]
export async function apiRequest(
	url: string,
	options?: RequestInit,
): Promise<ApiResponse> {
	const response = await fetch(url, options)
	if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`)
	const jsonResponse = await response.json()
	return jsonResponse as ApiResponse
}

export async function apiRequestDelete<T>(
	url: string,
	options?: RequestInit,
): Promise<T> {
	const response = await fetch(url, options)
	if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`)
	const jsonResponse = await response.json()
	return jsonResponse as T
}
