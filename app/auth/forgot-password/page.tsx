'use client'

import { FC } from 'react'
import Link from 'next/link'

import forgotPassword from '@/actions/forgotPassword'

import styles from '@/styles/form.module.css'

const ForgotPage: FC = () => {
  return (
    <>
      <title>GrowUp | Забыли пароль</title>
      <div className={styles.wrapper}>
        <div className={ styles.formAuth }>
          <form className={ styles.form } action={forgotPassword} method='POST'>
            <h1 className={ styles.heading }>Забыли пароль</h1>
            <input className={ styles.input } type="email" name="email" placeholder="Электронная почта" required />
            <button type="submit" className={ styles.button }>Отправить письмо</button>
          </form>
        </div>
        <div className={ styles.overlayContainer }>
          <div className={ styles.overlay }>
            <div className={ styles.overlayPanelRight }>
              <h1 className={ styles.heading }>Привет, друг!</h1>
              <p className={ styles.paragraph }>Введите свои личные данные и начните путешествие вместе с нами</p>
              <Link href='/auth/sign-in' className={ styles.ghost } >Войти</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPage