import { getServerUser } from './getServerUser';
import { getServerSessionUser } from '@/submodules/supabase-functions/auth/getServerSessionUser';
import { use } from 'react';

export const getServerCurrentUser = async () => {
  const user = await getServerSessionUser();
  let serverUser = undefined;
  if (user) {
    const { data: serverUserData, error } = await getServerUser(user.id);
    serverUser = serverUserData;
  }
  return serverUser;
};

export const useServerCurrentUser = () => {
  return use(getServerCurrentUser());
};
