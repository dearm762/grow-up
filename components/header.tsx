import Link from 'next/link'
import { FC } from 'react'
import { ScanEye } from 'lucide-react'

import styles from '@/styles/header.module.css'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div>
				<ScanEye width={45} height={45} />
				<h1>KeepInTouch</h1>
			</div>
			<nav>
				<Link href={'/'}>Home</Link>
				<Link href={'/blog'}>Blog</Link>
				<Link href={'/auth/sign-in'}>Sign In</Link>
			</nav>
		</header>
	)
}

export default Header
