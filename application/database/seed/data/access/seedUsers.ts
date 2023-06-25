import { PrismaClient } from '@prisma/client';

const SEED_USERS_SQL = `
WITH credentials(mail, pass, firstName, lastName) AS (
  -- PUT YOUR EMAILS AND PASSWORDS HERE.
  SELECT * FROM (VALUES
    ('bardanclaudiu29@gmail.com', 'password', 'Claudiu', 'Bardan')
    ) AS users
),
create_user AS (
  INSERT INTO auth.users (id, instance_id, ROLE, aud, email, raw_app_meta_data, raw_user_meta_data, is_super_admin, encrypted_password, created_at, updated_at, last_sign_in_at, email_confirmed_at, confirmation_sent_at, confirmation_token, recovery_token, email_change_token_new, email_change)
    SELECT gen_random_uuid(), '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', mail, '{"provider":"email","providers":["email"]}', jsonb_build_object('userFirstName', firstName, 'userLastName', lastName), FALSE, crypt(pass, gen_salt('bf')), NOW(), NOW(), NOW(), NOW(), NOW(), '', '', '', '' FROM credentials
  RETURNING id
)
INSERT INTO auth.identities (id, provider, user_id, identity_data, last_sign_in_at, created_at, updated_at)
  SELECT id, 'email', id, json_build_object('sub', id), NOW(), NOW(), NOW() FROM create_user;
`;

export const seedUsers = async (prismaClient: PrismaClient) => {
  console.log('Seeding users...');
  const seedUsersResult = await prismaClient.$executeRawUnsafe(SEED_USERS_SQL);
  console.log(`...result was ${seedUsersResult}`);
};