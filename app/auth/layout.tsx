'use client'

import { NextUIProvider } from '@nextui-org/react'
import styles from './form.module.css'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<NextUIProvider className={styles.NextUIProvider}>
				{children}
			</NextUIProvider>
		</>
	)
}
