'use client'

import FormHeading from '@/app/_system/components/FormHeading'
import { Input } from '@nextui-org/react'
import { FC, useState } from 'react'
import { EyeFilledIcon } from '@/app/_system/EyeFilledIcon'
import { EyeSlashFilledIcon } from '@/app/_system/EyeSlashFilledIcon'

const SignIn: FC = () => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => setIsVisible(!isVisible)

	return (
		<>
			<FormHeading>Sign In</FormHeading>
			<Input
				label='Email'
				variant='underlined'
				color='primary'
				size='sm'
				isRequired
				radius='none'
				isClearable
				onClear={() => console.log('input cleared')}
			/>
			<Input
				label='Password'
				variant='underlined'
				color='primary'
				size='sm'
				isRequired
				radius='none'
				endContent={
					<button
						className='focus:outline-none'
						type='button'
						onClick={toggleVisibility}
					>
						{isVisible ? (
							<EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
						) : (
							<EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
						)}
					</button>
				}
				type={isVisible ? 'text' : 'password'}
			/>
			<button>Sign In</button>
		</>
	)
}

export default SignIn