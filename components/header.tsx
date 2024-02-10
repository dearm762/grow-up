import Link from 'next/link'
import { FC } from 'react'
import { ScanEye } from 'lucide-react'
import styles from './home.module.css'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div>
				<ScanEye width={45} height={45} />
				<span>PrivateWorld</span>
			</div>
			<nav>
				<Link href={'/'}>Home</Link>
				<Link href={'/blog'}>Blog</Link>
				<Link href={'/Sign-in'}>Sign In</Link>
			</nav>
		</header>
	)
}

export default Header