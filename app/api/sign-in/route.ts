import { SyntheticEvent } from "react"
import { permanentRedirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function POST(event: SyntheticEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget)

    const email = formData.get('email')
    const password = formData.get('password')

    const cookieStore = cookies()

    const res = await fetch('https://keepintouch-back.vercel.app/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const resJson = await res.json();

    if (resJson.status) {
        cookieStore.set('ssid', resJson.ssid)
        permanentRedirect('/home')
    } else {
        console.log('error')
    }
}
