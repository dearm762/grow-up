import { FC } from 'react'

import Header from '@/components/header'
import Heading from '@/components/heading'

import containerStyle from '@/styles/container.module.css'

const BlogPage: FC = () => {
	return (
		<>
			<div className={containerStyle.mycontainer}>
				<Header />
				<Heading>
					KeepInTouch | Blog:
				</Heading>
			</div>
		</>
	)
}

export default BlogPage
