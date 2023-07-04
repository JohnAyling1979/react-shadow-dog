import { useState, useEffect } from 'react';
import { CANVAS_WIDTH, CANVAS_HEIGHT, SPRITE_WIDTH, SPRITE_HEIGHT, ANIMATION_MAP } from './constants';
import dogImage from './images/ShadowDog';

function Animator({ ctx }) {
  const [frame, setFrame] = useState(0);
  const [animation, setAnimation] = useState(0);
  const [timeStamp, setTimeStamp] = useState(0);

  useEffect(() => {
    const animate = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(dogImage, SPRITE_WIDTH * frame, SPRITE_HEIGHT * animation, SPRITE_WIDTH, SPRITE_HEIGHT, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      setFrame((prevFrame) => {
        if (timeStamp % ANIMATION_MAP[animation].stagger === 0) {
          if (prevFrame === ANIMATION_MAP[animation].frames) {
            if (ANIMATION_MAP[animation].repeat) {
              return 0;
            }

            return prevFrame;
          } else {
            return prevFrame + 1;
          }
        }

        return prevFrame;
      });
      setTimeStamp((prevTimeStamp) => prevTimeStamp + 1);
    }

    if (ctx) {
      requestAnimationFrame(animate);
    }
  }, [ctx, frame, animation, timeStamp]);

  const changeAnimation = (e) => {
    setAnimation(e.target.value);
    setFrame(0);
    setTimeStamp(0);
  }

  return (
    <div className='select-container'>
      <select className='selector' onChange={changeAnimation}>
        {Object.keys(ANIMATION_MAP).map((key) => <option key={key} value={key}>{ANIMATION_MAP[key].name}</option>)}
      </select>
    </div>
  );
}

export default Animator;
