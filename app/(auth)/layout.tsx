import type { Metadata } from 'next'
import styles from './form.module.css'	

export const metadata: Metadata = {
  title: 'Auth title',
  description: 'Sign in',
  keywords: ['my', 'social', 'media']
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <form className={ styles.Form }>
      {children}
    </form>
  )
}