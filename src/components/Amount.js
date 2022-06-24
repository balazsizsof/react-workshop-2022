import './amount.css';

export default function Amount({ name, value, isReadonly, onChange }) {
    
    const onChangeHandler = (event) => {
        onChange(event.currentTarget.value)
    }

    return (
        <div className="Amount">
            <label>{name}:</label><br></br>
            <input
                onChange={onChangeHandler} type={isReadonly ? "text" : "number"} value={value} className={value < 0 ? "amount-input-negative" : "amount-input-positive"} readOnly={isReadonly}
            />
        </div>
    );
}