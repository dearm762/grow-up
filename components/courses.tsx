'use client'

import { FC, useState } from 'react'

import containerStyle from '@/styles/container.module.css'
import styles from '@/styles/courses.module.css'

type category = 'all' | 'alphabet' | 'new' | 'popular'

const Courses: FC = () => {
	const [category, setCategory] = useState<category>()

	return (
		<>
			<div
				className={
					containerStyle.mycontainer + ' px-9 bg-cyan-100 my-16 rounded-3xl'
				}
			>
				<div className={styles.courses}>
					<h2 className={styles.heading}>Измени жизнь этой весной</h2>
					<div className={styles.categories}>
						<h2>Категорий:</h2>
						<button>Все курсы</button>
						<button>алфавиту</button>
						<button>Новое</button>
						<button>Популярные</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Courses
