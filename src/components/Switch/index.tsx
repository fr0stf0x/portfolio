import React, { CSSProperties } from 'react';

import classNames from 'classnames';

interface ISwitch extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelStyle?: CSSProperties;
  labelClassName?: string;
}

const Switch: React.FC<React.PropsWithChildren<ISwitch>> = ({
  className,
  label,
  labelClassName = '',
  labelStyle = {},
  id,
  ...props
}) => {
  const uniqueId = React.useId();

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id || uniqueId}
        className={classNames('switch toggle', className)}
        {...props}
      />
      <label
        htmlFor={id || uniqueId}
        className={classNames('switch-label', labelClassName)}
        style={labelStyle}
      >
        {label}
      </label>
    </div>
  );
};

export default Switch;
