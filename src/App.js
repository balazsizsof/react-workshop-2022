import './App.css';
import { useEffect, useState } from 'react';

function getExchangeRate() {
  return Math.random() * 10000;
}

function App() {
  const [exchangeRate, setExchangeRate] = useState(getExchangeRate());
  const [eurosValue, setEurosValue] = useState(0)

  useEffect(() => {
		let timer = setTimeout(()=>{setExchangeRate(0)}, 5000);

		return () => {
			clearTimeout(timer);
		}
	}, [eurosValue]);

  const onChangeHandler = (event) => {
    setEurosValue(event.currentTarget.value)
  }


  return (
    <div className="App">
      <Amount name="$BTC" value={exchangeRate} inputType="text" isReadonly={true} />
      <Amount name="Euros" value={eurosValue} inputType="number" isReadonly={false} onChange={onChangeHandler}/>
    </div>
  );
}

function Amount({ name = 'Oh... this field has no name :(', value , inputType, isReadonly, onChange}) {
  const [inputClassName, setInputClassName] = useState(value < 0 ? 'negative' : 'positive');

  const onChangeHandler = (event) => {
    event.currentTarget.value < 0 ? setInputClassName("negative") : setInputClassName("positive")
    onChange(event)
  }

  return (
    <div className="Amount">
      <label>{name}:</label><br></br>
      <input
        onChange={onChangeHandler} type={inputType} value={value} className={`amount-input-${inputClassName}`} readOnly={isReadonly}
      />
    </div>
  );
}

export default App;
