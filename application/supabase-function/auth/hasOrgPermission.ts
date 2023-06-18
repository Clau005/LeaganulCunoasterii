import { Session } from '@supabase/auth-helpers-nextjs';
import { hasOrgAnyPermission } from './hasOrgAnyPermission';

export const hasOrgPermission = (session: Session | null, organisationId: string, permission: string): boolean => {
  return hasOrgAnyPermission(session, organisationId, [permission]);
};
