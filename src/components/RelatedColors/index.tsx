import { getComplementColors, getTriadColors } from '../../lib/getRelatedColors';
import RelatedColorTags from './RelatedColorTag';

type Props = {
  hexColor: string;
};
const RelatedColors = ({ hexColor }: Props) => {
  const triadColors = getTriadColors(hexColor);
  const complemenyColors = getComplementColors(hexColor);
  return (
    <>
      <RelatedColorTags hexColors={triadColors} title="Triad Colors" />
      <RelatedColorTags hexColors={complemenyColors} title="Complimentary Colors" />
    </>
  );
};

export default RelatedColors;
