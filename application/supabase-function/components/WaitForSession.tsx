'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSupabase } from './SupabaseProvider';

interface WaitForSession {
  redirectUrl: string;
}

export const WaitForSession: React.FC<WaitForSession> = ({ redirectUrl }) => {
  const { replace, refresh } = useRouter();
  const { session, supabase } = useSupabase();

  useEffect(() => {
    if ((session?.user as any)?.session_id) {
      replace(redirectUrl);
      refresh();
    } else if (session) {
      supabase.auth.refreshSession({ refresh_token: session?.refresh_token });
    }
  }, [session, replace]);

  return null;
};
