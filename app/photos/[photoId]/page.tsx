import { FC } from 'react'
import photoData from '@/app/_src/photoData'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import styles from './photo.module.css'

type PhotoPropsType = {
	params: {
		photoId: string
	}
}

const PhotoPage: FC<PhotoPropsType> = ({ params }) => {
	const photo = photoData.find(item => item.id === params.photoId)

	if (!photo) notFound()

	return (
		<>
			<div className={ styles.photoContainer }>
				<h1>Photo Id: { photo?.id }</h1>
				<Image src={ photo?.src } width={600} height={600} alt='alt of photo' />
			</div>
		</>
	)
}

export default PhotoPage