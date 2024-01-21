import { FC } from 'react'
import Link from 'next/link'

import photoData from './photoData'

import styles from './styles.module.css'

const Photos: FC = () => {
	return (
		<>
			<div className={ styles.container }>
				{
					photoData.map(photo => (
						<Link key={ photo.id } href={ `/photos/${photo.id}` }>
							<img src={ photo.src } width={300} />
						</Link>
					))
				}
			</div>
		</>
	)
}

export default Photos