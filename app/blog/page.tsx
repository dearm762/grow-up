import { FC } from 'react'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import Header from '@/components/header'
import Heading from '@/components/heading'

import containerStyle from '@/styles/container.module.css'

export const metadata: Metadata = {
	title: 'KeepInTouch | Blog',
}

const BlogPage: FC = () => {
	const cookieStore = cookies()
  	const ssid = cookieStore.get('ssid')

	return (
		<>
			<div className={containerStyle.mycontainer}>
				<Header isAuthorized={ ssid?.value } />
				<Heading>
					KeepInTouch | Blog:
				</Heading>
			</div>
		</>
	)
}

export default BlogPage
