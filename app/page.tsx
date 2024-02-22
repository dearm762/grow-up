import { FC } from 'react'
import type { Metadata } from 'next'

import Header from '@/components/header'

import containerStyle from '@/styles/container.module.css'
import styles from '@/styles/home.module.css'

export const metadata: Metadata = {
	title: 'KeepInTouch | Welcome!',
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

const Home: FC = () => {
	return (
		<>
			<Header />
			<main className={containerStyle.mycontainer}>
				<h2 className={ styles.heading }>New Era of Messaging</h2>
			</main>
		</>
	)
}

export default Home
