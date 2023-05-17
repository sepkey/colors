import { useState } from 'react';
import LabledInput from '../common/LabledInput';
import Button from '../common/Button';

type Props = {
  onSave: (color: string) => void;
};
const AddColor = ({ onSave }: Props) => {
  const [savedColorName, setSavedColorName] = useState('');
  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSave(savedColorName);
      }}
    >
      <LabledInput
        label="Color Name"
        value={savedColorName}
        onChange={(e) => setSavedColorName(e.target.value)}
        className="border-2"
      />

      <Button className="w-full bg-green-500 p-1">📝 Save Color</Button>
    </form>
  );
};

export default AddColor;
