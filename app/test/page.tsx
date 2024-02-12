'use client'

import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Test: FC = () => {
	const router = useRouter()
	
	return (
		<>
			<button onClick={() => router.push('/about')}>Click</button>
			<Link href='/'>sss</Link>
		</>
	)
}

export default Test
