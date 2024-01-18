import { FC } from 'react'
import { Metadata } from 'next'

export const generateMetadata = ({ params }: UserProps): Metadata => {
  return {
    title: `User ${params.userId}`,
  }
}

type UserProps = {
	params: {
		userId: string
	}
}

const User: FC<UserProps> = ({ params }) => {
	return (
		<>
			<h1>User Id: { params.userId }</h1>
		</>
	)
}

export default User