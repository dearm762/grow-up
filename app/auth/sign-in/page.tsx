'use client'

import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import styles from '@/styles/form.module.css'
 
export default function LoginPage() {
  const router = useRouter()
 
  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
 
    const res = await fetch('/api/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
 
    if (res.ok) {
      router.push('/home')
    } else {
      // Handle errors
    }
  }
 
  return (
    <div className={ styles.form }>
      <form onSubmit={signIn}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      <aside>
        <Image alt='aside bg' src='/bg-sign-in.avif' width={100} height={100} />
      </aside>
      
    </div>
    
  )
}