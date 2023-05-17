import { MouseEventHandler } from 'react';
import ColorChangeSample from '../common/ColorChangeSample';
import Button from '../common/Button';
import { TfiClose } from 'react-icons/tfi';
type Props = {
  name: string;
  hexColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onRemove?: () => void;
};
const SavedColor = ({ name, hexColor, onClick, onRemove }: Props) => {
  return (
    <article className="flex items-center place-content-between">
      <ColorChangeSample className="px-4" hexColor={hexColor} onClick={onClick} />
      <h3 className="text-sm whitespace-nowrap">{name}</h3>
      <Button size="small" variant="destructive" onClick={onRemove}>
        <TfiClose size={24} />
      </Button>
    </article>
  );
};

export default SavedColor;
