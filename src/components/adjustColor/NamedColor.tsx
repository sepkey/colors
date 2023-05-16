import colorNames from 'color-name-list';

type Props = {
  hexColor: string;
};

const NamedColor = ({ hexColor }: Props) => {
  const color = colorNames.find((color) => color.hex === hexColor.toLowerCase());

  if (!color) return null;
  return (
    <p className="bg-yellow-200 rounded border p-1" style={{ borderColor: color.hex }}>
      This color is called <span style={{ color: color.hex }}>{color.name}</span>.
    </p>
  );
};

export default NamedColor;
