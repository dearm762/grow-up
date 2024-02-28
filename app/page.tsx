import { FC } from 'react'
import type { Metadata } from 'next'
import { ArrowUpRightFromSquare } from 'lucide-react'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Header from '@/components/header'

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
			<Header isAuthorized={ ssid } />
			<main className={ containerStyle.mycontainer }>
				<h2 className={ styles.heading }>GrowUp | платформа для саморазвитий!</h2>
				<p className={ styles.p }>
				Пространство, чтобы помочь вам раскрыть свой потенциал,
				достичь новых высот и стать лучшей версией себя.
				Независимо от того, какие цели вы ставите перед собой
				— обучение, карьерный рост, личное развитие или преодоление вызовов
				— здесь вы найдете ресурсы, инструменты и сообщество,
				готовое поддержать вас на каждом шаге вашего пути к успеху.
				Давайте расти вместе!
				</p>
				<div className={ styles.mobile }>
					<Link href={'/mobile/android'}>
						<span>GrowUp для Android</span>
						<ArrowUpRightFromSquare width={17} height={17} />
					</Link>
					<Link href={'/mobile/ios'}>
						<span>GrowUp для IPhone / Ipad</span>
						<ArrowUpRightFromSquare width={17} height={17} />
					</Link>
				</div>
			</main>
		</>
	)
}

export default Home
