'use client'

import { FC } from 'react'
import Link from 'next/link'

import signIn from '@/actions/signIn'

import styles from '@/styles/form.module.css'

const SignInPage: FC = () => {
  return (
    <>
      <title>GrowUp | Войти</title>
      <div className={styles.wrapper}>
        <div className={ styles.formAuth }>
          <form className={ styles.form } action={signIn} method='POST'>
            <h1 className={ styles.heading }>Войти</h1>
            <input className={ styles.input } type="email" name="email" placeholder="Почта" required />
            <input className={ styles.input } type="password" name="password" placeholder="Пароль" required />
            <Link href="/auth/forgot-password">Забыли пароль?</Link>
            <button type="submit" className={ styles.button }>Войти</button>
          </form>
        </div>
        <div className={ styles.overlayContainer }>
          <div className={ styles.overlay }>
            <div className={ styles.overlayPanelRight }>
              <h1 className={ styles.heading }>Привет, друг!</h1>
              <p className={ styles.paragraph }>Введите свои личные данные и начните путешествие вместе с нами</p>
              <Link href='/auth/sign-up' className={ styles.ghost } >Зарегистрироваться</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignInPage