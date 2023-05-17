import { useState } from 'react';
import AddColor from './AddColor';
import SavedColor from './SavedColor';
import id from 'lodash.uniqueid';
type Props = {
  hexColor: string;
};

const savedList = [
  { id: id(), name: '1989 Miami Hotline', hexColor: '#dd3366' },
  { id: id(), name: 'Blue Fire', hexColor: '#00aadd' },
];
const SavedColors = ({ hexColor }: Props) => {
  const [savedColors, setSavedColors] = useState(savedList);

  return (
    <section className="flex flex-col w-full gap-4 sm:col-span-2">
      <h3>Save Color</h3>
      <AddColor
        onSave={(name) => setSavedColors((colors) => [...colors, { hexColor, id: id(), name }])}
      />
      {savedColors.map(({ id, name, hexColor }) => {
        return (
          <SavedColor
            hexColor={hexColor}
            name={name}
            key={id}
            onRemove={() => setSavedColors((colors) => colors.filter((color) => color.id !== id))}
          />
        );
      })}
    </section>
  );
};

export default SavedColors;
