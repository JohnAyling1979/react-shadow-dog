import { useEffect, useState } from 'react';
import './App.css';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from './constants';
import Animator from './Animator';

function App() {
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = document.getElementById('canvas1');

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    setCtx(canvas.getContext('2d'));
  }, []);

  return (
    <div>
      <Animator ctx={ctx} />
      <canvas id="canvas1"></canvas>
    </div>
  );
}

export default App;
