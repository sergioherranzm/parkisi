import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export const SignupForm = () => {
  const { user } = useUser();

  return (
    <>
      <div tw="container mx-auto bg-white rounded-xl border">
        <div tw="p-6  bg-yellow-300 rounded-t-xl text-3xl font-extrabold">
          <h1 tw="text-center text-yellow-600">PARKISI</h1>
        </div>
        <div tw="px-10 py-5 flex-col justify-center items-center">
          {user && (
            <>
              <div tw="flex justify-center py-2">{user.nickname}</div>
              <div tw="flex justify-center py-2">{user.email}</div>
              <div tw="flex justify-center py-1 border rounded bg-red-400">
                <Link href="/api/auth/logout">
                  <a>LOGOUT</a>
                </Link>
              </div>
            </>
          )}
          {!user && (
            <div tw="flex justify-center py-1 border rounded bg-blue-400">
              <Link href="/api/auth/login">
                <a>LOGIN</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
