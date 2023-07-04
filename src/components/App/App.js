import { useEffect, useState } from 'react';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../../constants';
import DogAnimator from '../DogAnimator/DogAnimator';
import Select from '../Select/Select';
import ParallaxAnimator from '../ParallaxAnimator/ParallaxAnimator';

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100vh',
  },

  canvas: {
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    border: '5px solid black',
  },
};

function App() {
  const [ctx, setCtx] = useState(null);
  const [demo, setDemo] = useState('dog');

  useEffect(() => {
    const canvas = document.getElementById('canvas1');

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    setCtx(canvas.getContext('2d'));
  }, []);

  const demoOptions = [
    { label: 'Shadow Dog', value: 'dog' },
    { label: 'Parallax', value: 'paralax' },
  ];

  return (
    <div style={styles.app}>
      {demo === 'dog' && <DogAnimator ctx={ctx} />}
      {demo === 'paralax' && <ParallaxAnimator ctx={ctx} />}
      <canvas style={styles.canvas} id="canvas1"></canvas>
      <Select options={demoOptions} onChange={setDemo} />
    </div>
  );
}

export default App;
