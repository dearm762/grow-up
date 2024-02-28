import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const cookieStore = cookies()
  	const ssid = cookieStore.get('ssid')

	if (ssid) redirect('/home')
    
    return (
        children
    )
  }
