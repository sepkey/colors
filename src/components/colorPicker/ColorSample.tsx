import React from 'react';
type Props = {
  hexColor: string;
};

const ColorSample = ({ hexColor }: Props) => {
  return (
    <section className="flex flex-col  items-center gap-2 h-20">
      <div
        className="w-full h-full rounded border border-slate-500"
        style={{ backgroundColor: hexColor }}
      />
    </section>
  );
};

export default ColorSample;
