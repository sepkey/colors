import LabledInput from '../common/LabledInput';
import { hex } from 'color-convert';

type Props = {
  hexColor: string;
};

const ToRGB = ({ hexColor }: Props) => {
  const [red, green, blue] = hex.rgb(hexColor);
  return (
    <div className="flex gap-2">
      <LabledInput label="R" value={red} type="text" className="border" />
      <LabledInput label="G" value={green} type="text" className="border" />
      <LabledInput label="B" value={blue} type="text" className="border" />
    </div>
  );
};

export default ToRGB;
