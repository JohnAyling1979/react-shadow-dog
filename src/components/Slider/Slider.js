import { useState } from 'react';
import { CANVAS_WIDTH } from '../../constants';

const styles = {
  slider: {
    appearance: 'none',
    height: '10px',
    width: CANVAS_WIDTH,
    background: '#ccc',
    outline: 'none',
    borderRadius: '12px',
    boxShadow: '0 1px 10px 1px black',
  },
};

function Slider({initial, min, max, onChange}) {

  const [value, setValue] = useState(initial);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  }

  return (
    <input style={styles.slider} type='range' min={min} max={max} value={value} onChange={handleChange} />
  );
}

export default Slider;
