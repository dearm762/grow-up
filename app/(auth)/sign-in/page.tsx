import FormHeading from '@/app/_system/components/FormHeading'
import { FC } from 'react'

import styles from '../form.module.css'

const SignIn: FC = () => {
	return (
		<>
			<form action="" className={ styles.Form }>
				<FormHeading>Sign In</FormHeading>
				<input name='email' />
				<input name='passord' />
				<button>Sign In</button>
			</form>
		</>
	)
}

export default SignIn