import { FC } from 'react'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Header from '@/components/header'
import Introduction from '@/components/introduction'

import containerStyle from '@/styles/container.module.css'
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
			<div
				className={
					containerStyle.mycontainer + ' px-9 bg-cyan-100 my-16 rounded-3xl'
				}
			>
				<div className={styles.courses}>
					<h2 className={styles.heading}>Измени жизнь этой весной</h2>
					<div className={styles.categories}>
						<h2>Категорий:</h2>
						<button>Все</button>
						<button>алфавиту</button>
						<button>Новое</button>
						<button>Популярные</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
