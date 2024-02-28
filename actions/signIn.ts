'use server'

import { permanentRedirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function signIn(formData: FormData) {
    const cookieStore = cookies()

    const email = formData.get('email')
    const password = formData.get('password')

    const res = await fetch('https://keepintouch-back.vercel.app/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const resJson = await res.json();

    if (resJson.status) {
        cookieStore.set('ssid', resJson.ssid)
        permanentRedirect('/dashboard')
    } else {
        console.log(resJson.message)
    }
}
