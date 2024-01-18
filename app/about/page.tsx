import type { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  return {
    title: 'About page'
  }
}

const About = () => {
  return (
    <h1>Welcome About!!!</h1>
  )
}

export default About