import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Amount name="Euros" defaultValue={0} />
      <Amount name="- Euros" defaultValue={-2} />
    </div>
  );
}

function Amount({ name = 'Oh... this field has no name :(', defaultValue}) {
    const [inputClassName, setInputClassName] = useState(defaultValue < 0 ? 'negative' : 'positive');

    const onChangeHandler = (event) => event.target.value < 0 ? setInputClassName("negative") : setInputClassName("positive")
    return (
      <div className="Amount">
        <label>{name}</label>
        <p></p>
        <input
          onChange={onChangeHandler} type="number" defaultValue={defaultValue} className={`amount-input-${inputClassName}`}
        />
      </div>
    );
  }

export default App;
