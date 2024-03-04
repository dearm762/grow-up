import { FC } from 'react'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Header from '@/components/header'
import Introduction from '@/components/introduction'
import Courses from '@/components/courses'

import styles from '@/styles/home.module.css'

export const metadata: Metadata = {
	title: 'GrowUp | платформа для саморазвитий!',
}

const Home: FC = () => {
	const cookieStore = cookies()
	const ssid = cookieStore.get('ssid')
	if (ssid) redirect('/dashboard')

	return (
		<>
			<Header isAuthorized={ssid} />
			<Introduction />
			<Courses />
		</>
	)
}

export default Home
