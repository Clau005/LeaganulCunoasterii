'use client'


import { AdminNavbar } from "@/components/admin/AdminNavrbar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { useSupabase } from "@/providers/SupabaseProvider";
import clsx from "clsx";
import { useState } from "react";


export default function Admin() {
const {supabase, session} = useSupabase<'public'>()
const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

const user = session?.user?.user_metadata
console.log(session, 'admin/page.tsx')



    return (
       <>
        <AdminNavbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <div className='flex flex-row'>
          <div >
            <AdminSidebar/>
          </div>
          <div className={clsx('flex flex-row w-full', isDarkTheme ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-700')}>
           <div className="w-full text-center mt-24">
            <h1 className="text-4xl">Welcome {user?.userFirstName}</h1>
           </div>
        </div>
        </div>
     
       
       </>
    )
  }
  