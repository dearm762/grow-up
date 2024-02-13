'use client'

import { FC } from 'react'
import Image from 'next/image'

const Test: FC = () => {
	return (
		<>
			<Image src={'/me.jpg'} alt='alt of photo' width={100} height={100} />
		</>
	)
}

export default Test
