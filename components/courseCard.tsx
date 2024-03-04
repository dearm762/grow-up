import Image from 'next/image'

import courseCardStyle from '@/styles/courses.module.css'

const CourseCard = () => {
	return (
		<>
			<div className={courseCardStyle.courseCard}>
				<Image
					src='/thumbnail.jpg'
					width={160}
					height={90}
					alt='course image'
					className={courseCardStyle.courseImage}
				/>
				<h3 className={courseCardStyle.courseHeading}>Анимаций css, scss и sass</h3>
				<button className={courseCardStyle.courseButton}>Подробнее</button>
			</div>
		</>
	)
}

export default CourseCard
