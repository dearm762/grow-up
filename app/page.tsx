import { FC } from 'react'
import type { Metadata } from 'next'
import { ArrowUpRightFromSquare } from 'lucide-react'
import Link from 'next/link'

import Header from '@/components/header'

import containerStyle from '@/styles/container.module.css'
import styles from '@/styles/home.module.css'

export const metadata: Metadata = {
	title: 'KeepInTouch | Welcome!',
}

const Home: FC = () => {
	return (
		<>
			<Header />
			<main className={containerStyle.mycontainer}>
				<h2 className={ styles.heading }>New Era of Communicating</h2>
				<p className={ styles.p }>
					KeepInTouch is a messaging app with a focus on speed and security,
					it’s super-fast, simple and free. You can use KeepInTouch on all
					your devices at the same time — your messages sync seamlessly
					across any number of your phones, tablets or computers.
				</p>

				<div className={ styles.mobile }>
					<Link href={'/mobile/android'}>
						<span>KeepInTouch for Android</span>
						<ArrowUpRightFromSquare width={17} height={17} />
					</Link>
					<Link href={'/mobile/ios'}>
						<span>KeepInTouch for IPhone / Ipad</span>
						<ArrowUpRightFromSquare width={17} height={17} />
					</Link>
				</div>
			</main>
		</>
	)
}

export default Home
