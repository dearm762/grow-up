import { FC } from 'react'

interface FormHeadingProps {
	children: string
}

const FormHeading: FC<FormHeadingProps> = ({ children }) => {
	return (
		<h1>{ children }</h1>
	)
}

export default FormHeading