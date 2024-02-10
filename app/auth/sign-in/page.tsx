'use client'

import FormHeading from '@/components/FormHeading'
import { Button, Input } from '@nextui-org/react'
import { ChangeEvent, FC, useState } from 'react'
import { EyeFilledIcon } from '@/components/EyeFilledIcon'
import { EyeSlashFilledIcon } from '@/components/EyeSlashFilledIcon'
import SignInValues from '@/types/sign-in-type'

const SignIn: FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [data, setData] = useState<SignInValues>({
		email: '',
		password: '',
	})

	const toggleVisibility = () => setIsVisible(!isVisible)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		console.log(data)
		setIsLoading(true)
	}

	return (
		<>
			<title>Sign In | PrivateWorld</title>
			<form onSubmit={handleSubmit}>
				<FormHeading>Sign In</FormHeading>
				<Input
					label='Email'
					variant='underlined'
					color='primary'
					size='sm'
					isRequired
					radius='none'
					isClearable
					onClear={() => setData(prev => ({ ...prev, email: '' }))}
					value={data.email}
					name='email'
					onChange={handleChange}
					type='email'
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
				<Button
					color='primary'
					variant='bordered'
					radius='sm'
					size='md'
					isLoading={isLoading}
					type='submit'
				>
					Sign In
				</Button>
			</form>
		</>
	)
}

export default SignIn
