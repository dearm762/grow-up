'use server'

import { permanentRedirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function forgotPassword(formData: FormData) {
    const cookieStore = cookies()

    const email = formData.get('email')

    const res = await fetch('https://keepintouch-back.vercel.app/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })

    const resJson = await res.json();

    if (resJson.status) {
        cookieStore.set('ssid', resJson.ssid)
        permanentRedirect('/')
    } else {
        console.log('error')
    }
}
