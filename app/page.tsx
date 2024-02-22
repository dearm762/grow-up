import { FC } from 'react'
import Header from '@/components/header'
import containerStyle from '@/styles/container.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'KeepInTouch | Welcome!',
	description: 'First social media by Kazakhstan'
}

const Home: FC = () => {
	return (
		<>
			<Header />
			<main className={containerStyle.mycontainer}>
				
			</main>
		</>
	)
}

export default Home
