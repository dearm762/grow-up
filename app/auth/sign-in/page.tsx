'use client'

import Link from 'next/link'
import signIn from '@/actions/signIn'

import styles from '@/styles/form.module.css'

const SignInPage = () => {
  return (
    <>
      <title>KeepInTouch | Sign In</title>
      <div className={styles.wrapper}>
        <div className={ styles.formAuth }>
          <form className={ styles.form } action={signIn} method='POST'>
            <h1 className={ styles.heading }>Sign In</h1>
            <input className={ styles.input } type="email" name="email" placeholder="Email" required />
            <input className={ styles.input } type="password" name="password" placeholder="Password" required />
            <Link href="/auth/forgot-password">Forgot your password?</Link>
            <button type="submit" className={ styles.button }>Sign In</button>
          </form>
        </div>
        <div className={ styles.overlayContainer }>
          <div className={ styles.overlay }>
            <div className={ styles.overlayPanelRight }>
              <h1 className={ styles.heading }>Hello, Friend!</h1>
              <p className={ styles.paragraph }>Enter your personal details and start journey with us</p>
              <Link href='/auth/sign-up' className={ styles.ghost } >Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignInPage