import { FC } from 'react'

const SignIn: FC = () => {
	return (
		<>
			<h1>Sign In</h1>
			<input name='email' />
			<input name='passord' />
			<button>Sign In</button>
		</>
	)
}

export default SignIn