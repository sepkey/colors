import clsx from 'clsx';
import { MouseEventHandler } from 'react';
import Button from '../common/Button';

type Props = {
  hexColor: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ColorChangeSample = ({ hexColor, className, onClick }: Props) => {
  return (
    <Button
      className={clsx(
        'border rounded border-slate-400 transition-shadow duration-200 ease-in hover:shadow-xl',
        className,
      )}
      style={{ backgroundColor: hexColor }}
      onClick={onClick}
    >
      {hexColor}
    </Button>
  );
};

export default ColorChangeSample;
