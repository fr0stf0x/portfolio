import { ReactNode } from 'react';

import Link from 'next/link';

import Header from '@/layout/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}
    {/* <header>
      <nav
        className="
          container flex flex-wrap justify-between
          items-center py-8
          px-6
          mx-auto
          w-full
          text-lg
          text-gray-700
          bg-white md:py-4
          lg:px-24
        "
      > */}
    {/* <Link href="/">
          <a className="flex items-center space-x-3 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
            <div className="relative w-12 h-12 rounded">
              <Logo />
            </div>
            <div className="">
              <h2
                tabIndex={0}
                className="text-sm font-bold text-gray-800 dark:text-gray-100 focus:outline-none"
              >
                Fr0stF0x&apos;s Portfolio
              </h2>
            </div>
          </a>
        </Link> */}

    {/* contact and burger on mobile */}
    {/* <div className="flex items-center space-x-5">
          <button className="block text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out md:hidden btn btn-active btn-primary">
            Contact Me
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            onClick={toggleMobileMenu}
            className="block w-6 h-6 cursor-pointer md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div> */}

    {/* menu */}
    {/* <div
          className="hidden pt-4 w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
              space-y-1
              space-x-0
              text-base
              text-gray-700 
              md:flex
              md:justify-between
              md:items-center
              md:space-y-0
              md:space-x-8
            "
          >
            <li>
              <Link href="/">
                <a className="block py-2 hover:text-indigo-600">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="block py-2 hover:text-indigo-600">Projects</a>
              </Link>
            </li>
            <li>
              <button className="hidden text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out md:block btn btn-active btn-primary">
                Contact Me
              </button>
            </li>
          </ul>
        </div> */}
    <div className="drawer drawer-end h-screen w-full">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Header />
        {/* Page content here */}
        <main>{props.children}</main>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay" />
        <ul className="menu w-80 overflow-y-auto bg-base-100 p-4">
          {/* Sidebar content here */}
          <li>
            <Link href="/">
              <a className="block py-2 hover:text-indigo-600">/</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="block py-2 hover:text-indigo-600">Projects</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    {/* </nav>
    </header> */}

    {/* <div className="mx-auto max-w-screen-md">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  About
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="content py-5 text-xl">{props.children}</div>

      <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
      </div>
    </div> */}
  </div>
);

export { Main };
