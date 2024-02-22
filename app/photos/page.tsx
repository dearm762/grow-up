import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import photoData from '@/data/photoData'
import styles from '@/styles/photos.module.css'

const Photos: FC = () => {
	return (
		<>
			<div className={styles.container}>
				{photoData.map(photo => (
					<Link key={photo.id} href={`/photos/${photo.id}`}>
						<Image
							src={photo.src}
							width={300}
							height={300}
							alt='alt of photo'
						/>
					</Link>
				))}
			</div>
		</>
	)
}

export default Photos