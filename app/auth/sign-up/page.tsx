'use client'

import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

import styles from '@/styles/form.module.css'

const SignUpPage = () => {
  const router = useRouter()

  async function signUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const email = formData.get('email')
    const password = formData.get('password')
    const surname = formData.get('surname')
    const name = formData.get('name')

    const res = await fetch('https://keepintouch-back.vercel.app/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name, surname })
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
          <form className={ styles.form } onSubmit={signUp}>
            <h1 className={ styles.heading }>Create Account</h1>
            <input className={ styles.input } type="text" placeholder="Surname" name='surname' />
            <input className={ styles.input } type="text" placeholder="Name" name='name' />
            <input className={ styles.input } type="email" placeholder="Email" name='email' />
            <input className={ styles.input } type="password" placeholder="Password" name='password' />
            <button className={ styles.button }>Sign Up</button>
          </form>
        </div>
        <div className={ styles.overlayContainer }>
          <div className={ styles.overlay }>
            <div className={ styles.overlayPanelRight }>
              <h1 className={ styles.heading }>Welcome Back!</h1>
              <p className={ styles.paragraph }>To keep connected with us please login with your personal info</p>
              <button className={ styles.ghost } id="signIn" onClick={ () => router.push('/auth/sign-in') }>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage