import React, { useRef } from 'react';

import { useTheme } from 'next-themes';

import { AbleToChangeTag, CommonProps } from '@/types';
import createTagChangeable from '@/utils/createTagChangeable';

interface IButton extends CommonProps, AbleToChangeTag {
  onClick?(event: React.MouseEvent): void;
}

const Tag = createTagChangeable<IButton>('button');

// eslint-disable-next-line react/display-name
const Button: React.FC<IButton> = ({
  children,
  onClick,
  as = 'button',
  className = '',
  style = {},
}) => {
  const ref = useRef<HTMLElement>();
  const { theme } = useTheme();

  const showCursor = () => {
    const cursor = document.querySelector('.custom-cursor');

    if (cursor) {
      cursor.classList.add('hide');
    }
  };

  const hideCursor = () => {
    const cursor = document.querySelector('.custom-cursor');

    if (cursor) {
      cursor.classList.remove('hide');
    }
  };

  React.useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseenter', showCursor);
      ref.current.addEventListener('mouseleave', hideCursor);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mouseenter', showCursor);
        ref.current.removeEventListener('mouseleave', hideCursor);
      }
    };
  }, [theme]);

  return (
    <Tag
      as={as}
      onClick={onClick}
      className={`btn-hide-cursor ${className}`}
      style={style}
      ref={ref}
    >
      <span className="content">{children}</span>
      <svg
        className="arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13.71 10.67"
      >
        <polygon points="8.82 10.67 8.08 10 11.87 5.84 0 5.84 0 4.84 11.87 4.84 8.08 0.67 8.82 0 13.71 5.34 8.82 10.67"></polygon>
      </svg>
      {/* <polygon points="8.82 10.67 8.08 10 11.87 5.84 0 5.84 0 4.84 11.87 4.84 8.08 0.67 8.82 0 13.71 5.34 8.82 10.67"></polygon> */}
    </Tag>
  );
};

export default Button;
