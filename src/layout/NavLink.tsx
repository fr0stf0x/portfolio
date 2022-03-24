import { FC } from 'react';

import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface INavLink {
  href: string;
  exact?: boolean;
  className?: string;
}

const NavLink: FC<INavLink> = ({
  href,
  exact,
  children,
  className,
  ...props
}) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a {...props} className={classnames(className, { active: isActive })}>
        {children}
      </a>
    </Link>
  );
};

NavLink.defaultProps = {
  exact: false,
};

export default NavLink;
