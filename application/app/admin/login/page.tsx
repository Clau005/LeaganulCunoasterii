'use client'

import { AdminSignIn } from "@/app/auth/AuthComponents/AdminSign"
import { useSupabase } from "@/supabase-function/components/SupabaseProvider";

export default function LoginAdmin() {
    const { supabase, session } = useSupabase<'public'>();
    console.log(session, 'session')

    return (
        <>
           <AdminSignIn/>
        </>
    )
  }
  