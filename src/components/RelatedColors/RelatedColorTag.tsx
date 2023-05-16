import ColorChangeSample from '../common/ColorChangeSample';

type Props = {
  title: string;
  hexColors: string[];
};

const RelatedColorTags = ({ hexColors, title }: Props) => {
  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          return <ColorChangeSample key={hexColor} hexColor={hexColor} className="w-full h-full" />;
        })}
      </div>
    </section>
  );
};

export default RelatedColorTags;
