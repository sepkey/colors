import { getComplementColors, getTriadColors } from '../../lib/getRelatedColors';
import { AdjustColorActions } from '../../lib/reducer';
import RelatedColorTags from './RelatedColorTag';
import { Dispatch } from 'react';

type Props = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};
const RelatedColors = ({ hexColor, dispatch }: Props) => {
  const triadColors = getTriadColors(hexColor);
  const complemenyColors = getComplementColors(hexColor);
  return (
    <>
      <RelatedColorTags dispatch={dispatch} hexColors={triadColors} title="Triad Colors" />
      <RelatedColorTags
        dispatch={dispatch}
        hexColors={complemenyColors}
        title="Complimentary Colors"
      />
    </>
  );
};

export default RelatedColors;
