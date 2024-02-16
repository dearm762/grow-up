import { FC } from 'react'
import Header from '@/components/header'
import containerStyle from '@/styles/container.module.css'

const Home: FC = () => {
	return (
		<>
			<Header />
			<main className={containerStyle.mycontainer}>
				1223
			</main>
		</>
	)
}

export default Home
