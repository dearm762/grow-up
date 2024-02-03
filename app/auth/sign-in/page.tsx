import FormHeading from '@/app/_system/components/FormHeading'
import { Input } from '@nextui-org/react'
import { FC } from 'react'

const SignIn: FC = () => {
	return (
		<>
			<FormHeading>Sign In</FormHeading>
			<Input label='Email' />
			<Input label='Password' />
			<button>Sign In</button>
		</>
	)
}

export default SignIn