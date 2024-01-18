import { FC } from 'react'
import Link from 'next/link'
import './home.css'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Forgot Password', path: '/forgot-password' },
  { name: 'Sign In', path: '/sign-in' },
  { name: 'Sign Up', path: '/sign-up' },
  { name: 'Users', path: '/users/1' }
]

const Home: FC = () => {
  return (
    <>
      <h1 className='heading'>Welcome Home!!!</h1>
      <h2>SiteMap:</h2>
      <nav className='navigation'>
        {
          routes.map((route, index) => (
            <Link key={index} href={route.path}>
              {route.name}
            </Link>
          ))
        }
      </nav>
    </>
  )
}

export default Home