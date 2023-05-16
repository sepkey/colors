import './App.css';
import ColorPicker from './components/colorPicker';
import { useState } from 'react';

function App() {
  const [hexColor, setHexColor] = useState('#a2e2c6');
  return (
    <div className="grid max-w-3xl grid-cols-1 gap-8 p-8 pb-40 mx-auto dark:bg-slate-900 dark:text-white sm:grid-cols-2 bg-amber-50">
      <ColorPicker hexColor={hexColor} onChange={(e) => setHexColor(e.target.value)} />
    </div>
  );
}

export default App;
