import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import '@/styles/main.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  	title: 'My Next App',
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
	],
	themeColor: '#000'
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