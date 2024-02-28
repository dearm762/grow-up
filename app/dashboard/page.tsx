import { FC } from 'react'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import Header from "@/components/header"

import containerStyle from '@/styles/container.module.css'

const DashboardPage: FC = () => {
  const cookieStore = cookies()
  const ssid = cookieStore.get('ssid')

  if (!ssid) redirect('/')

  return (
    <>
      <title>KeepInTouch | Home</title>
      <Header isAuthorized={ ssid.value } />
      <main className={ containerStyle.mycontainer }>
        
      </main>
    </>
  )
}

export default DashboardPage