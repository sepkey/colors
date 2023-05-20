import { ChangeEventHandler, useId } from 'react';
import clsx from 'clsx';

type Props = {
  id?: string;
  label: string;
  value: string | number;
  type?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const LabledInput = ({ label, value, id, type = 'text', className, onChange }: Props) => {
  id = useId() + id;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        className={clsx('w-full ', className)}
        onChange={onChange}
        readOnly={!onChange}
      />
    </div>
  );
};

export default LabledInput;

// type Props = ComponentPropsWithoutRef<'input'> & { label: string };
