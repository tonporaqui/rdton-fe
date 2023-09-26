export interface User {
	id: string
	name: string
	first_name: string
	last_name: string
	status: string
	date_create: string
}

export interface UserRequest {
	name?: string
	first_name?: string
	last_name?: string
	status?: string
	date_create?: string
}

interface DeleteResponse {
	status: number
	message: string
}
