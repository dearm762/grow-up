import { FC } from 'react'

import styles from '@/styles/heading.module.css'

type HeadingPropsType = {
  children: string
}

const Heading: FC<HeadingPropsType> = ({ children }) => {
  return (
        <h2 className={ styles.heading }>
			{ children }
		</h2>
  )
}

export default Heading
