type Props = {
  hexColor: string;
};

const ColorSample = ({ hexColor }: Props) => {
  return (
    <section className="flex flex-col  items-center gap-2 h-40">
      <div className="w-full h-full rounded border " style={{ backgroundColor: hexColor }} />
    </section>
  );
};

export default ColorSample;
