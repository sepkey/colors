import { Dispatch } from 'react';
import ColorChangeSample from '../common/ColorChangeSample';
import { AdjustColorActions } from '../../lib/reducer';

type Props = {
  title: string;
  hexColors: string[];
  dispatch: Dispatch<AdjustColorActions>;
};

const RelatedColorTags = ({ hexColors, title, dispatch }: Props) => {
  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          return (
            <ColorChangeSample
              onClick={() =>
                dispatch({ type: 'update-hex-color', payload: { hexColor: hexColor } })
              }
              key={hexColor}
              hexColor={hexColor}
              className="w-full h-full"
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedColorTags;
