'use server'

import { cookies } from 'next/headers'

const createUser = async (_prevState: any, formData: FormData) => {
	const cookieStore = cookies()

	if (formData.get('email') === 'misterfighter1990@gmail.com') {
		cookieStore.set('name', 'Abdurrauf')
	}

	return {
		message: 'Please enter a valid email',
	}
}

export default createUser
