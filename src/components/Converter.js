import Amount from "./Amount";
import { useEffect, useState } from 'react';
import './converter.css';
import Premium from "./Premium";

export default function Converter({ cryptoName, exchangeRate, onChange }) {
    const [eurosValue, setEurosValue] = useState(0)
    const [cryptoValue, setCryptoValue] = useState(0)
    
    const onChangeHandler = (currentBaseAmount) => {
        setEurosValue(currentBaseAmount)
        if (currentBaseAmount > 0) {
            setCryptoValue(currentBaseAmount * exchangeRate)
        } else {
            setCryptoValue(0)
        }
        onChange()
    }

    

    return (
        <div className="converter">
            <Amount name={"Euros"} value={eurosValue} isReadonly={false} onChange={onChangeHandler} />
            <Amount name={cryptoName} value={cryptoValue} isReadonly={true} onChange={onChangeHandler} />
        </div>
    );
}