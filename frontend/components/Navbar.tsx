import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useState } from 'react';
import tw from 'twin.macro';
import { Button } from './shared/Button';
import { Logo } from './shared/Logo';
import { BiLocationPlus } from 'react-icons/bi';

const MenuItem = tw.div`py-4 px-4 whitespace-nowrap border-b-2 border-transparent transition-all hover:bg-secondary-200 hover:border-secondary-400 hover:text-white`;

const LoginStatus = () => {
  const { user } = useUser();

  return (
    <div tw="flex justify-end items-center">
      {!user && (
        <Link href="/api/auth/login">
          <a>
            <MenuItem>Sign in</MenuItem>
          </a>
        </Link>
      )}
      {user && (
        <>
          <Link href="/user/myProfile">
            <a>
              <MenuItem>{user.email}</MenuItem>
            </a>
          </Link>

          <Link href="/api/auth/logout">
            <a>
              <MenuItem>Logout</MenuItem>
            </a>
          </Link>
        </>
      )}
    </div>
  );
};

export const Navbar = () => {
  const { user } = useUser();
  const [logoColor, setLogoColor] = useState('#671014');

  return (
    <nav tw="text-secondary-400 bg-primary-100 font-semibold">
      <div tw="container mx-auto px-2 flex justify-between">
        <div tw="mx-4 flex items-center">
          <Link href="/">
            <a
              tw="px-4 py-2 cursor-pointer border-b-2 border-transparent transition-all hover:bg-secondary-200 hover:border-secondary-400 hover:text-white"
              onMouseEnter={() => {
                setLogoColor('white');
              }}
              onMouseLeave={() => {
                setLogoColor('#671014');
              }}
            >
              <Logo fillColor={logoColor} width="40" height="40" />
            </a>
          </Link>
          {user && (
            <>
              <Link href="/parking/list">
                <a>
                  <MenuItem>My parkings</MenuItem>
                </a>
              </Link>
              <Link href="/reserve/list">
                <a>
                  <MenuItem>My reserves</MenuItem>
                </a>
              </Link>
              <div tw="mx-4">
                <Link href="/reserve/create">
                  <Button variant="neutral" icon={<BiLocationPlus size={20} />}>
                    Find Parkings
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>

        <LoginStatus />
      </div>
    </nav>
  );
};
