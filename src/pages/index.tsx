import { Inter } from '@next/font/google'

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import Account from '@/components/Account/Account'

const inter = Inter({ subsets: ['latin'] })

import styles from '@/styles/Home.module.css'

export default function Home() {

  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
      ) : (
        <Account session={session} />
      )}
    </div>
  )

  return (
    <>
      <h1 className="text-3xl font-bold underline">Home</h1>
    </>
  )
}
