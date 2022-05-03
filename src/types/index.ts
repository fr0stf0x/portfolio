export type CommonProps = {
  className?: string;
  style?: React.CSSProperties;
};

export type AbleToChangeTag = {
  as?: KnownWebTarget;
};

interface ExoticComponentWithDisplayName<P = unknown>
  extends React.ExoticComponent<P> {
  defaultProps?: Partial<P>;
  displayName?: string;
}

export type AnyComponent<P = any> =
  | ExoticComponentWithDisplayName<P>
  | React.ComponentType<P>;

export type KnownWebTarget = keyof JSX.IntrinsicElements | AnyComponent;
