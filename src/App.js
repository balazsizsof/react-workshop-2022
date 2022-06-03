import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Amount name="Euros" />
    </div>
  );
}

function Amount({ name = 'Oh this field has no name :(' }) {
    const [inputClassName, setInputClassName] = useState('positive');

    const onChangeHandler = (event) => event.target.value < 0 ? setInputClassName("negative") : setInputClassName("positive")
    return (
      <div className="Amount">
        <label>{name}</label>
        <p></p>
        <input
          onChange={onChangeHandler} type="number" defaultValue={0} className={`amount-input-${inputClassName}`}
        />
      </div>
    );
  }

export default App;
