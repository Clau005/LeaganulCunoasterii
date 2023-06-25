'server only'
import Header from '@/components/admin/Header';
import { Footer } from '@/components/Footer';

import '../globals.css'


export const revalidate = 0;


export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
      <div className="flex flex-col">
        <Header/>
        {children}
        <Footer/>
      </div>

  )
}