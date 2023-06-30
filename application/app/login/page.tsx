'use client'

import { AdminSignIn } from "@/components/AuthComponents/AdminSign"
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function LoginAdmin() {
    const { session } = useSessionContext();
    const supabase = useSupabaseClient();
    console.log(session, 'session')

    return (
        <>
           <AdminSignIn/>
        </>
    )
  }
  