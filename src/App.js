import './App.css';
import { useEffect, useState } from 'react';
import Converter from './components/Converter';



function App() {
  const [conversionCountValue, setConversionCountValue] = useState(0)
  
  const onChangeHandler = () => {
    var currentValue = conversionCountValue + 1
    if(currentValue > 5) {
      alert("Convert without limits by becoming a premium user")
    }
    setConversionCountValue(currentValue)
  }


  return (
    <div className="App">
      <Converter cryptoName={"BTC"} exchangeRate={995} onChange={onChangeHandler} />
      <Converter cryptoName={"ETH"} exchangeRate={1.2} onChange={onChangeHandler}/>
      <Converter cryptoName={"Dogecoin"} exchangeRate={24} onChange={onChangeHandler}/>
    </div>
  );
}

export default App;
