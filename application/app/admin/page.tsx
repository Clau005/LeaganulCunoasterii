'use client'

import { DashBoardInformations } from "@/components/admin/Dashboard/DashboardInformations";
import { Instructions } from "@/components/admin/Dashboard/Instruction";
import { ThemeContext } from "@/providers/context/ThemeContext";
import { useSupabase } from "@/providers/SupabaseProvider";
import clsx from "clsx";
import { useContext } from "react";


export default function Admin() {
const {supabase, session} = useSupabase()
const { isDarkTheme } = useContext(ThemeContext);
console.log(isDarkTheme, 'isDarkTheme admin/page.tsx')
const user = session?.user?.user_metadata
console.log(session, 'admin/page.tsxss')



    return (
      <>
        <div className={clsx('flex flex-col w-full h-screen space-y-24', isDarkTheme ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-700')}>
            <div className="w-full text-center mt-24">
                <h1 className="text-4xl font-semibold">Welcome {user?.userFirstName}</h1>
            </div>
            {/* <div className="flex w-full justify-center items-center">
                <DashBoardInformations isDarkTheme={isDarkTheme}/>
            </div>
            <div className="w-full">
                <Instructions isDarkTheme={isDarkTheme} />
            </div> */}
        </div>   
      </>
    )
  }
  