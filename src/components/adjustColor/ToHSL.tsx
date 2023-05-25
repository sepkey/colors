import { Dispatch } from 'react';
import LabledInput from '../common/LabledInput';
import { hex } from 'color-convert';
import { AdjustColorActions } from '../../lib/reducer';

type Props = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const ToHSL = ({ hexColor, dispatch }: Props) => {
  const [h, s, l] = hex.hsl(hexColor);

  const handleUpdate = ({ hue = h, saturation = s, lightness = l }) => {
    dispatch({ type: 'update-hsl-color', payload: { hsl: [hue, saturation, lightness] } });
  };

  return (
    <div className="flex gap-2">
      <LabledInput
        label="H"
        value={h}
        type="number"
        className="border"
        onChange={(e) => handleUpdate({ hue: e.target.valueAsNumber, saturation: s, lightness: l })}
      />
      <LabledInput
        label="S"
        value={s}
        type="number"
        className="border"
        onChange={(e) => handleUpdate({ hue: h, saturation: e.target.valueAsNumber, lightness: l })}
      />
      <LabledInput
        label="L"
        value={l}
        type="number"
        className="border"
        onChange={(e) => handleUpdate({ hue: h, saturation: s, lightness: e.target.valueAsNumber })}
      />
    </div>
  );
};

export default ToHSL;
