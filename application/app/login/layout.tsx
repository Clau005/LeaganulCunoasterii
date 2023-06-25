
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