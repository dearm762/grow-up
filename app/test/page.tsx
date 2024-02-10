'use client'

import { FC } from 'react'

interface ITest {
	searchParams: {
		message: string
		b?: string
	}
}

const Test: FC<ITest> = ({ searchParams }) => {
	return (
		<>
			<h2>{searchParams.message + ' ' + searchParams.b}</h2>
		</>
	)
}

export default Test
