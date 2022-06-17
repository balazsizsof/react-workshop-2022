import './App.css';
import { useEffect, useState } from 'react';

function exchangeRate() {
  return Math.random() * 10000;
}

function App() {
  return (
    <div className="App">
      <Amount name="$BTC" defaultValue={exchangeRate()} inputType="text" isReadonly="true"/>
      <Amount name="Euros" defaultValue={0} inputType="number" isReadonly="false" />
      <p></p>
    </div>
  );
}

function Amount({ name = 'Oh... this field has no name :(', defaultValue , inputType, isReadonly}) {
  const [inputClassName, setInputClassName] = useState(defaultValue < 0 ? 'negative' : 'positive');

  const onChangeHandler = (event) => event.target.value < 0 ? setInputClassName("negative") : setInputClassName("positive")
  return (
    <div className="Amount">
      <label>{name}:</label><br></br>
      <input
        onChange={onChangeHandler} type={inputType} defaultValue={defaultValue} className={`amount-input-${inputClassName}`} readOnly={isReadonly}
      />
    </div>
  );
}

export default App;
