'use client'

import { FC, useEffect } from 'react'
import Image from 'next/image'

const Test: FC = () => {
	useEffect(() => console.log(123))

	return (
		<>
			<Image src={'/me.jpg'} alt='alt of photo' width={100} height={100} />
		</>
	)
}

export default Test
