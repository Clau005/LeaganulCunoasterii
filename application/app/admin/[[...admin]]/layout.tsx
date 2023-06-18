'use client';


import Header from '@/components/admin/Header';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <>
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
      </>
    </div>
  );
}
