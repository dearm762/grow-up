'use client'

import { useRef } from 'react'

const Test = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	const focus = () => {
		console.log(inputRef.current?.value)
	}

	return (
		<>
			<input className='text-white h-10 w-96 bg-black' ref={inputRef} />
			<button onClick={() => focus()}>console.log</button>
		</>
	)
}

export default Test
