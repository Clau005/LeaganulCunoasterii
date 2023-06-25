"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClientComponentClient, createServerComponentClient, Session, SupabaseClient, User } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Database } from "@/types/supabase";
import { cookies } from "next/headers";
import { UserDetails } from "@/app-types";

type SupabaseClientMap = {
  [schemaName: string]: SupabaseClient<Database, any, any>;
};


type MaybeSession =  Session | null

export type SupabaseSchemaType = string & keyof Database;

type SupabaseContext = {
  supabaseClients: SupabaseClientMap
  session : MaybeSession
}



const DATABASE_SCHEMAS: SupabaseSchemaType[] = (process.env.NEXT_PUBLIC_DATABASE_SCHEMAS ?? 'public').split(
  ','
) as SupabaseSchemaType[];

// @ts-ignore
export const Context = createContext<SupabaseContext>();

export  const SupabaseProvider = ({ children, session }: { children: React.ReactNode; session : MaybeSession }) => {

  const router = useRouter();
  const [supabaseClients] = useState<SupabaseClientMap>(() => {
    let supabaseClients: SupabaseClientMap = {};
    DATABASE_SCHEMAS.forEach((schema) => {
      supabaseClients[schema] = createClientComponentClient<Database, SupabaseSchemaType>({
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        isSingleton: false,
        options: { db: { schema: schema } }
      });
    });
    return supabaseClients;
  });

  useEffect(() => {
    const {
      data: { subscription }
    } = supabaseClients['public'].auth.onAuthStateChange(() => {
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabaseClients]);

  return (
    <Context.Provider value={{supabaseClients, session}}>
      <>{children}</>
    </Context.Provider>
  )
}

export default SupabaseProvider

export const useSupabase = <T extends string & keyof Database>(schema: SupabaseSchemaType = 'public') => {
  const context = useContext<SupabaseContext>(Context);
  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider');
  }

  const { supabaseClients, session } = context;

  let supabaseClient = supabaseClients?.[schema];
  if (!supabaseClient) {
    throw new Error(`Didn't find supabase client for ${schema}`);
  }

  return {
    session: session,
    supabase: supabaseClient as SupabaseClient<Database, T>
  };
};