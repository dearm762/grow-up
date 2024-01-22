import { FC } from 'react'
import Link from 'next/link'
import styles from './home.module.css'
import routes from './_src/routes'

const Home: FC = () => {
  return (
    <>
      <h1 className={ styles.heading }>Welcome to Home page!!!</h1>
      <h2 className={ styles.heading2 }>Current available Routes:</h2>
      <nav className={ styles.navigation }>
        {
          routes.map( route => (
            <Link key={route.path} href={route.path}>
              {route.name}
            </Link>
          ))
        }
      </nav>
    </>
  )
}

export default Home