'use client'

import { AdminNavbar } from '@/components/admin/AdminNavrbar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import ThemeProvider from '@/providers/ThemeProvider';
import '../globals.css'

export default  function AdminLayout({ children, }: { children: React.ReactNode }) {

  return (
      <div className="flex flex-col h-screen">
        <>
          <ThemeProvider>
            <AdminNavbar/>
            <div className='flex flex-row'>
              <div >
                <AdminSidebar/>
              </div>
                {children}
            </div>  
          </ThemeProvider>
        </>
      </div>
  )
}