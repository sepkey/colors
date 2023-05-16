import LabledInput from '../common/LabledInput';
import { hex } from 'color-convert';

type Props = {
  hexColor: string;
};

const ToHSL = ({ hexColor }: Props) => {
  const [hue, saturation, value] = hex.hsv(hexColor);
  return (
    <div className="flex gap-2">
      <LabledInput label="H" value={hue} type="text" className="border" />
      <LabledInput label="S" value={saturation} type="text" className="border" />
      <LabledInput label="V" value={value} type="text" className="border" />
    </div>
  );
};

export default ToHSL;
