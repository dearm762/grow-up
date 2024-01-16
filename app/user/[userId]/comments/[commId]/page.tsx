import { notFound } from 'next/navigation'
import { FC, useEffect } from 'react'

type CommentDetailedProps = {
	params: {
		userId: string,
		commId: string
	}
}

const CommentDetailed: FC<CommentDetailedProps> = ({ params }) => {

	return (
		<>
			<h1>User { params.userId }</h1>
			<h1>Comment { params.commId }</h1>
		</>
	)
}

export default CommentDetailed