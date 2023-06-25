'server only'
import Header from '@/components/admin/Header';
import SupabaseProvider from '@/providers/SupabaseProvider';
import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Figtree } from 'next/font/google'
import { cookies } from 'next/headers'


import './globals.css'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Leaganul-Cunoasterii',
  description: 'Spotify Clone',
}

export const revalidate = 0;


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
const supabase = createServerComponentClient<Database>({ cookies })
  let {
    data: { session }
  } = await supabase.auth.getSession() 


  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider session={session}>
           {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}