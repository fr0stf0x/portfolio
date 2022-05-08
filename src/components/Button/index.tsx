import React from 'react';

import { AbleToChangeTag, CommonProps } from '@/types';
import createTagChangeable from '@/utils/createTagChangeable';

interface IButton extends CommonProps, AbleToChangeTag {
  onClick?(event: React.MouseEvent): void;
}

const Tag = createTagChangeable<IButton>('button');

// eslint-disable-next-line react/display-name
const Button: React.FC<React.PropsWithChildren<IButton>> = ({
  children,
  onClick,
  as = 'button',
  className = '',
  style = {},
}) => {
  return (
    <Tag
      as={as}
      onClick={onClick}
      className={`btn-hide-cursor ${className}`}
      style={style}
    >
      <span className="content">{children}</span>
      <div className="arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.71 10.67">
          <polygon points="8.82 10.67 8.08 10 11.87 5.84 0 5.84 0 4.84 11.87 4.84 8.08 0.67 8.82 0 13.71 5.34 8.82 10.67"></polygon>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.71 10.67">
          <polygon points="8.82 10.67 8.08 10 11.87 5.84 0 5.84 0 4.84 11.87 4.84 8.08 0.67 8.82 0 13.71 5.34 8.82 10.67"></polygon>
        </svg>
      </div>
      <span className="snap"></span>
    </Tag>
  );
};

export default Button;
