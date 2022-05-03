import {
  forwardRef,
  PropsWithChildren,
  PropsWithoutRef,
  RefAttributes,
  ForwardRefExoticComponent,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';

import { AbleToChangeTag, KnownWebTarget } from '@/types';

export default function createTagChangeable<
  Props extends PropsWithChildren<AbleToChangeTag>,
  Ref extends unknown = unknown
>(
  defaultTagName: KnownWebTarget,
  componentName?: string
): ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<Props>> & RefAttributes<Ref>
> {
  const Component = forwardRef<Ref, Props>(
    ({ as: As = defaultTagName, children, ...props }: Props, ref) => {
      // eslint-disable-next-line react/display-name
      const Tag = forwardRef(
        (
          {
            children: tagChildren,
            ...tagProps
          }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
          pRef
        ) => (
          <As ref={pRef} {...tagProps}>
            {tagChildren}
          </As>
        )
      );

      return (
        <Tag ref={ref} {...props}>
          {children}
        </Tag>
      );
    }
  );

  Component.displayName = componentName;

  return Component;
}
