'use client'

import { FC } from 'react'
import Link from 'next/link'

import signUp from '@/actions/signUp'

import styles from '@/styles/form.module.css'

const SignUpPage: FC = () => {
  return (
    <>
      <title>KeepInTouch | Sign Up</title>
      <div className={styles.wrapper}>
      <div className={ styles.formAuth }>
          <form className={ styles.form } action={signUp}>
            <h1 className={ styles.heading }>Create Account</h1>
            <input className={ styles.input } type="text" placeholder="Surname" name='surname' required />
            <input className={ styles.input } type="text" placeholder="Name" name='name' required />
            <input className={ styles.input } type="email" placeholder="Email" name='email' required />
            <input className={ styles.input } type="password" placeholder="Password" name='password' required />
            <button className={ styles.button }>Sign Up</button>
          </form>
        </div>
        <div className={ styles.overlayContainer }>
          <div className={ styles.overlay }>
            <div className={ styles.overlayPanelRight }>
              <h1 className={ styles.heading }>Welcome Back!</h1>
              <p className={ styles.paragraph }>To keep connected with us please login with your personal info</p>
              <Link href='/auth/sign-in' className={ styles.ghost }>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage