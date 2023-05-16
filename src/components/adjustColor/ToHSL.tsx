import LabledInput from '../common/LabledInput';
import { hex } from 'color-convert';

type Props = {
  hexColor: string;
};

const ToHSL = ({ hexColor }: Props) => {
  const [hue, saturation, lightness] = hex.hsl(hexColor);
  return (
    <div className="flex gap-2">
      <LabledInput label="H" value={hue} type="text" className="border" />
      <LabledInput label="S" value={saturation} type="text" className="border" />
      <LabledInput label="L" value={lightness} type="text" className="border" />
    </div>
  );
};

export default ToHSL;
