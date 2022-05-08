import React, { FC, PropsWithChildren } from 'react';

import classNames from 'classnames';
import gsap from 'gsap';
import { useTheme } from 'next-themes';

import useMagicCursor from '@/hooks/useMagicCursor';

const ThemeSwitcher: FC<PropsWithChildren<{}>> = () => {
  const { theme, setTheme } = useTheme();
  const uniqueId = React.useId();
  const { startTracking, stopTracking } = useMagicCursor();

  const toggleTheme = () => {
    console.log('OUTPUT ~ toggleTheme ~ theme', theme);
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const onMouseEnter = () => {
    const snap = document.querySelector('.theme-switch .check-mark__items');

    if (snap) {
      snap.classList.add('bigger');
      const { x, y, width, height } = snap.getBoundingClientRect();

      stopTracking();

      requestAnimationFrame(() => {
        gsap.to('.custom-cursor', {
          width,
          height,
          x: x + 10,
          y: y + 10,
          duration: 0.4,
          opacity: 0,
        });
      });
    }
  };

  const onMouseLeave = () => {
    const el = document.querySelector('.theme-switch .check-mark__items');

    if (el) {
      el.classList.remove('bigger');

      gsap.set('.custom-cursor', {
        opacity: 1,
      });

      startTracking();
    }
  };

  return (
    <div className="theme-switch">
      <input
        type="checkbox"
        id={uniqueId}
        className={classNames('')}
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label
        htmlFor={uniqueId}
        className="check-mark"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span className="check-mark__ray">
          <span className="ray ray--1"></span>
          <span className="ray ray--2"></span>
          <span className="ray ray--3"></span>
        </span>
        <span className="check-mark__items">
          <span className="glare"></span>
          <span className="dot dot--1"></span>
          <span className="dot dot--2"></span>
          <span className="dot dot--3"></span>
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
