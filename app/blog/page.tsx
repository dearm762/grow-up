import { FC } from 'react'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import Header from '@/components/header'
import Heading from '@/components/heading'

import containerStyle from '@/styles/container.module.css'

export const metadata: Metadata = {
	title: 'GrowUp | Blog',
}

const BlogPage: FC = () => {
	const cookieStore = cookies()
  	const ssid = cookieStore.get('ssid')

	return (
		<>
			<div className={containerStyle.mycontainer + ' mt-20 px-9'}>
				<Header isAuthorized={ ssid?.value } />
				<main>
					<Heading>
						GrowUp | Блог:
					</Heading>
				</main>
			</div>
		</>
	)
}

export default BlogPage
