import LabledInput from '../common/LabledInput';
import { hex } from 'color-convert';

type Props = {
  hexColor: string;
};

const ToRGB = ({ hexColor }: Props) => {
  const [c, m, y, k] = hex.cmyk(hexColor);
  return (
    // <div className="flex gap-2">
    <div className="grid w-full grid-flow-col gap-2">
      <LabledInput label="C" value={c} type="text" className="border" />
      <LabledInput label="M" value={m} type="text" className="border" />
      <LabledInput label="Y" value={y} type="text" className="border" />
      <LabledInput label="K" value={k} type="text" className="border" />
    </div>
  );
};

export default ToRGB;
