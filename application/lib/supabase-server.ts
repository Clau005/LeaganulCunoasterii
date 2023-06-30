import { Database } from '@/types/supabase';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { PostgrestMaybeSingleResponse, PostgrestResponse, PostgrestSingleResponse } from '@supabase/postgrest-js';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { use } from 'react';

export type AnyPostgrestResponse<Result> =
  | PostgrestSingleResponse<Result>
  | PostgrestMaybeSingleResponse<Result>
  | PostgrestResponse<Result>;

export const createSupabaseServerClient = () => {
  return createServerComponentClient<Database>(
    {
      cookies
    },
  );
};

export const createDangerousSupabaseServiceRoleClient = () => {
  return createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);
};

export const useServerSupabaseSession = () => {
  const fetchSession = async () => {
    const accessSupabase = createSupabaseServerClient();
    const { data: sessionRes } = await accessSupabase.auth.getSession();
    return sessionRes?.session;
  };
  return use(fetchSession());
};

export const useServerSupabaseData = <Result>(query: PromiseLike<AnyPostgrestResponse<Result>>) => {
  const fetchData = async () => {
    return await query;
  };
  return use(fetchData());
};
