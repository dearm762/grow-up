'use server'

import { permanentRedirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function signUp(formData: FormData) {
    const cookieStore = cookies()

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

    if (resJson.status) {
        cookieStore.set('ssid', resJson.ssid)
        permanentRedirect('/home')
    } else {
      console.log(resJson.message)
    }
  }