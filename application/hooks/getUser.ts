import { SupabaseSchemaType } from "@/providers/SupabaseProvider";
import { Database } from "@/types/supabase";
import { createServerComponentClient, Session } from "@supabase/auth-helpers-nextjs";
import {cookies} from 'next/headers'

export const createSupabaseServerClient = <T extends SupabaseSchemaType>(schema: T) => {
    return createServerComponentClient<Database, T>(
      {
        cookies
      },
      {
        options: {
          db: {
            schema: schema
          }
        }
      }
    );
  };




export const getServerUser = async (userId: string | undefined, session: Session | null) => {
 if (session) {
    const supabase = createSupabaseServerClient<'access'>('access');
    return await supabase.from('User').select().eq('id', userId).maybeSingle();
 }
};
