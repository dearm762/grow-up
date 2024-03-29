import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import '@/styles/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  	title: 'GrowUp | платформа для саморазвитий',
  	description: 'GrowUp — ведущую платформу для саморазвития! Наши инновационные инструменты и курсы помогут вам эффективно развиваться в любой области',
	keywords: [
		"саморазвитие", "платформа для обучения", "личный рост",
		"курсы саморазвития", "профессиональное развитие", "образовательные ресурсы",
		"развитие навыков", "учебные программы", "онлайн обучение",
		"карьерный рост", "эффективность", "мотивация",
		"успех", "знания", "навыки", 
		"продуктивность", "самоусовершенствование", "инновации",
		"творчество", "цели", "аспирант",
		"повышение квалификации", "вдохновение", "самообразование",
		"обучающие материалы", "интеллектуальный рост", "цифровая грамотность",
		"техническое обучение", "рост личности", "компетенции",
		"академические курсы", "креативность", "наставничество",
		"менторство", "умения", "интерактивное обучение",
		"курсы онлайн", "семинары", "вебинары",
		"обучающие видео", "повышение профессионального уровня", "программы развития",
		"тренинги", "инструменты обучения", "развитие лидерских качеств",
		"обучение на рабочем месте", "адаптивное обучение", "сообщество обучающихся"
	]
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
