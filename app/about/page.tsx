'use client'

import { useRouter } from 'next/navigation'

const About = () => {
  const router = useRouter()

  return (
    <>
      <h1>Welcome About!!!</h1>
      <button onClick={ () => router.replace('/') }>Redirect User</button>
    </>
  )
}

export default About