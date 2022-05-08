import { ReactNode, useEffect } from 'react';

import { useTheme } from 'next-themes';
import Link from 'next/link';

import useIsMobile from '@/hooks/useIsMobile';
import Header from '@/layout/Header';

import useMagicCursor from '../hooks/useMagicCursor';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const {
    startMakeSmall,
    stopMakeSmall,
    startTracking,
    stopTracking,
    startTransformButton,
    stopTransformButton,
  } = useMagicCursor();

  const isTouch = useIsMobile();
  const { theme } = useTheme();

  useEffect(() => {
    // custom cursor
    if (!isTouch) {
      startTracking();
      startMakeSmall();
      startTransformButton();
    }

    return () => {
      if (!isTouch) {
        stopTracking();
        stopMakeSmall();
        stopTransformButton();
      }
    };
  }, [isTouch, theme]);

  return (
    <div className="main">
      <div className="custom-cursor"></div>
      {/* <div className="shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div> */}
      <div className="w-full px-1 text-gray-700 antialiased">
        {props.meta}

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
                <Link href="https://fr0stf0x.github.io">
                  <a className="block py-2 hover:text-indigo-600">Projects</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Main };
