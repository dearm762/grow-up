import { FC } from 'react'

interface ITest {
	searchParams: {
		a: string
		b: string
	}
}

const Test: FC<ITest> = ({ searchParams }) => {
	return (
		<>
			<h2>{searchParams.a}</h2>
		</>
	)
}

export default Test
