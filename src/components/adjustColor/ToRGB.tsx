import { Dispatch } from 'react';
import LabledInput from '../common/LabledInput';
import { hex } from 'color-convert';
import { AdjustColorActions } from '../../lib/reducer';

type Props = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const ToRGB = ({ hexColor, dispatch }: Props) => {
  const [r, g, b] = hex.rgb(hexColor);
  const handleUpdate = ({ red = r, green = g, blue = b }) => {
    dispatch({ type: 'update-rgb-color', payload: { rgb: [red, green, blue] } });
  };
  return (
    <div className="flex gap-2">
      <LabledInput
        label="R"
        value={r}
        type="number"
        className="border"
        onChange={(e) => {
          handleUpdate({ red: e.target.valueAsNumber, green: g, blue: b });
        }}
      />
      <LabledInput
        label="G"
        value={g}
        type="number"
        className="border"
        onChange={(e) => handleUpdate({ red: r, green: e.target.valueAsNumber, blue: b })}
      />
      <LabledInput
        label="B"
        value={b}
        type="number"
        className="border"
        onChange={(e) => handleUpdate({ red: r, green: g, blue: e.target.valueAsNumber })}
      />
    </div>
  );
};

export default ToRGB;
