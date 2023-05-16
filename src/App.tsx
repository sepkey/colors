import './App.css';
import ColorPicker from './components/colorPicker';
import { useReducer } from 'react';
import { initialState, colorReducer } from './lib/reducer';
import AdjustColor from './components/adjustColor';
import RelatedColors from './components/RelatedColors';

function App() {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);
  return (
    <div className="grid max-w-3xl grid-cols-1 gap-8 p-8 pb-40 mx-auto dark:bg-slate-900 dark:text-white sm:grid-cols-2 bg-amber-50">
      <ColorPicker
        hexColor={hexColor}
        onChange={(e) =>
          dispatch({ type: 'update-hex-color', payload: { hexColor: e.target.value } })
        }
      />
      <AdjustColor hexColor={hexColor} />
      <RelatedColors hexColor={hexColor} />
    </div>
  );
}

export default App;
