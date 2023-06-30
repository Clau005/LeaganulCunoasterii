import 'server-only'
import SupabaseProvider from '@/providers/SupabaseProvider';
import { cookies } from 'next/headers'
import './globals.css'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';

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
      <body>
        <SupabaseProvider session={session}>
           {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}