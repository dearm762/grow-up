'use client'

import { FC } from 'react'
import setCookie from '@/actions/action'

const Test: FC = () => {
	return (
		<>
			<button onClick={() => setCookie()}>click</button>
		</>
	)
}

export default Test
