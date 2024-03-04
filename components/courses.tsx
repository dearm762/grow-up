'use client'

import { FC, useState, useCallback } from 'react'

import CourseCard from './courseCard'

import containerStyle from '@/styles/container.module.css'
import styles from '@/styles/courses.module.css'

type Category = 'all' | 'alphabet' | 'new' | 'popular'

const Courses: FC = () => {
	const [category, setCategory] = useState<Category>('all')

	const handleCategoryChange = useCallback((newCategory: Category) => {
		setCategory(newCategory)
	}, [])

	const getCategoryButtonClass = useCallback(
		(cat: Category) => {
			return category === cat ? styles.activeButton : styles.button
		},
		[category]
	)

	return (
		<div
			className={`${containerStyle.mycontainer} px-9 bg-cyan-400 my-16 rounded-3xl`}
		>
			<div className={styles.courses}>
				<h2 className={styles.heading}>Измени жизнь этой весной</h2>
				<div className={styles.categories}>
					<h2>Категорий:</h2>
					<button
						className={getCategoryButtonClass('all')}
						onClick={() => handleCategoryChange('all')}
					>
						Все курсы
					</button>
					<button
						className={getCategoryButtonClass('alphabet')}
						onClick={() => handleCategoryChange('alphabet')}
					>
						алфавиту
					</button>
					<button
						className={getCategoryButtonClass('new')}
						onClick={() => handleCategoryChange('new')}
					>
						Новое
					</button>
					<button
						className={getCategoryButtonClass('popular')}
						onClick={() => handleCategoryChange('popular')}
					>
						Популярные
					</button>
				</div>

				<div className={styles.coursesContainer}>
					<CourseCard />
				</div>
			</div>
		</div>
	)
}

export default Courses
