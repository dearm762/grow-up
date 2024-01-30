import { FC } from 'react'

interface FormHeadingProps {
	children: string
}

const FormHeading: FC<FormHeadingProps> = ({ children }) => {
	return (
		<h1 style={{ fontWeight: 'bold', fontSize: '21px' }}>{ children }:</h1>
	)
}

export default FormHeading