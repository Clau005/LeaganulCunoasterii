'use client'
import { AdminNavbar } from '@/components/admin/AdminNavrbar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

import '../globals.css'


export const revalidate = 0;


export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

    
  return (
      <>
        {children}
      </>

  )
}