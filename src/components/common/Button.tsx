import clsx from 'clsx';
import { MouseEventHandler, PropsWithChildren, CSSProperties } from 'react';

type Props = {
  variant?: string;
  size?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  onClick,
  children,
  className,
  size,
  variant,
  style,
}: PropsWithChildren<Props>) => {
  return (
    <button className={clsx(variant, size, className)} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
