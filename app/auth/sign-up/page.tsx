'use client'

import { EyeFilledIcon } from '@/app/_system/EyeFilledIcon'
import { EyeSlashFilledIcon } from '@/app/_system/EyeSlashFilledIcon'
import FormHeading from '@/app/_system/components/FormHeading'
import SignUpValues from '@/app/_system/sign-up-type'
import { Button, Input } from '@nextui-org/react'
import { ChangeEvent, FC, useState } from 'react'

const SignUp: FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [data, setData] = useState<SignUpValues>({
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
					Sign Up
				</Button>
			</form>
		</>
	)
}

export default SignUp
