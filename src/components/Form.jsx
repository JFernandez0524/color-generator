import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className='container'>
      <h4>Color Generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <div>
          <input
            type='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div>
          <input
            type='text'
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder='#f15025'
          />
        </div>
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
