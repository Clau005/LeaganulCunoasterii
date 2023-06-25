'use client';

import { useSupabase } from '@/providers/SupabaseProvider';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';


export const Header: React.FC = () => {
  const {supabase, session} = useSupabase()

  const handleSignOutClick = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="flex w-full  bg-gradient-to-r bg-[#6B63FF]  shadow-sm items-center justify-between gap-24 px-3 md:px-6 ">
      <Link href="/" className="shrink-0 py-8">
        <div className="flex flex-col items-start gap-3">
     
        </div>
      </Link>

      <Link href={!session ? '/admin/login' : '#'}>
        <div
          onClick={handleSignOutClick}
          className={clsx(
            'cursor-pointer group hidden lg:flex relative z-20 items-center gap-2 font-heading font-semibold duration-150 text-nsAdmin-50 | hover:text-white'
          )}
        >
          <span className="relative py-9  text-xl">{session ? 'Sign Out' : 'Sign In'}</span>

        </div>
      </Link>
    </header>
  );
};

export default Header;
