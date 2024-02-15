'use server'

import { cookies } from 'next/headers'

async function setCookie() {
	cookies().set({
		name: 'name',
		value: 'lee',
		httpOnly: true,
		path: '/test',
	})
}

export default setCookie
