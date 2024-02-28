import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import '@/styles/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  	title: 'GrowUp | платформа для саморазвитий',
  	description: 'First social media by Kazakhstan',
	keywords: [
		"Kazakhstan", "Astana", "Almaty",
    	"Central Asia", "Silk Road", "Nomad",
    	"Steppe", "Culture", "Tradition",
    	"History", "Kazakh", "Russian",
    	"Ethnicity", "Diversity", "Hospitality", 
		"Nature", "Mountains", "Lakes",
    	"Tourism", "Adventure", "Cuisine",
    	"Baikonur", "Space", "Technology",
    	"Economy", "Business", "Innovation",
    	"Education", "Youth", "Fashion",
    	"Art", "Music", "Film",
    	"Literature", "Sports", "Football",
    	"Wrestling", "Ice Skating", "National Holidays",
    	"Independence", "Unity", "Multiculturalism",
    	"Language", "Cyrillic", "Urban Life",
    	"Rural Life", "Family", "Friendship",
    	"Networking", "Social Change"
	]
}

export const viewport: Viewport = {
	themeColor: '#000000'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}