import { ArrowUpRightFromSquare } from 'lucide-react'
import Link from 'next/link'

import containerStyle from '@/styles/container.module.css'
import styles from '@/styles/introduction.module.css'

function Introduction() {
  return (
	<>
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

export default Introduction