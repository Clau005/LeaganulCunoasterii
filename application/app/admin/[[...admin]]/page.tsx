'use client'

import { AdminSignIn } from "@/app/auth/AuthComponents/AdminSign"
import { useSupabase } from "@/supabase-function/components/SupabaseProvider";
import { useUser } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation";

export default function Admin() {
    const router = useRouter()
    const { supabase, session } = useSupabase<'public'>();
    console.log(session, 'session')

    if (!session) {
        router.push('/admin/login')
    }

    return (
        <>
        {session && (
            <div>
                <h1 className="text-green-500">This is admin</h1>
            </div>
        )}
        </>
    )
  }
  