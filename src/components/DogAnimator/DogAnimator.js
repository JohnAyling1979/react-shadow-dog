import { useState, useEffect } from 'react';
import { CANVAS_WIDTH, CANVAS_HEIGHT, SPRITE_WIDTH, SPRITE_HEIGHT, ANIMATION_MAP } from '../../constants';
import dogImage from '../../images/ShadowDog';
import Select from '../Select/Select';

function DogAnimator({ ctx }) {
  const [frame, setFrame] = useState(0);
  const [animation, setAnimation] = useState(0);
  const [timeStamp, setTimeStamp] = useState(0);

  useEffect(() => {
    const animate = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      const x = CANVAS_WIDTH / 2 - SPRITE_WIDTH / 4;
      const y = CANVAS_HEIGHT / 2 - SPRITE_HEIGHT / 4;

      ctx.drawImage(dogImage, SPRITE_WIDTH * frame, SPRITE_HEIGHT * animation, SPRITE_WIDTH, SPRITE_HEIGHT, x, y, SPRITE_WIDTH / 2, SPRITE_HEIGHT / 2);

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

  const changeAnimation = (value) => {
    setAnimation(value);
    setFrame(0);
    setTimeStamp(0);
  }

  const animationOptions = Object.keys(ANIMATION_MAP).map((key) => ({
    value: key,
    label: ANIMATION_MAP[key].name,
  }));

  return (
    <Select options={animationOptions} onChange={changeAnimation} />
  );
}

export default DogAnimator;
