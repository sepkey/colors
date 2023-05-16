import React from 'react';
import ToRGB from './ToRGB';
import ToHSL from './ToHSL';
import ToHSV from './toHSV';
import ToCMYK from './ToCMYK';
import NamedColor from './NamedColor';

type Props = {
  hexColor: string;
};

const AdjustColor = ({ hexColor }: Props) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h3>Adjust Colors</h3>
      <ToRGB hexColor={hexColor} />
      <ToHSL hexColor={hexColor} />
      <ToHSV hexColor={hexColor} />
      <ToCMYK hexColor={hexColor} />
      <NamedColor hexColor={hexColor} />
    </div>
  );
};

export default AdjustColor;
