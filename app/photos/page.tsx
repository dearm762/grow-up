import { FC } from 'react'
import Link from 'next/link'
import photoData from '../_src/photoData'
import Image from 'next/image'
import styles from './styles.module.css'

const Photos: FC = () => {
	return (
		<>
			<div className={ styles.container }>
				{
					photoData.map(photo => (
						<Link key={ photo.id } href={ `/photos/${photo.id}` }>
							<Image src={ photo.src } width={300} height={300} alt='alt of photo' />
						</Link>
					))
				}
			</div>
		</>
	)
}

export default Photos