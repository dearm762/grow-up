import { FC } from 'react'

type UserDetailedProps = {
	params: {
		userId: string
	}
}

const UserDetailed: FC<UserDetailedProps> = ({ params }) => {
  return (
      <>
           <h1>User { params.userId } page</h1>
      </>
  )
}

export default UserDetailed