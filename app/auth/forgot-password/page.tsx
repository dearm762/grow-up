'use client'

import Link from 'next/link'
import forgotPassword from '@/actions/forgotPassword'

import styles from '@/styles/form.module.css'

const ForgotPage = () => {
  return (
    <>
      <title>KeepInTouch | Forgot Password</title>
      <div className={styles.wrapper}>
        <div className={ styles.formAuth }>
          <form className={ styles.form } action={forgotPassword} method='POST'>
            <h1 className={ styles.heading }>Forgot Password</h1>
            <input className={ styles.input } type="email" name="email" placeholder="Email" required />
            <button type="submit" className={ styles.button }>Send email</button>
          </form>
        </div>
        <div className={ styles.overlayContainer }>
          <div className={ styles.overlay }>
            <div className={ styles.overlayPanelRight }>
              <h1 className={ styles.heading }>Hello, Friend!</h1>
              <p className={ styles.paragraph }>Enter your personal details and start journey with us</p>
              <Link href='/auth/sign-in' className={ styles.ghost } >Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPage