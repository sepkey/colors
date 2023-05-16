type Props = {
  hexColor: string;
};

const HexColor = ({ hexColor }: Props) => {
  return <section className="bg-yellow-200 rounded border border-orange-200">{hexColor}</section>;
};

export default HexColor;
