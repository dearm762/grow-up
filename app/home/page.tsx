import { FC } from 'react'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import Header from "@/components/header"

const HomePage: FC = () => {
  const cookieStore = cookies()
  const ssid = cookieStore.get('ssid')

  if (!ssid) redirect('/')

  return (
    <>
      <title>KeepInTouch | Home</title>
      <Header isAuthorized={ ssid.value } />
      <div>
      </div>
    </>
  )
}

export default HomePage