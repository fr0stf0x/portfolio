import React from 'react';

import Button from '@/components/Button';
import ThemeSwitcher from '@/components/Switch/ThemeSwitcher';

import Logo from './Logo';
import NavLink from './NavLink';

const Header = () => {
  return (
    <nav
      className="
        container navbar 
        mx-auto
        flex
        w-full items-center 
        justify-between px-6
        text-lg
        md:px-8
        lg:px-24
      "
    >
      <div className="flex-1">
        <NavLink
          href="/"
          className="make-cursor-small flex items-center space-x-3 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0"
          activeClassName=""
        >
          <div className="relative h-12 w-12 rounded">
            <Logo />
          </div>
          <div className="">
            <h2
              tabIndex={0}
              className="text-sm font-bold text-neutral focus:outline-none"
            >
              Fr0stF0x&apos;s Portfolio
            </h2>
          </div>
        </NavLink>
      </div>
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-ghost btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          <li>
            <a className="top-menu-link">
              <ThemeSwitcher />
            </a>
          </li>
          <li>
            <NavLink className="top-menu-link rounded py-0" href="/">
              <Button className="block py-2">About me</Button>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="top-menu-link rounded py-0"
              href="https://fr0stf0x.github.io"
            >
              <Button className="block py-2">My works</Button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
