import { useState } from 'react';

const styles = {
  selector: {
    fontSize: '1rem',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '0.5rem',
    textAlign: 'center',
    width: '15rem',
  },

  option: {
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontWeight: 'normal',
  },

  selectedOption: {
    backgroundColor: '#e0e0e0',
    color: '#000',
    fontWeight: 'bold',
  },
};

function Select({options, onChange}) {

  const [value, setValue] = useState(options[0].value);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  }

  return (
    <select style={styles.selector} value={value} onChange={handleChange}>
      {options.map((option) => <option style={value === option.value ? styles.selectedOption : styles.option} key={option.value} value={option.value}>{option.label}</option>)}
    </select>
  );
}

export default Select;
