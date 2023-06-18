
import SupabaseListener from '@/components/auth/SupabaseListener';
import SupabaseProvider from '@/supabase-function/components/SupabaseProvider';
import { createSupabaseServerClient } from '@/supabase-function/lib/supabase-server';
import { SupabaseClient } from '@supabase/auth-helpers-react';
import 'server-only';


// import type { Database } from '../db_types';
export type TypedSupabaseClient = SupabaseClient /*<Database>*/;

// do not cache this layout
export const revalidate = 0;
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createSupabaseServerClient<'public'>('public');

  let {
    data: { session }
  } = await supabase.auth.getSession();

  // If we have a session but permissions are missing, refresh the session (happens on OAuth signin)
  if (session?.user?.app_metadata && !session?.user?.app_metadata?.access) {
    let {
      data: { session: refreshedSession }
    } = await supabase.auth.refreshSession();
    session = refreshedSession;
  }

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <title>DealQuest - Financial Edge</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#222430" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#222430" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#222430" />
      </head>
      <body>
        <SupabaseProvider session={session}>
         
            <SupabaseListener serverAccessToken={session?.access_token} />
            {children}
      
        </SupabaseProvider>
      </body>
    </html>
  );
}
