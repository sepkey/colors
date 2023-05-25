import { Dispatch } from 'react';
import LabledInput from '../common/LabledInput';
import { hex } from 'color-convert';
import { AdjustColorActions } from '../../lib/reducer';

type Props = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const ToHSL = ({ hexColor, dispatch }: Props) => {
  const [h, s, v] = hex.hsv(hexColor);

  const handleUpdate = ({ hue = h, saturation = s, value = v }) => {
    dispatch({ type: 'update-hsv-color', payload: { hsv: [hue, saturation, value] } });
  };
  return (
    <div className="flex gap-2">
      <LabledInput
        label="H"
        value={h}
        type="number"
        className="border"
        onChange={(e) => handleUpdate({ hue: e.target.valueAsNumber, saturation: s, value: v })}
      />
      <LabledInput
        label="S"
        value={s}
        type="number"
        className="border"
        onChange={(e) => handleUpdate({ hue: h, saturation: e.target.valueAsNumber, value: v })}
      />
      <LabledInput
        label="V"
        value={v}
        type="number"
        className="border"
        onChange={(e) => handleUpdate({ hue: h, saturation: s, value: e.target.valueAsNumber })}
      />
    </div>
  );
};

export default ToHSL;
