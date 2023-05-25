import { Dispatch } from 'react';
import LabledInput from '../common/LabledInput';
import { hex } from 'color-convert';
import { AdjustColorActions } from '../../lib/reducer';

type Props = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const ToRGB = ({ hexColor, dispatch }: Props) => {
  const [c, m, y, k] = hex.cmyk(hexColor);

  const handleUpdate = ({ cyan = c, magenta = m, yellow = y, black = k }) => {
    dispatch({ type: 'update-cmyk-color', payload: { cmyk: [cyan, magenta, yellow, black] } });
  };
  return (
    // <div className="flex gap-2">
    <div className="grid w-full grid-flow-col gap-2">
      <LabledInput
        label="C"
        value={c}
        type="number"
        className="border"
        onChange={(e) =>
          handleUpdate({ cyan: e.target.valueAsNumber, magenta: m, yellow: y, black: k })
        }
      />
      <LabledInput
        label="M"
        value={m}
        type="number"
        className="border"
        onChange={(e) =>
          handleUpdate({ cyan: c, magenta: e.target.valueAsNumber, yellow: y, black: k })
        }
      />
      <LabledInput
        label="Y"
        value={y}
        type="number"
        className="border"
        onChange={(e) =>
          handleUpdate({ cyan: c, magenta: m, yellow: e.target.valueAsNumber, black: k })
        }
      />
      <LabledInput
        label="K"
        value={k}
        type="number"
        className="border"
        onChange={(e) =>
          handleUpdate({ cyan: c, magenta: m, yellow: y, black: e.target.valueAsNumber })
        }
      />
    </div>
  );
};

export default ToRGB;
