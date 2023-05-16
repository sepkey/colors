import { ChangeEventHandler } from 'react';
import ColorSelect from './ColorSelect';
import ColorSample from './ColorSample';

type Props = {
  hexColor: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const ColorPicker = ({ hexColor, onChange }: Props) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <h3>Select Color</h3>
      <ColorSelect hexColor={hexColor} onChange={onChange} />
      <ColorSample hexColor={hexColor} />
    </div>
  );
};

export default ColorPicker;
