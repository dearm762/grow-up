import type { Metadata } from 'next'
import { FC } from 'react'

type UserProps = {
	params: {
		userId: string
	}
}

export const generateMetadata = ({ params }: UserProps ): Metadata => {
	return {
		title: `User ${ params.userId }`
	}
}

const UserPage: FC<UserProps> = ({ params }) => {
	return (
		<>
			<h1>User { params.userId }</h1>
		</>
	)
}

export default UserPage