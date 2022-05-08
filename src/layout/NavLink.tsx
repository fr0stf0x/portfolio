import { FC } from 'react';

import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface INavLink {
  href: string;
  exact?: boolean;
  className?: string;
  activeClassName?: string;
}

const NavLink: FC<React.PropsWithChildren<INavLink>> = ({
  href,
  exact,
  children,
  className,
  activeClassName = 'hidden',
  ...props
}) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a
        {...props}
        className={classnames(className, { [activeClassName]: isActive })}
      >
        {children}
      </a>
    </Link>
  );
};

NavLink.defaultProps = {
  exact: false,
};

export default NavLink;
