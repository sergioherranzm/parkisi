import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useState } from 'react';
import tw, { styled, theme } from 'twin.macro';

const MenuItem = tw.div`py-2 px-4 hover:bg-secondary-200 hover:text-white whitespace-nowrap`;

const LoginStatus = () => {
  const { user } = useUser();
  const userProfileLink = `/user/${user?.sub}`;

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

  return (
    <nav tw="text-secondary-300 bg-primary-100">
      <div tw="container mx-auto px-2 grid grid-cols-3">
        <div tw="mx-4 flex items-center">
          <Link href="/">
            <a>
              <MenuItem>Home</MenuItem>
            </a>
          </Link>
          {user && (
            <>
              <Link href="/reserve/list">
                <a>
                  <MenuItem>My reserves</MenuItem>
                </a>
              </Link>
              <Link href="/parking/list">
                <a>
                  <MenuItem>My parkings</MenuItem>
                </a>
              </Link>
            </>
          )}
        </div>
        <div tw="text-center self-center flex justify-center">
          {/* eslint-disable */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/8/8173.png"
            alt="logo"
            height="35"
            width="35"
          />
          {/* eslint-enable */}
        </div>
        <LoginStatus />
      </div>
    </nav>
  );
};
