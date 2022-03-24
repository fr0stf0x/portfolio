import React from 'react';

import Logo from './Logo';
import NavLink from './NavLink';

const Header = () => {
  return (
    // <header>
    //   <nav
    //     className="
    //       container flex flex-wrap justify-between
    //       items-center py-8
    //       px-6
    //       mx-auto
    //       w-full
    //       text-lg
    //       text-gray-700
    //       bg-white md:py-4
    //       lg:px-24
    //     "
    //   >
    //     {/* <NavLink href="/">
    //       <a className="flex items-center space-x-3 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
    //         <div className="relative w-12 h-12 rounded">
    //           <Logo />
    //         </div>
    //         <div className="">
    //           <h2
    //             tabIndex={0}
    //             className="text-sm font-bold text-gray-800 dark:text-gray-100 focus:outline-none"
    //           >
    //             Fr0stF0x&apos;s Portfolio
    //           </h2>
    //         </div>
    //       </a>
    //     </NavLink> */}

    //     {/* contact and burger on mobile */}
    //     {/* <div className="flex items-center space-x-5">
    //       <button className="block text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out md:hidden btn btn-active btn-primary">
    //         Contact Me
    //       </button>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         id="menu-button"
    //         onClick={toggleMobileMenu}
    //         className="block w-6 h-6 cursor-pointer md:hidden"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M4 6h16M4 12h16M4 18h16"
    //         />
    //       </svg>
    //     </div> */}

    //     {/* menu */}
    //     {/* <div
    //       className="hidden pt-4 w-full md:flex md:items-center md:w-auto"
    //       id="menu"
    //     >
    //       <ul
    //         className="
    //           space-y-1
    //           space-x-0
    //           text-base
    //           text-gray-700
    //           md:flex
    //           md:justify-between
    //           md:items-center
    //           md:space-y-0
    //           md:space-x-8
    //         "
    //       >
    //         <li>
    //           <NavLink href="/">
    //             <a className="block py-2 hover:text-indigo-600">Home</a>
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink href="/projects">
    //             <a className="block py-2 hover:text-indigo-600">Projects</a>
    //           </NavLink>
    //         </li>
    //         <li>
    //           <button className="hidden text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out md:block btn btn-active btn-primary">
    //             Contact Me
    //           </button>
    //         </li>
    //       </ul>
    //     </div> */}
    //     <div className="w-full h-screen drawer">
    //       <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    //       <div className="flex flex-col drawer-content">
    //         {/* Navbar */}
    //         <div className="w-full navbar">
    //           <div className="flex-none lg:hidden">
    //             <label
    //               htmlFor="my-drawer-3"
    //               className="btn btn-square btn-ghost"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 className="inline-block w-6 h-6 stroke-current"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth={2}
    //                   d="M4 6h16M4 12h16M4 18h16"
    //                 />
    //               </svg>
    //             </label>
    //           </div>
    //           <div className="flex-1 px-2 mx-2">
    //             <NavLink href="/">
    //               <a className="flex items-center space-x-3 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
    //                 <div className="relative w-12 h-12 rounded">
    //                   <Logo />
    //                 </div>
    //                 <div className="">
    //                   <h2
    //                     tabIndex={0}
    //                     className="text-sm font-bold text-gray-800 dark:text-gray-100 focus:outline-none"
    //                   >
    //                     Fr0stF0x&apos;s Portfolio
    //                   </h2>
    //                 </div>
    //               </a>
    //             </NavLink>
    //           </div>
    //           <div className="hidden flex-none lg:block">
    //             <ul className="menu menu-horizontal">
    //               {/* Navbar menu content here */}
    //               <li>
    //                 <NavLink href="/">
    //                   <a className="block py-2 hover:text-indigo-600">Home</a>
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink href="/projects">
    //                   <a className="block py-2 hover:text-indigo-600">
    //                     Projects
    //                   </a>
    //                 </NavLink>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         {/* Page content here */}
    //         Content
    //       </div>
    //       <div className="drawer-side">
    //         <label htmlFor="my-drawer-3" className="drawer-overlay" />
    //         <ul className="overflow-y-auto p-4 w-80 menu bg-base-100">
    //           {/* Sidebar content here */}
    //           <li>
    //             <NavLink href="/">
    //               <a className="block py-2 hover:text-indigo-600">Home</a>
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink href="/projects">
    //               <a className="block py-2 hover:text-indigo-600">Projects</a>
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
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
        <NavLink href="/">
          <a className="flex items-center space-x-3 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
            <div className="relative h-12 w-12 rounded">
              <Logo />
            </div>
            <div className="">
              <h2
                tabIndex={0}
                className="text-sm font-bold text-gray-800 focus:outline-none dark:text-gray-100"
              >
                Fr0stF0x&apos;s Portfolio
              </h2>
            </div>
          </a>
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
            <NavLink className="rounded py-0" href="/">
              <a className="block py-2">About me</a>
            </NavLink>
          </li>
          <li>
            <NavLink className="rounded py-0" href="/projects">
              <a className="block py-2">My works</a>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
