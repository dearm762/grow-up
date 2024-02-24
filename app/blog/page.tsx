import { FC } from 'react'
import type { Metadata } from 'next'

import Header from '@/components/header'
import Heading from '@/components/heading'

import containerStyle from '@/styles/container.module.css'

export const metadata: Metadata = {
	title: 'KeepInTouch | Blog',
}

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
