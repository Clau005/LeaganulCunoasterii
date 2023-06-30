'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { createClientComponentClient,  Session, SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Database } from '@/types/supabase';

type MaybeSession =  Session | null


type SupabaseContext = {
  supabase: SupabaseClient
  session : MaybeSession
}

const Context = createContext<SupabaseContext | undefined>(undefined);

export  const SupabaseProvider = ({ children, session  }: { children: React.ReactNode, session : MaybeSession }) => {

  const router = useRouter();
 const [supabase] = useState(() => createClientComponentClient<Database>())

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  return (
    <Context.Provider value={{supabase, session}}>
      <>{children}</>
    </Context.Provider>
  )
}

export default SupabaseProvider

export const useSupabase = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider');
  }

  return context
};