import Image from 'next/image'
import Link from 'next/link'

import courseCardStyle from '@/styles/courses.module.css'

const CourseCard = () => {
	return (
		<>
			<div className={courseCardStyle.courseCard}>
				<Image
					src='/thumbnail.jpg'
					width={999}
					height={999}
					alt='course image'
					className={courseCardStyle.courseImage}
				/>
				<h3 className={courseCardStyle.courseHeading}>
					Анимаций css, scss и sass
				</h3>
				<Link href={''} className={courseCardStyle.courseButton}>
					Подробнее
				</Link>
			</div>
		</>
	)
}

export default CourseCard
