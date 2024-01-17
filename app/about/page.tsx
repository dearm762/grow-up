import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About page',
  description: 'Its about page description'
}

const About = () => {
  return (
    <h1>Welcome About!!!</h1>
  )
}

export default About