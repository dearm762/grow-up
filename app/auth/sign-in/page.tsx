'use client'

import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import styles from '@/styles/form.module.css'

export default function SignInPage() {
  const router = useRouter()

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    const res = await fetch('https://keepintouch-back.vercel.app/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const resJson = await res.json();
    console.log(resJson)

    if (resJson.status) {
      router.push('/home')
    } else {
      
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={ styles.formAuth }>
          <form className={ styles.form } onSubmit={signIn}>
            <h1 className={ styles.heading }>Sign in</h1>
            <input className={ styles.input } type="email" name="email" placeholder="Email" />
            <input className={ styles.input } type="password" name="password" placeholder="Password" />
            <Link href="/auth/forgot-password">Forgot your password?</Link>
            <button type="submit" className={ styles.button }>Sign In</button>
          </form>
        </div>
        <div className={ styles.overlayContainer }>
          <div className={ styles.overlay }>
            <div className={ styles.overlayPanelRight }>
              <h1 className={ styles.heading }>Hello, Friend!</h1>
              <p className={ styles.paragraph }>Enter your personal details and start journey with us</p>
              <button className={ styles.ghost } id="signUp" onClick={ () => router.push('/auth/sign-up') }>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}