import React, { ChangeEventHandler } from 'react';
import LabledInput from '../common/LabledInput';
import HexColor from '../common/HexColor';

type Props = {
  hexColor: string;
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const ColorSelect = ({ hexColor, onChange, label = 'Color' }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <LabledInput
        label={label}
        id="color-input"
        type="color"
        onChange={onChange}
        value={hexColor}
      />
      <HexColor hexColor={hexColor} />
    </div>
  );
};

export default ColorSelect;
