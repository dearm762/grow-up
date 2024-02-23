import { FC } from 'react'

import HeadingPropsType from '@/types/headingProps'

import styles from '@/styles/heading.module.css'

const Heading: FC<HeadingPropsType> = ({ children }) => {
  return (
        <h2 className={ styles.heading }>
			{ children }
		</h2>
  )
}

export default Heading