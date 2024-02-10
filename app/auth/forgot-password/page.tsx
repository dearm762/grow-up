'use client'

import FormHeading from '@/components/FormHeading'
import ForgotFormType from '@/types/forgotForm'
import { Button, Input } from '@nextui-org/react'
import { ChangeEvent, FC, useState } from 'react'

const ForgotPassword: FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [data, setData] = useState<ForgotFormType>({
		email: '',
	})

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
			<title>Forgot Password | PrivateWorld</title>
			<form onSubmit={handleSubmit}>
				<FormHeading>Forgot Password</FormHeading>
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
					description={'We wont share your email with anyone'}
				/>
				<Button
					color='primary'
					variant='bordered'
					radius='sm'
					size='md'
					isLoading={isLoading}
					type='submit'
				>
					Send code
				</Button>
			</form>
		</>
	)
}

export default ForgotPassword
