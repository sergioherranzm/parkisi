import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import tw from 'twin.macro';

const MenuItem = tw.div`py-2 px-4 hover:bg-gray-600 hover:text-white whitespace-nowrap`;

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
  //const [isNavOpen, setIsNavOpen] = useState(false);
  const { user } = useUser();

  return (
    <nav tw="text-gray-600 bg-gray-200">
      <div tw="container mx-auto px-2 grid grid-cols-3">
        <div tw="mx-4 flex items-center">
          <Link href="/">
            <a>
              <MenuItem>Home</MenuItem>
            </a>
          </Link>
          {user && (
            <>
              {' '}
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

    /*
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <p>PARKISI</p>
      <nav>
        <section className="MOBILE-MENU flex ">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:hidden">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
    </div>*/
  );
};
