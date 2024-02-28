import Link from 'next/link'
import { FC } from 'react'
import { ScanEye } from 'lucide-react'

import styles from '@/styles/header.module.css'

interface IHeader {
	isAuthorized?: string | undefined
}

const Header: FC<IHeader> = ({ isAuthorized }) => {
	return (
		<header className={styles.header}>
			<Link href={ isAuthorized ? '/home' : '/'}>
				<ScanEye width={45} height={45} />
				<h1>GrowUp</h1>
			</Link>
			<nav>
				<Link href={'/blog'}>Blog</Link>
				{
					isAuthorized
					? <Link href={'/users'}>Profile</Link>
					: <Link href={'/auth/sign-in'}>Sign In</Link>
				}
			</nav>
		</header>
	)
}

export default Header
