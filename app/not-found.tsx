import { FC } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

import styles from '@/styles/error404.module.css'

export const metadata: Metadata = {
	title: 'KeepInTouch | Page not found'
}

const Error404: FC = () => {
	return (
		<div className={styles.flexContainer}>
		  <div className={styles.textCenter}>
			<h1>
			  <span className={styles.fadeIn} id="digit1">4</span>
			  <span className={styles.fadeIn} id="digit2">0</span>
			  <span className={styles.fadeIn} id="digit3">4</span>
			</h1>
			<h3>PAGE NOT FOUND</h3>
			<Link type="button" href={'/'}>Return To Home</Link>
		  </div>
		</div>
	)
}

export default Error404