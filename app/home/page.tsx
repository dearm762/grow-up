import { cookies } from "next/headers"
import Header from "@/components/header"
import { redirect } from "next/navigation"

const HomePage = () => {
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