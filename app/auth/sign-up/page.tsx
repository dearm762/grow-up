'use client'

import { Button, Input } from '@nextui-org/react'
import { ChangeEvent, FC, useState } from 'react'
import { EyeFilledIcon } from '@/components/EyeFilledIcon'
import { EyeSlashFilledIcon } from '@/components/EyeSlashFilledIcon'
import FormHeading from '@/components/FormHeading'
import SignUpFormType from '@/types/signUpForm'

const SignUp: FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [data, setData] = useState<SignUpFormType>({
		surname: '',
		name: '',
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
			<title>Sign Up | PrivateWorld</title>
			<form onSubmit={handleSubmit}>
				<FormHeading>Sign Up</FormHeading>
				<Input
					label='Surname'
					variant='underlined'
					color='primary'
					size='sm'
					isRequired
					radius='none'
					isClearable
					onClear={() => setData(prev => ({ ...prev, surname: '' }))}
					value={data.surname}
					name='surname'
					onChange={handleChange}
					type='text'
				/>
				<Input
					label='Name'
					variant='underlined'
					color='primary'
					size='sm'
					isRequired
					radius='none'
					isClearable
					onClear={() => setData(prev => ({ ...prev, name: '' }))}
					value={data.name}
					name='name'
					onChange={handleChange}
					type='text'
				/>
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
					description="We'll never share your email with anyone else."
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
					description='Password must contain Alphabets, numbers and at least one char.'
				/>
				<Button
					color='primary'
					variant='bordered'
					radius='sm'
					size='md'
					isLoading={isLoading}
					type='submit'
				>
					Sign Up
				</Button>
			</form>
		</>
	)
}

export default SignUp
