import FormHeading from '@/app/_system/components/FormHeading'
import { FC } from 'react'

const SignUp: FC = () => {
	return (
		<>
				<FormHeading>Sign Up</FormHeading>
				<input name='surname' placeholder='Surname:' />
				<input name='name' placeholder='Name:' />
				<input name='email' placeholder='Email:' />
				<input name='password' placeholder='Password:' />
				<button>Sign Up</button>
		</>
	)
}

export default SignUp