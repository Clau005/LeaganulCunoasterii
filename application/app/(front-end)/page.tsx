'use client'
import { useSupabase } from "@/providers/SupabaseProvider";



export default function Home() {
const {supabase, session} = useSupabase<'public'>()


const user = session?.user?.user_metadata
console.log(session, 'admin/(front-end)/page.tsx')



    return (
        <div>  
            <h1>This is Home page {user?.userFistName}</h1>
        </div>
    )
  }