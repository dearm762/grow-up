import FormHeading from '@/app/_system/components/FormHeading'
import { FC } from 'react'

const SignIn: FC = () => {
	return (
		<>
				<FormHeading>Sign In</FormHeading>
				<input name='email' placeholder='Email:' />
				<input name='password' placeholder='Password:' />
				<button>Sign In</button>
		</>
	)
}

export default SignIn