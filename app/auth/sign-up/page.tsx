'use client'

import { FC } from 'react'
import Link from 'next/link'

import signUp from '@/actions/signUp'

import styles from '@/styles/form.module.css'

const SignUpPage: FC = () => {
  return (
    <>
      <title>GrowUp | Зарегистрироваться</title>
      <div className={styles.wrapper}>
      <div className={ styles.formAuth }>
          <form className={ styles.form } action={signUp}>
            <h1 className={ styles.heading }>Создать аккаунт</h1>
            <input className={ styles.input } type="text" placeholder="Фамилия" name='surname' required />
            <input className={ styles.input } type="text" placeholder="Имя" name='name' required />
            <input className={ styles.input } type="email" placeholder="Почта" name='email' required />
            <input className={ styles.input } type="password" placeholder="Пароль" name='password' required />
            <button className={ styles.button }>Зарегистрироваться</button>
          </form>
        </div>
        <div className={ styles.overlayContainer }>
          <div className={ styles.overlay }>
            <div className={ styles.overlayPanelRight }>
              <h1 className={ styles.heading }>Добро пожаловать!</h1>
              <p className={ styles.paragraph }>Чтобы оставаться на связи с нами, пожалуйста, войдите, используя свои личные данные.</p>
              <Link href='/auth/sign-in' className={ styles.ghost }>Войти</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage