'use client'

import FormHeading from '@/app/_system/components/FormHeading'
import { Input } from '@nextui-org/react'
import { ChangeEvent, FC, useState } from 'react'
import { EyeFilledIcon } from '@/app/_system/EyeFilledIcon'
import { EyeSlashFilledIcon } from '@/app/_system/EyeSlashFilledIcon'
import SignInValues from '@/app/_system/sign-in-type'

const SignIn: FC = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [data, setData] = useState<SignInValues>({
		email: '',
		password: '',
	})

	const toggleVisibility = () => setIsVisible(!isVisible)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

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
				onClear={ () => setData((prev) => ({ ...prev, email: '' })) }
				value={data.email}
				name='email'
				onChange={handleChange}
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
				value={data.password}
				name='password'
				onChange={handleChange}
			/>
			<button>Sign In</button>
		</>
	)
}

export default SignIn
