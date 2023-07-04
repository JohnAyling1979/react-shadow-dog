import { useEffect, useState } from "react";
import { BACKGROUND_WIDTH, CANVAS_HEIGHT, CANVAS_WIDTH } from "../../constants";
import layer1 from "../../images/background/Layer1";
import layer2 from "../../images/background/Layer2";
import layer3 from "../../images/background/Layer3";
import layer4 from "../../images/background/Layer4";
import layer5 from "../../images/background/Layer5";
import Slider from "../Slider/Slider";

function useLayer(ctx, layer, gameSpeed, modifier) {
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(gameSpeed * modifier);

  const update = (newSpeed) => {
    setPosition((prevPosition) => {
      let newPosition = prevPosition - speed;

      if (newPosition <= -BACKGROUND_WIDTH) {
        newPosition += BACKGROUND_WIDTH;
      }

      return newPosition;
    });

    setSpeed(newSpeed * modifier);
  }

  const draw = () => {
    ctx.drawImage(layer, position, 0);
    ctx.drawImage(layer, position + BACKGROUND_WIDTH, 0);
  }

  return {
    update,
    draw
  }
}

function ParallaxAnimator({ctx}) {
  const [timeStamp, setTimeStamp] = useState(0);
  const [speed, setSpeed] = useState(5);

  const layer1Obj = useLayer(ctx, layer1, speed, 0.2);
  const layer2Obj = useLayer(ctx, layer2, speed, 0.4);
  const layer3Obj = useLayer(ctx, layer3, speed, 0.6);
  const layer4Obj = useLayer(ctx, layer4, speed, 0.8);
  const layer5Obj = useLayer(ctx, layer5, speed, 1.0);

  const layers = [layer1Obj, layer2Obj, layer3Obj, layer4Obj, layer5Obj];

  useEffect(() => {
    const animate = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      layers.forEach((layer) => {
        layer.update(speed);
        layer.draw();
      });

      setTimeStamp((prevTimeStamp) => prevTimeStamp + 1);
    }

    if (ctx) {
      requestAnimationFrame(animate);
    }
  }, [ctx, timeStamp]);

  return (
    <div>
      <div>Speed: <span>{speed}</span></div>
      <Slider min={0} max={50} initial={speed} onChange={setSpeed} />
    </div>
  );
}

export default ParallaxAnimator;
