import FormHeading from '@/app/_system/components/FormHeading'
import { FC } from 'react'

const ForgotPassword: FC = () => {
	return (
		<>
			<FormHeading>Forgot Password</FormHeading>
				<input name='email' placeholder='Email:' />
				<button>Send code</button>
		</>
	)
}

export default ForgotPassword