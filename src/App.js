import './App.css';
import { useEffect, useState} from 'react';
import Converter from './components/Converter';
import Premium from './components/Premium';
import useCachedState from './hooks/useCachedState';

function App() {
  const [conversionCountValue, setConversionCountValue] = useState(0)
  const [isPremium, setIsPremium] = useCachedState("premium", false)

  const onChangeHandler = () => {
    if (isPremium == 0) {
      var currentValue = conversionCountValue + 1
      if (currentValue > 5) {
        alert("Convert without limits by becoming a premium user")
      }
      setConversionCountValue(currentValue)
    }
  }

  const onClickhandler = (e) => {
    setIsPremium(true)
  }


  return (
    <div className="App">
      <Converter cryptoName={"BTC"} exchangeRate={995} onChange={onChangeHandler} />
      <Converter cryptoName={"ETH"} exchangeRate={1.2} onChange={onChangeHandler} />
      <Converter cryptoName={"Dogecoin"} exchangeRate={24} onChange={onChangeHandler} />
      <Premium isPremium={isPremium} onClick={onClickhandler} />
    </div>
  );
}

export default App;
