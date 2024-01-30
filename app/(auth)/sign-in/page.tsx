import FormHeading from '@/app/_system/components/FormHeading'
import { FC } from 'react'

import styles from '../form.module.css'

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